import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.scss']
})
export class AdditionalInfoComponent implements OnInit {
  isEdit: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  edit() {
    this.isEdit = !this.isEdit
  }

}
