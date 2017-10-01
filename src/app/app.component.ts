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
  todo = '';
  filterType = 'All';
  isToggleAll = false;

  addTodo() {
    if (this.todo) {
      let newTodo = {
        text: this.todo,
        done: false
      };
      this.todos = this.todos.concat(newTodo);
      this.todo = '';
    }
    // this.todos = [...this.todos, $event.target.value];
  }

  todoModelChange($event) {
    // console.log($event);
    this.todo = $event;
  }

  clearCompleted() {
    this.todos = this.todos.filter(item => !item.done);

    // this.todos = this.todos.filter(function (item) {
    //   return !item.done;
    // });

    // this.todos = this.todos.filter((item) => {
    //   return !item.done;
    // });
  }

  updateFilterType(value) {
    console.log(value);
    this.filterType = value;
  }

  toggleAll() {
    this.todos.forEach(item => {
      item.done = this.isToggleAll;
    });
  }

  removeTodo(todo) {
    this.todos = this.todos.filter(item => item !== todo);
  }
}
