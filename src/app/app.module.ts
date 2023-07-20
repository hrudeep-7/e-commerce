import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { DetailsComponent } from './details/details.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DetailsComponent,
  ],
  imports: [ BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
