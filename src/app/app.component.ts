import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ppa-layout';
  isCollapse: boolean = false;
  constructor(
    private _sharedService: SharedService
  ) { }
  ngOnInit(): void {
    this._sharedService.collapse$.subscribe((value) => {
      this.isCollapse = value
    })
  }

}
