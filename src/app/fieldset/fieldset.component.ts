import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.scss']
})
export class FieldsetComponent implements OnInit {
  options = [];

  @Input() data: object

  constructor() {
  }

  ngOnInit() {
    for( let item in this.data ) {
      this.options.push(this.data[item])
    }
  }

}
