import { Component, OnInit } from '@angular/core';
import { get } from 'scriptjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'blog';

  ngOnInit(): void {
    get('/assets/js/scripts.js', () => {
      //Google Maps library has been loaded...
    });
  }
}
