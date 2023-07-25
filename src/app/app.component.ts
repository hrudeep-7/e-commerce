import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  input_text: string ='';
  onsubmit(inputEl:HTMLInputElement){
    this.input_text=inputEl.value
  }
}
