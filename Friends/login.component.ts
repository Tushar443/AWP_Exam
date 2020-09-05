import { Component, OnInit } from '@angular/core';
import {  FormGroup, Validators,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public myformgroup=this.fb.group({
    username: ['',Validators.required],
    password:['',Validators.required],

  });
  constructor(
    private route:Router,
    private fb:FormBuilder,
    private http:HttpClient,
    ) { }

  ngOnInit(): void {
    
  }

  


 
  async btnlogin (){
    const data = this.myformgroup.value;
    console.log(data);
    const url = 'http://localhost:3000/auth-user';
    const result:any=await this.http.post(url,data).toPromise();
    console.log(result.opr);
    if(result.opr){
      console.log("hii");
      sessionStorage.setItem('sid', data.username);
      this.route.navigate(['home']);
    }
    else{
         alert("Id or Password is wrong!!")
      }
    // if (data.username==="rohit"&& data.password==="12345"){
    //   sessionStorage.setItem('sid', 'true');
    //   this.route.navigate(['home'])
    // }
    // else{
    //   alert("Id or Password is wrong!!")
    // }
    
  }
  // username1=new FormControl();
  // password1=new FormControl();
  //  btnlogin=()=>{
    
    
  //   if (this.username1.value===null){
  //       alert("Please Enter Username");
        
       
  //   }
  //   else if(this.password1.value===null){
        
  //       alert("Please Enter Password");
  //   }
  //   else{
  //     this.username1.setValue("");
  //     this.password1.setValue("");
  //   }
    
  //  }

}
