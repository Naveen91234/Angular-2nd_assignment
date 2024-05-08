import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: any[] = [
    { id: 1, name: 'Item 1', category: 'A' },
    { id: 2, name: 'Item 2', category: 'B' },
    { id: 3, name: 'Item 3', category: 'A' },
    { id: 4, name: 'Item 4', category: 'B' }
  ];

  selectedItem: any = null;
}
