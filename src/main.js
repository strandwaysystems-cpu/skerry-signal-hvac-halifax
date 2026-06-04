import './styles.css';

document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
      anchor.addEventListener('click',function(event){
        var target=document.querySelector(this.getAttribute('href'));
        if(target){event.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'});}
      });
    });
