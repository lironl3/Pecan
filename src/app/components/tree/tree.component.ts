import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {UtilsService} from "../../services/utils.service";
import {faDatabase, faFile, faTable, faColumns} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  @Input() data;
  @Input() userId: string;
  @Input() depth: number;
  clickedItems = [];
  children = [];

  constructor(private apiService: ApiService, private utilsService: UtilsService) { }

  ngOnInit(): void {
  }

  clickItem(event: any, name: string) {
    this.clickedItems = this.utilsService.clickItem(event.isClicked, this.clickedItems, event.name);

    if (this.isItemShown(name)) {
      this.children = this.apiService.getChildren(this.data.id);
    }
  }

  isItemShown(name: string) {
    return this.clickedItems.includes(name);
  }

  doesHavePermissions(userId) {
    if (this.data.permissions) {
      return this.data.permissions.includes(userId);
    } else {
      return false;
    }
  }

  getIcon() {
    switch(this.data.id.charAt(0)) {
      case ('d'): {
        return faDatabase;
      }
      case ('s'): {
        return faFile;
      }
      case ('t'): {
        return faTable;
      }
      default: {
        return faColumns;
      }
    }
  }
}
