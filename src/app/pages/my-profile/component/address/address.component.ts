import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'address-details',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  isEdit: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  edit() {
    this.isEdit = !this.isEdit
  }

}
