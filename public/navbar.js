const navbarApi = 'http://localhost:1800'

window.addEventListener("DOMContentLoaded", () => {
    const ul = document.getElementById("navbar-menu");
    const navbarItems = ul.querySelectorAll('li');

    const link0 = document.createElement('a');
    link0.setAttribute('href', `${navbarApi}`);
    link0.innerHTML = 'About-Us';
    navbarItems[0].appendChild(link0);

    const link1 = document.createElement('a');
    link1.setAttribute('href', `${navbarApi}/services`);
    link1.innerHTML = 'Services';
    navbarItems[1].appendChild(link1);

    const link2 = document.createElement('a');
    link2.setAttribute('href', `${navbarApi}/contact-us`);
    link2.innerHTML = 'Contact-Us';
    navbarItems[2].appendChild(link2);
})