import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    acno: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[0-9]*')]],
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    pswd: ['', [Validators.required, Validators.minLength(6), Validators.pattern('[0-9a-zA-Z]*')]],
  })
  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) {
  }
  ngOnInit(): void {
  }
  register() {
    if (this.registerForm.valid) {
      var uname = this.registerForm.value.uname
      var acno = this.registerForm.value.acno
      var pswd = this.registerForm.value.pswd
      this.ds.register(acno, uname, pswd)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)
            this.router.navigateByUrl("")
          }
        }, (result) => {
          alert(result.error.message)
          this.router.navigateByUrl("")
        }
        )
    }

    else {
      alert("invalid form");
    }

  }
}




