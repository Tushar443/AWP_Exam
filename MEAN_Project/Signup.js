function Validation(){
    /**
     * All Input Elements
     */
    let fname=document.querySelector('#fname').value;
    let lname=document.querySelector('#lname').value;
    let mobile=document.querySelector('#mobile').value;
    let email=document.querySelector('#email').value;
    let password=document.querySelector('#password').value;
    let retypepass=document.querySelector('#retypepass').value;
 /**
  * Error Span
  */
    let f_error=document.querySelector('#f_error');
    let l_error=document.querySelector('#l_error');
    let mobile_error=document.querySelector('#mobile_error');
    let email_error=document.querySelector('#email_error');
    let pass_error=document.querySelector('#pass_error');
    let repass_error=document.querySelector('#repass_error');

    let flag=true;
    let result ="";
    if(fname.length ===0){
        flag=false;
        result="*please fill this field";
    }else if(fname.length < 2 || fname.length>=15){
        flag=false;
        result="*please enter valid name";
    }
    f_error.innerHTML=result;
    if(flag){
        f_error.innerHTML="";
        if(lname.length ===0){
            flag=false;
            result="*please fill this field"; 
        }else if(lname.length < 2 || lname.length>=15){
            flag=false;
            result="*please enter valid surname";
        }
        l_error.innerHTML =result;
    }



    return flag;


}




//     let result ="";
//     let flag =true;
//     let username = document.querySelector('#Username').value;
//    let password =document.querySelector('#Password').value;

//    let u_span =document.querySelector('#u_error');
//    let u_pass =document.querySelector('#u_password');
//     if(username.length ===0){
//             flag=false;
//             result="*please fill this feild";
//     }else if (username.length <=5 || username.length>=20){
//         flag=false;
//          result ="*please enter valid username";
//         } 
//         u_span.innerHTML =result;
//         if(flag){
//             if(password.length ===0){
//                 u_span.innerHTML ="";
//                 flag=false;
//                 result="*please fill this feild";
//             }else if(password.length <=5 || password.length>=12){
//                             flag=false;
//                             result ="*please enter valid password";
//                         }
//                         u_pass.innerHTML=result;
//         }
        
//         return flag;
