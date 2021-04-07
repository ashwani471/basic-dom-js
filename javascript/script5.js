console.log('this is a tut 5 on event');
document.getElementById('heading').addEventListener(/*'click'*/'mouseover',function(e){
    let variable;
    console.log('u have clickd the heading');
    variable=e.target;
    variable=e.target.className;
   variable=Array.from(e.target.classList);
   variable=e.offsetX;
    console.log(variable);

    // console.log(e);
    // alert('u have clicked the heading');
    // location.href="//facebook.com";
});