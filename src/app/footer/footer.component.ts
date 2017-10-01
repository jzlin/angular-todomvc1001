import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnChanges {

  @Input('data') todos = [];
  tooMore = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('todos changed!!!!!!');
    this.tooMore = this.todos.length > 5;
  }

}
