function registerUserVer12(){
    let username =document.querySelector('#username').value;
    let city =document.querySelector('#city').value;

    let xhr =new XMLHttpRequest();
   
   let url =`http://localhost:5600/about/?username=${username}&city=${city}`;

    xhr.open('GET',url);
    xhr.onload =()=>{
        let result = xhr.responseText;
        console.log(result);
    }
    xhr.send();
}

async function registerUsingPost(){
    let username =document.querySelector('#username').value;
    let city =document.querySelector('#city').value;
    console.log(username,city);
    let url ="http://localhost:5600/about";
    
    let result ={username,city}

    await fetch(url, {
        method: "POST",
        body: JSON.stringify(result),
        headers: {
          "Content-Type": "application/json",
        },
      });

    // await fetch(url,{
    //     method: "POST",
    //     body:JSON.stringify(result),
    //     headers:{
    //         'Content-Type':'application/json',
    //     },
    // });
}