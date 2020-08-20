window.addEventListener('load',()=>{
    let parent =document.querySelector('#parentnode');
    // let newElement=parent.children[0].cloneNode(true);
    // parent.appendChild(newElement);
    
    let arrayList=[
    { id: 1, post: "Hello World" },
    { id: 2, post: "Hello Universe" },
    { id: 3, post: "Hello Javascript" },
    { id: 4, post: "Hello HTML" },
    { id: 5, post: "Hello CSS" },
    { id: 6, post: "Hello DOM" },
    { id: 7, post: "Hello JSON" },
    { id: 8, post: "Hello XML" },
    { id: 9, post: "Hello Callback" },
    { id: 10, post: "Hello AJAX" },
    ]

    for(let i=0;i<arrayList.length;i++){
        let newElement=parent.children[0].cloneNode(true);
        newElement.children[0].innerHTML=arrayList[i].id+" "+arrayList[i].post;
        newElement.children[0].style.display='flex';
        parent.appendChild(newElement);
    }

});