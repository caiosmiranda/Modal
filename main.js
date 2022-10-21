const btn = document.querySelector('#btn');
const container = document.querySelector('.container');
const btn2 = document.querySelector('.btn-2');
const div = document.querySelector('div')
btn.addEventListener('click', function(){
    container.classList.remove('container');
    btn2.addEventListener('click', function(){
        div.setAttribute('class', 'container');
        btn.classList.remove('talento');
    })
})