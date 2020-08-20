function AjaxCall(){
    var data;
    let xhr=new XMLHttpRequest();

    xhr.open('GET','https://reqres.in/api/users?page=2',true);

    xhr.onload=()=>{
        console.log(xhr.responseText);
        data =JSON.parse(xhr.responseText);
        buildLogic(data);
    }
    xhr.send();
 
}

function buildLogic(data1){
    for(let i=0;i<7;i++){
    let item =data1.data[i];
    let parent= document.querySelector('#parentnode');
    let newElement=parent.children[0].cloneNode(true);

    newElement.children[0].innerHTML=item.email;
    newElement.children[1].style.display='none';
    parent.appendChild(newElement);
    }
}