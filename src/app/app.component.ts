import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedItem : string = 'recipe';

  onNavigate(menuItem : string){
    this.loadedItem = menuItem;
  }

}
