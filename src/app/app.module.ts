import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { DetailsComponent } from './details/details.component';
import { AddMemberComponent } from './add-member/add-member.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {FormControl, Validators, FormsModule, ReactiveFormsModule,NgForm, FormGroupDirective,} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DetailsComponent,
    AddMemberComponent
  ],
  imports: [ BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    RouterModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
