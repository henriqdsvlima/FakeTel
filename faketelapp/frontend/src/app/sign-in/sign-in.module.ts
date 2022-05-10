import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignInComponent } from './sign-in.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list'


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatListModule
  ],
  declarations: [SignInComponent]
})
export class SignInModule { }
