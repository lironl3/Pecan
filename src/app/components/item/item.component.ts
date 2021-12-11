import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {faAngleDown, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from "@fortawesome/fontawesome-common-types";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() itemName: string;
  @Input() icon: IconDefinition;
  @Input() doesHavePermissions: boolean;
  @Input() depth: number;
  @Output() event: EventEmitter<any> = new EventEmitter();
  clicked = false;
  arrowRight = faAngleRight;
  arrowDown = faAngleDown;

  constructor() { }

  ngOnInit(): void {

  }

  public click() {
    if (this.doesHavePermissions) {
      this.clicked = !this.clicked;
    }

    this.event.emit({name:this.itemName, isClicked: this.clicked});
  }

}
