import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  logForm : FormGroup
 

    constructor(private formBuilder: FormBuilder, private router: Router) {}
 

  getreqlog(){
  
    this.router.navigate(['/dashboard']);

  }
  ngOnInit(): void {
  }

}
