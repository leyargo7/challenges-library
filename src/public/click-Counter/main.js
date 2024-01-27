const btn = document.querySelector('#increment');
const reset = document.querySelector('#reset');
const countDisplay = document.querySelector('#display')
const message = document.querySelector('.info-message')

let count = 0;



btn.addEventListener('click', function(){
    count++
    countDisplay.textContent = count
    
    if (count === 10) {
        message.style = 'visibility: visible;';
        btn.disabled = true;
        
    }
})

reset.addEventListener('click', function(){
    count=0;
    countDisplay.textContent = count
    btn.disabled = false;
    message.style = 'visibility: hidden;'
})
