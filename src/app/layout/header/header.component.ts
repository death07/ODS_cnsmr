import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/shared/shared.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isCollapse: boolean = false;

  constructor(
    private _sharedService: SharedService
  ) { }

  ngOnInit(): void {
  }

  toggle() {
    this.isCollapse = !this.isCollapse
    this._sharedService.collapse(this.isCollapse)
  }
}
