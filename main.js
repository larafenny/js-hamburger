//mostrare / nascondere il menu principale

// test per verificare se ho collegato correttamente fiile js
console.log ('JS ok');

// creo costante click che si riferisce alla classe fas fa-bars
const clickOpen = document.querySelector('.fa-bars');

// aspetto azione del click per scatenare l'evento
clickOpen.addEventListener('click', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    hamburgerMenu.style.display = 'block';
});

