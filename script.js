const alterarModoTela = document.querySelector('#alternar-modo-page');
const bodyClear = document.querySelector('body');
const formularioClear = document.querySelector('.fomulario');
const linksClear = document.querySelector('.apresentacao-link');
const foto_clear = document.querySelector('.foto-principal');

alterarModoTela.addEventListener('click', () =>{
    bodyClear.classList.toggle('clear_mode');
    formularioClear.classList.toggle('formulario_clear_mode');
    foto_clear.classList.toggle('foto-principal_clear_mode');
    linksClear.classList.toggle('apresentacao-link_clear_mode');
})
