import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // currentuser = this.ds["currentUser"]
  withdrawForm = this.fb.group({
    acno: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.minLength(6), Validators.pattern('[0-9a-zA-Z]*')]],
    amt: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })

  depositForm = this.fb.group({
    acno: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.minLength(6), Validators.pattern('[0-9a-zA-Z]*')]],
    amt: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })
  userName: any
acno:any
  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) {
    this.userName = localStorage.getItem("userName")
  }

  ngOnInit(): void {
  }
  Deposit() {
    if (this.depositForm.valid) {
      var acno = this.depositForm.value.acno;
      var pswd = this.depositForm.value.pswd;
      var amt = this.depositForm.value.amt;
      this.ds.Deposit(acno, pswd, amt).subscribe((result: any) => {
        if (result) {
          alert(result.message)
        }
      }, (result) => {
        alert(result.error.message)
      }
      )
    }

    else {
      alert("invalid Form")
    }
  }

  withDraw() {
    if (this.depositForm.valid) {
      var acno = this.withdrawForm.value.acno;
      var pswd = this.withdrawForm.value.pswd;
      var amt = this.withdrawForm.value.amt;
      this.ds.withDraw(acno, pswd, amt).subscribe((result: any) => {
        if (result) {
          alert(result.message)
        }
      }, (result) => {
        alert(result.error.message)
      }
      )
    }

    else {
      alert("invalid Form")
    }
  }
  DeleteAcc(){
    this.acno=localStorage.getItem("currentAcc")
  }
  onDelete(event:any){
    this.ds.deleteAcc(event)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message)
        this.router.navigateByUrl("")
      }
    },(result)=>{
      alert(result.error.message)
    })
  }
  onCancel(){
    this.acno=""
  }
}

