import { Component } from '@angular/core';

//how to create own component without using ng command - @Component-decorator
@Component({
  selector: 'app-root',   //component name
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myeventapp';
}
