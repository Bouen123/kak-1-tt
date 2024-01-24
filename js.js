const btn = document.getElementById('btn');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
// Add event listeners to each btn for mouseover and mouseout
// btn.forEach(btn => {
//     btn.addEventListener('mouseover', () => {
      
//       btn.style.backgroundColor = 'hsl(75, 94%, 57%)';
      
//       btn.style.cursor = 'pointer';
//     });
  
//     btn.addEventListener('mouseout', () => {
      
//       btn.style.backgroundColor = '';
      
//       btn.style.cursor = 'pointer';
//     });
//   });



// for (var i = 0; i < btn.length; i++) {
//     btn.addEventListener('mouseenter', () => {
//         btn.style.backgroundColor = 'hsl(75, 94%, 57%)';
//         btn.style.cursor = 'pointer';

//     } );}



// btn1.addEventListener('mouseover', () =>{
//     btn1.get
    
// });
// btns.addEventListener('mouseover', () => {
//     btnover.style.backgroundColor = 'blue';
//   });

//   for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener('mouseover', () => {
//       // Change the btn's background color to blue
//       btns[i].style.backgroundColor = 'blue';
//     });
//   }


//btn
btn.addEventListener('mouseenter', () => {
    btn.style.backgroundColor = 'hsl(75, 94%, 57%)';
    btn.style.cursor = 'pointer';
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.backgroundColor = ''; 
  });
//hover on button
//btn1
  btn1.addEventListener('mouseenter', () => {
    btn1.style.backgroundColor ='hsl(75, 94%, 57%)';
    btn1.style.cursor = 'pointer';
  });
  btn1.addEventListener('mouseleave', () => {
    btn1.style.backgroundColor = ''; 
  });
  //btn2
  btn2.addEventListener('mouseenter', () => {
    btn2.style.backgroundColor ='hsl(75, 94%, 57%)';
    btn2.style.cursor = 'pointer';
  });
  btn2.addEventListener('mouseleave', () => {
    btn2.style.backgroundColor = ''; 
  });
  //btn3
  btn3.addEventListener('mouseenter', () => {
    btn3.style.backgroundColor ='hsl(75, 94%, 57%)';
    btn3.style.cursor = 'pointer';
  });
  btn3.addEventListener('mouseleave', () => {
    btn3.style.backgroundColor = ''; 
  });

  //button click
  btn.addEventListener('click', () => {
    window.location.href = 'https://github.com/Bouen123/';
  });
  btn1.addEventListener('click', () => {
    window.location.href = 'https://www.facebook.com/';
  });
  btn2.addEventListener('click', () => {
    window.location.href = 'https://twitter.com/home';
  });
  btn3.addEventListener('click', () => {
    window.location.href = 'https://www.instagram.com/';
  });

