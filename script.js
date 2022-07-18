let menuIcon = document.getElementById('menu-icon');
let xIcon = document.getElementById('x-icon');
let header = document.getElementById('header');
let descNav = document.getElementById('desc-nav');
let logo = document.getElementById('logo');
let listItems1 = document.getElementById('list-items-1');
let listItems2 = document.getElementById('list-items-2');
let listItems3 = document.getElementById('list-items-3');



function myFunction(x) {
    if (x.matches) {
        menuIcon.addEventListener('click',()=>{
            menuIcon.style.display = 'none';
            xIcon.style.display = 'block';
            header.style.height = '812px';
            header.style.background = '#6070ff';
            descNav.style.display = 'block';
            logo.style.display = 'none';
            listItems1.style.display = 'block';
            listItems2.style.display = 'block';
            listItems3.style.display = 'block';
            xIcon.style.color = '#fff'
        });
        
        xIcon.addEventListener('click',()=>{
            menuIcon.style.display = 'block';
            xIcon.style.display = 'none';
            header.style.height = '72px';
            header.style.background = '#fff';
            logo.style.display = 'block';
            listItems1.style.display = 'none';
            listItems2.style.display = 'none';
            listItems3.style.display = 'none';
        });
        
    } else {
      listItems1.addEventListener('click', () => {
        listItems1.style.textDecoration = 'underline';
        listItems2.style.textDecoration = 'none';
        listItems3.style.textDecoration = 'none';
      });
      listItems2.addEventListener('click', () => {
        listItems1.style.textDecoration = 'none';
        listItems2.style.textDecoration = 'underline';
        listItems3.style.textDecoration = 'none';
      });
      listItems3.addEventListener('click', () => {
        listItems1.style.textDecoration = 'none';
        listItems2.style.textDecoration = 'none';
        listItems3.style.textDecoration = 'underline';
      });
    }
  }
  
  const x = window.matchMedia('(max-width: 768px)');
  myFunction(x); // Call listener function at run time