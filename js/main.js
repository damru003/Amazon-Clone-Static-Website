const images = document.querySelectorAll(".crousel-images ul img");
const prev_btn = document.querySelector('.slide-prev');
const next_btn = document.querySelector('.slide-next');

let n = 1;
function changeslide() {
    for (let i = 0; 
        i < images.length;
        i = i + 1) {
            images[i].style.display = 'none';
        }
        images[n].style.display = 'block';
        
}
changeslide();

prev_btn.addEventListener('click', (e)=> {
    if (n > 0) {
        n = n - 1;
    }
    else {
        n = images.length - 1;
    }
    changeslide();
})

next_btn.addEventListener('click', (e)=> {
    if (n < images.length - 1 ){
        n = n + 1;
    }
    else {
        n = 0;
    }
    changeslide();
})