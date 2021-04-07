console.log('this is tut 4');
/*let element=document.createElement('li');
  let text=document.createTextNode('I am a text node');
  element.appendChild(text); 
//add a class name to the my element
element.className='childul';
element.id="createdli";
element.setAttribute('title','mytitle');
element.innerText="hello this is created by ashwani";

let ul=document.querySelector('ul.this');
ul.appendChild(element);
console.log(ul);
console.log(element);

let elem2=document.createElement('h3');
elem2.id="elem2";
elem2.className='elem2';
let tNode=document.createTextNode('this is creates node of elem2');

elem2.appendChild(tNode);
element.replaceWith(elem2);
 let myul=document.getElementById('myul');
 myul.replaceChild(element,document.getElementById('fui'));
 myul.removeChild(document.getElementById('lui'));
 let pr=elem2.getAttribute('elem2');
 console.log(pr);
*/
  let h_elem=document.createElement('h3');
  h_elem.id='h_elem';
  h_elem.className='h_elem';
  let tnode=document.createTextNode('go to code with ashwani');
  h_elem.appendChild(tnode);

  let tag=document.createElement('a');
  tag.setAttribute('href','facebook.com');
  tag.appendChild(h_elem);
console.log(h_elem);
console.log(tag);

let ul=document.querySelector('ul.this');
ul.appendChild(tag);
console.log(ul);
