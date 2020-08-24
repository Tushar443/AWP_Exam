// function AjaxCall(){
    
//     let xhr=new XMLHttpRequest();

//     xhr.open('GET','https://reqres.in/api/users?page=2',true);

//     xhr.onload=()=>{
//         console.log(xhr.responseText);
//        var data =JSON.parse(xhr.responseText);
//         buildLogic(data);
//     }
//     xhr.send();
 
// }

// function buildLogic(data1){
//     for(let i=0;i<7;i++){
//     let item =data1.data[i];
//     let parent= document.querySelector('#parentnode');
//     let newElement=parent.children[0].cloneNode(true);

//     newElement.children[0].innerHTML=item.first_name;
//     newElement.children[1].style.display='none';
//     parent.appendChild(newElement);
//     }
// }




// for(let i=0;i<10;i++){
//     setInterval(()=>{
//         console.log(i);
//     }),50000
// };

// a=10;

// b="Tushar";

// var a;
// console.log(a);
// console.log(b);


// let sum1=sum();
// console.log(sum1);

// function sum(){
//     return 10+20;
// }


