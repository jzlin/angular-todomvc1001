import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private _todo = [];
  @Input('data')
  set todos(value) {
    this._todo = value;
    this.tooMore = this.todos.length > 5;
  }
  get todos() {
    return this._todo;
  }
  tooMore = false;
  @Output() clearBtnClick = new EventEmitter();

  filterType = 'All';
  @Output() filterTypeChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  logFromFooter() {
    console.log('log from footer!!');
  }

  changeFilterType(value) {
    this.filterType = value;
    this.filterTypeChange.emit(value);
  }

}
