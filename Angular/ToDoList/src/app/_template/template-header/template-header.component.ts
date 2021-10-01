import { Component, OnInit } from '@angular/core';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-template-header',
  templateUrl: './template-header.component.html',
  styleUrls: ['./template-header.component.sass']
})
export class TemplateHeaderComponent implements OnInit {
  faClipboardCheck = faClipboardCheck;
  constructor() { }

  ngOnInit(): void {
  }

}
