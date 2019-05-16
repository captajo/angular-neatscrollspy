import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {
  highlightType: string = 'bold';

  constructor() { }

  ngOnInit() {
  }

  toggleHighlightType() {
    if(this.highlightType == 'bold') {
      this.highlightType = 'background-color';
    } else {
      this.highlightType = 'bold';
    }
  }
}
