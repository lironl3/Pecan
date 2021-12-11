import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public clickItem(isClicked, itemsArray, name) {
    if (isClicked) {
      itemsArray.push(name);
    } else {
      itemsArray = itemsArray.filter(clickedItem => clickedItem !== name);
    }

    return itemsArray;
  }

}
