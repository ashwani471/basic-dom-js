console.log('welcome to tutorial 3');

let cont=document.querySelector('.no');
cont=document.querySelector('.container');

// console.log(cont.childNodes);
// console.log(cont.children);
let nodeName=cont.childNodes[1].nodeName;
let nodeType=cont.childNodes[1].nodeType;
// console.log(nodeName);
// console.log(nodeType);

//node type
//1.element
//2.Attribute
//3.Text node
//8.Comment
//9.Document
//10.Doctype

let container=document.querySelector('div.container');
console.log(container.children[1].children[0].children); 
console.log(container.firstChild);
console.log(container.firstElementChild);

// console.log(container.lastChild);
// console.log(container.lastElementChild);
console.log(container.children);
console.log(container.childElementCount);//count of child elemenet.
console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling);





