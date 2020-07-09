import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VenserviceService } from '../venservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  logForm : FormGroup
  logd: any;
 

    constructor(private logs: VenserviceService,private formBuilder: FormBuilder, private router: Router) {}
    getreqlog(logfd){
     
  
      if (this.logForm.invalid) {
        return;
    }
      this.logs.getlog(logfd).subscribe(
        (logd) => {
        this.logd = logd['data']
        if(this.logd === 1 ){
          
          this.router.navigateByUrl('/dashboard');
        }
        else{
          // this.error = 'Invalid Credentials'
        }
        console.log(logd['data'])
     
        });
     }

  // getreqlog(){
  
  //   this.router.navigate(['/dashboard']);

  // }
  ngOnInit(): void {
    this.logForm = this.formBuilder.group({
      username: ['', Validators.required],
        password: ['', Validators.required]
      
    });
  }

}
