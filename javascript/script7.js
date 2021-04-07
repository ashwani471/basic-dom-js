console.log('this is a tut 7 about localstorage');
let impArray=['adrak','pyaz','bhindi'];
//add a key value inside a local storage
localStorage.setItem('name','harry'); 
localStorage.setItem('name2','Ashwani');
localStorage.setItem('sabzi',JSON.stringify(impArray));  //so there is a problem to store it in the form of array so here we can use capital json.stingify to  store as like a array
//to get the item in the local storage
let name =localStorage.getItem('name');
name=JSON.parse(localStorage.getItem('sabzi'));
// localStorage.clear();    //to clear the entire local storage
//to clear the particular key value pair
localStorage.removeItem('name');
console.log(name);
//same u can make the sessionstorage like sessionStorage.setitem
//but the only diff is only when the session is over the session storage is 
//also over ....  but the localStorage is not over it doent has any expiry.
