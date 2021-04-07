let a=window;
a=window.document;
a=document.all;
a=document.body;
a=document.forms[0];
a=document.all;
// Array.from(a).foreach(function(element))
// console.log(element);
a=document.links[0].href;
a=document.images;
a=document.scripts;
a= document.links;

Array.from(a).forEach(function(element){
    let m=element.href;
    let b="text";
    if(a.include(b));
    console.log(a);
})
console.log(a);

