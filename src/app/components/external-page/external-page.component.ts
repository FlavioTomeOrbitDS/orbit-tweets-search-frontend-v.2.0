import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-external-page',
  templateUrl: './external-page.component.html',
  styleUrls: ['./external-page.component.scss'],
})
export class ExternalPageComponent implements OnInit {
  constructor() {}

  externalUrl = 'https://orbit-expo-comments.web.app/';

  ngOnInit(): void {}
}
