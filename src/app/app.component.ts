import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  inputHint = 'What needs to be done?';
  colspan = 3;

  todos = [];
  todo = '';
  filterType = 'All';
  isToggleAll = false;

  constructor(private dataSvc: DataService) {

  }

  ngOnInit() {
    this.dataSvc.getTodos()
      .subscribe(data => {
        this.todos = data;
      });
  }

  addTodo() {
    if (this.todo) {
      let newTodo = {
        text: this.todo,
        done: false
      };
      this.dataSvc.addTodo(newTodo)
        .subscribe(data => {
          this.todos = this.todos.concat(data);
          this.todo = '';
        });
    }
    // this.todos = [...this.todos, $event.target.value];
  }

  todoModelChange($event) {
    // console.log($event);
    this.todo = $event;
  }

  clearCompleted() {
    this.todos.filter(item => item.done)
      .forEach(item => {
        this.removeTodo(item);
      });

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
      this.updateTodo(item);
    });
  }

  removeTodo(todo) {
    this.dataSvc.removeTodo(todo)
      .subscribe(data => {
        this.todos = this.todos.filter(item => item !== todo);
      });
  }

  updateTodo(todo) {
    this.dataSvc.updateTodo(todo)
      .subscribe();
  }
}
