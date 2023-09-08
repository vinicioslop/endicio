import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-api-response',
  templateUrl: './api-response.component.html',
  styleUrls: ['./api-response.component.css']
})
export class ApiResponseComponent {
  @Input() wordResponseData: any;
  @Input() phonetic: any;
  @Input() audioSrc: any;
}
