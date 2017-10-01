import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  private apiBase = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get<any[]>(this.apiBase)
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
      this.http.post(this.apiBase, newTodo)
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
    this.http.delete(`${this.apiBase}/${todo.id}`)
      .subscribe(data => {
        this.todos = this.todos.filter(item => item !== todo);
      });
  }

  updateTodo(todo) {
    this.http.put(`${this.apiBase}/${todo.id}`, todo)
      .subscribe();
  }
}
