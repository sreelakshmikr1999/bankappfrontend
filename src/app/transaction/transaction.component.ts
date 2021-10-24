import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactions:any
  acno:any
  constructor(public ds:DataService) { 
   this.acno=localStorage.getItem("currentAcc")
   this.ds.gettransaction(this.acno)
   .subscribe((result:any)=>{
     if(result){
       this.transactions=result.transaction
     }
   },(result)=>{
     alert(result.error.message)
   }
   )
   console.log(this.transactions);  
  }

  ngOnInit(): void {
  }

}
