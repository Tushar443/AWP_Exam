// window.addEventListener('load',()=>{
    
    

// });

// let logic=()=>{
//     let parent =document.querySelector('#parentnode');

//     for(let i=0;i<arrayList.length;i++){
//         let newElement=parent.children[0].cloneNode(true);
//         newElement.children[0].innerHTML=arrayList[i].id+" "+arrayList[i].post;
//         newElement.children[0].style.display='flex';
//         parent.appendChild(newElement);
//     }
// }


/** Fake API */

// let xhr=new XMLHttpRequest();

// xhr.open('GET','https://reqres.in/api/users?page=2');
// xhr.onload=()=>{
//     let data =JSON.parse(xhr.responseText);
//     console.log(data);
// };

// xhr.send();


/**Weather API  */

let xhr=new XMLHttpRequest();

xhr.open('GET','https://api.openweathermap.org//2.5/weather?q=mumbai&appid=6bd8fa0376f0b5c61d97fc17fa2eccbd');
xhr.onload=()=>{
    let data =JSON.parse(xhr.responseText);
    console.log(data);
};

xhr.send();