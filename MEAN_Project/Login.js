




function Validation(){
    let result ="";
    let flag =true;
    let username = document.querySelector('#Username').value;
   let password =document.querySelector('#Password').value;

   let u_span =document.querySelector('#u_error');
   let u_pass =document.querySelector('#u_password');
    if(username.length ===0){
            flag=false;
            result="*please fill this feild";
    }else if (username.length <=5 || username.length>=20){
        flag=false;
         result ="*please enter valid username";
        } 
        u_span.innerHTML =result;
        if(flag){
            if(password.length ===0){
                u_span.innerHTML ="";
                flag=false;
                result="*please fill this feild";
            }else if(password.length <=5 || password.length>=12){
                            flag=false;
                            result ="*please enter valid password";
                        }
                        u_pass.innerHTML=result;
        }
        
        return flag;
}
