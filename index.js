const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Camila, bienvenida a los 20, oficialmente ya eres tía.\n No soy muy bueno con esto de los testamentos, mira que en cole era crack, pero ya no se me da muy bien. Quiero que sepas que te quiero un monton y espero puedas pasar un bonito cumpleaños aunque sea en casa con tu familia. Eres una persona muy especial para mí y espero que nos veamos pronto. Te debo tu besito de cumpleaños. También una anvorgesa, pero eso es opcional (seguro solo quieres la hamburguesa). Espero verte pronto.\n\n\n\n\n Atte: Giacomo    ')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})