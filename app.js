const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions(){
    //button click active class
    for(let i =0; i <sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            if (currentBtn.length > 0) {
                currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            }
            this.className += ' active-btn';
        });
    }
    
       
     //sections active class

    allSections.addEventListener('click', (e)=>{
        const id = e.target.dataset.id;
        if(id){
            sectBtns.forEach((btn)=>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            sections.forEach((section)=>{
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active');
    
        }

    })

    document.addEventListener("DOMContentLoaded", function() {
        const pageHeight = document.body.scrollHeight;
        const circleSize = 100; // Adjust based on the size of your circles
        const numberOfCircles = Math.floor(pageHeight / circleSize);
    
        const container = document.querySelector('.circles-container');
        for (let i = 0; i < numberOfCircles; i++) {
            const circle = document.createElement('div');
            circle.className = `circle-${i + 1}`;
            container.appendChild(circle);
        }
    });

}



PageTransitions();