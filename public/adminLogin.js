// window.addEventListener("DOMContentLoaded", () => {
//     document.getElementById()
// })

const api = 'http://localhost:1800/admin'

async function checkLogin(event) {
    event.preventDefault();
    const adminId = document.getElementById('adminid').value;
    const adminPassword = document.getElementById('adminpassword').value;

    console.log("Admin Id : " + adminId);
    console.log("Password : " + adminPassword);
    // dataSave(adminId, adminPassword);
    if(adminId === "" || adminPassword === "") {
        alert("Both fields must be filled!");
    }
    else {

        try {
            const response = await fetch(`${api}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({adminEmail: adminId, Password: adminPassword})
            });
            console.log("Login Request Sent");
            if(response.ok) {
                response.json()
                .then(result => {
                    alert(result.message);    //Take user Data and store in LocalStorage
                    localStorage.setItem('token', result.token);
                    window.location.href = `${api}/home`;
                }).catch(err => {
                    console.log(err);
                })
            }
            else if(!response.ok) {
                response.json()
                .then(result => {
                    alert(result.message);
                    console.log(result.token);
                }).catch(err => console.error(err));
            };
        }
        catch(err) {
            console.log("Error : " + err);
        }
    }
}

function dataSave(a, b) {
    console.log(a);
    console.log(b);
}