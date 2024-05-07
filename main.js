const arr=['Web Developer','App Developer','Graphic Designer'];
AOS.init();
const fieldName=document.querySelector('.field');

let currentIndex = 0;

function printElement() {
    fieldName.innerHTML = arr[currentIndex];
    currentIndex = (currentIndex + 1) % arr.length; // Move to the next index, looping back to 0 when reaching the end
}
printElement();
setInterval(printElement, 3000);

const dropDown=document.querySelector(".dropdown-content");
document.querySelector('.dropbtn')
    .addEventListener('click',()=>{
        if((window.getComputedStyle(dropDown).display)=='none')
        {
            dropDown.style.display='block';
        }
        else
        {
            dropDown.style.display='none';
        }
    })
