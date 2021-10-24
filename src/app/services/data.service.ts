import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
const options={
  withCredentials:true
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http:HttpClient) {
    
   }

  gettransaction(acno:any){
    const data={
      acno
    }
    return this.http.post("http://localhost:3000/transaction",data,options)
  }
  


  register(acno: any, uname: any, password: any) {
    const data={
      acno,
      uname,
      password
    }
   return this.http.post("http://localhost:3000/register",data)
    
   
  }

  login(acno: any, password: any) {
    const data={
      acno,
      password
    }
   return this.http.post("http://localhost:3000/login",data,options)
   
  }
  Deposit(acno: any, password: any, amt: any) {
    const data={
      acno,
      password,
      amt
    }
   return this.http.post("http://localhost:3000/deposit",data,options)
   
  }



  
  withDraw(acno: any, password: any, amt: any){
    const data={
      acno,
      password,
      amt
    }
   return this.http.post("http://localhost:3000/withdraw",data,options)
  }
  deleteAcc(acno:any){
    return this.http.delete("http://localhost:3000/deleteAcc/"+acno,options)
  }

}
