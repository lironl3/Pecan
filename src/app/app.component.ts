import {Component, OnInit} from '@angular/core';
import {ApiService} from "./services/api.service";
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {UtilsService} from "./services/utils.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pecan-assignment';
  connections: any[];
  user = faUser;
  clickedItems = [];
  databases = [];

  constructor(private apiService: ApiService, private utilsService: UtilsService) {
  }

  ngOnInit(): void {
    this.connections = this.apiService.getConnections();
    this.databases = this.apiService.getDbs();
  }

  openItem(event: any) {
    this.clickedItems = this.utilsService.clickItem(event.isClicked, this.clickedItems, event.name);
  }

  isItemShown(name: string) {
    return this.clickedItems.includes(name);
  }
}
