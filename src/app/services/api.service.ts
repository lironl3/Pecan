import { Injectable } from '@angular/core';
import { connections, data } from './data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  public getConnections() {
    return connections;
  }

  public getDbs() {
    return data.map(db => ({id: db.id, name: db.name, permissions: db.permissions}));
  }

  getChildren(parentId) {
    return this.findRecursive(data, parentId);
  }

  // in order to not get all data at once I look only for the immediate children of the parent every time there's a click on the parent.
  findRecursive(children, parentId) {
      for (const item of children) {
        if (item.id === parentId) {
          return item.children.map(child => ({id: child.id, name: child.name, permissions: child.permissions}));
        }

        if (item.hasOwnProperty('children')) {
          let child = this.findRecursive(item.children, parentId);

          if (child) {
            return child;
          }
        }
      }
    }
}
