import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint = 'What needs to be done?';
  colspan = 3;

  todos = [];

  addTodo($event) {
    console.log($event);
    this.todos = this.todos.concat($event.target.value);
    // this.todos = [...this.todos, $event.target.value];
  }
}
