import { Component } from '@angular/core';
import { ComscoreService } from './services/comscore/comscore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'mediapulse';

  constructor(
    private comscore: ComscoreService,
  ) {
  }

}
