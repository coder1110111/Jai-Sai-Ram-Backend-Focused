const api = 'http://localhost:1800/send-query'

async function sendQuery(event) {
    event.preventDefault();
    console.log("Hello Form was Submitted!");
    const form = document.querySelector('form');
    const name = form.getElementsByTagName('input')[0].value;
    const email = form.getElementsByTagName('input')[1].value;
    const query = form.getElementsByTagName('textarea')[0].value;
    
    try {
        const response = await fetch(`${api}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, query})
        });

        if(response.ok) {
            const data = await response.json();
            // console.log(data);
            alert(data.message);
        }
        else if(!response.ok) {
            const data = await response.json();
            alert(data.message);
        }
    }

    catch(err) {
        console.error(err);
    }
};