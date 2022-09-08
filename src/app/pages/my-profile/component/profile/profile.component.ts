import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  isEdit: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  edit() {
    this.isEdit = !this.isEdit
  }
}
