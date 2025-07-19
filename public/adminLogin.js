// window.addEventListener("DOMContentLoaded", () => {
//     document.getElementById()
// })

async function checkLogin(event) {
    event.preventDefault();
    const adminId = document.getElementById('adminid').value;
    const adminPassword = document.getElementById('adminpassword').value;

    console.log("Admin Id : " + adminId);
    console.log("Password : " + adminPassword);
    dataSave(adminId, adminPassword);
}

function dataSave(a, b) {
    console.log(a);
    console.log(b);
}