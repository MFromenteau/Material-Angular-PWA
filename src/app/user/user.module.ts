import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MatButtonModule, MatIconModule, MatListModule, MatCardModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatGridListModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatGridListModule
  ],
  declarations: [LoginComponent, SignupComponent]
})
export class UserModule { }
