import { Component } from '@angular/core';
import what3words, { ApiVersion, Transport, What3wordsService } from '@what3words/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';

  constructor() {
    const apiKey: string = 'YOUR-API-KEY';
    const config: {
      host: string;
      apiVersion: ApiVersion;
    } = {
      host: 'https://api.what3words.com',
      apiVersion: ApiVersion.Version3,
    };
    const transport: 'axios' | 'fetch' = 'fetch';
    const w3wService: What3wordsService = what3words(apiKey, config, {
      transport,
    });
    w3wService
      .convertToCoordinates({ words: 'filled.count.soap' })
      .then((data) => console.log('data', data))
      .catch((err) => console.log('err', err));
  }
}
