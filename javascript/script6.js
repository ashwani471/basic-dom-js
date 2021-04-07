console.log('this is tut 6 on events');
  
// let btn =document.getElementById('btn');
// btn.addEventListener('click',func1);
// btn.addEventListener('dblclick',func2);

// function func2(e){
//     console.log("thanks its a double click",e);
//     e.preventDefault();
// }

// function func1(e){
//     console.log("thanks",e);
//     e.preventDefault();
// }
document.querySelector('.container').addEventListener('mousemove',function(e){
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetX},154)`;
    console.log('you triggered the mouse event');
});