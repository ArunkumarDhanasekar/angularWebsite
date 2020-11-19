import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website1';
  loginForm= new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('')
  })
get username(){
  return this.loginForm.get("username")
}

}
