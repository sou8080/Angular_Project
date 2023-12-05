import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-engagely',
  templateUrl: './engagely.component.html',
  styleUrls: ['./engagely.component.css']
})
export class EngagelyComponent {
  loginForm: FormGroup;
  showErrorAlert: boolean = false;

  constructor(private formBuilder: FormBuilder,private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    if (email === "admin@xyz.ai" && password === "admin") {
      this.router.navigate(['']);
    } else {
      this.showErrorAlert = true;
      
      setTimeout(() => {
        this.showErrorAlert = false;
      }, 3000);

      console.log(`email_id: ${email}, password: ${password}`);
    }
  }
}
