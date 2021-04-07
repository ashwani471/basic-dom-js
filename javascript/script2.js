console.log("welcome to tutorial 2");
let element =document.getElementById('myfirst');
// element=element.className;
// element=element.childNodes;
// element=element.parentNode;
element.style.color='red';
element.innerText='ashwani is good boy';
element.innerHTML='<b>ashwani is good boy</b>';
let sel=document.querySelector('#myfirst');
sel=document.querySelector('.child');
sel=document.querySelector('div');
sel.style.color='green';
// console.log(element);
// console.log(sel);
let elems=document.getElementsByClassName('class');
elems=document.getElementsByClassName('container');
// console.log(elems[0].getElementsByClassName('child'));
  console.log(elems);
     
  for(let index=0;index<elems.length;index++){
      const element=elems[index];
      console.log(element);
      element.style.color='red';
  }

// Array.from(elems).forEach(element => {
//       console.log(element);
//       element.style.color='blue';
//   });