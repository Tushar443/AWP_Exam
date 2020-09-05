import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { FormControl,FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public writeandread=false;
  public readvalue=false;
  public writevalue=false;
  btnlanguage(){
    this.writeandread=true;
  }

  read(){
    this.readvalue=true;
    this.writevalue=false;
  }
  write(){
    this.readvalue=false;
    this.writevalue=true;
  }
  logout(){
    sessionStorage.removeItem("sid");
    this.router.navigate(['login']);
  }

  constructor(
    private router:Router,
    private fb:FormBuilder,
    private http:HttpClient,
    ) { }

    public username1:any=[];
  //  public z:any=this.username1[0].name;
  
    
  async ngOnInit() {
    if (!sessionStorage.getItem('sid')){
      this.router.navigate (['login']);
     }
    let data2:any={username:sessionStorage.getItem('sid')};
    const url1 = 'http://localhost:3000/showusername';
    let result=await this.http.post(url1, data2).toPromise();
    console.log(result);
    this.username1=result;
    let x=this.username1[0].name;
    console.log(x);
   
    console.log(this.username1[0].name)
   
  }
  
  
  
  // let user=sessionStorage.getItem('sid');
  public myformgroup=this.fb.group({
    title:['',Validators.required],
    story:['',Validators.required],
    username:sessionStorage.getItem('sid'),
    // name1:this.username1[0].name
   
  });
  
  async btnStory(){
  const title1=this.myformgroup.get('title');
  const story1=this.myformgroup.get('story');
  const username1=this.myformgroup.get('username');
  const name1=this.username1[0].name;
  console.log(title1.value);
  console.log(story1.value);
  console.log(username1.value);
  console.log(name1);
    let data:any={title:title1.value,story:story1.value,username:username1.value,name:name1};
    console.log(data);
    console.log(this.username1[0].name)

    const url = 'http://localhost:3000/storyadd';
    await this.http.post(url, data).toPromise();
    console.log(data);

  }


}
