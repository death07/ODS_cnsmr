import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  menu: any[] = [];
  selectedItem = 0;

  constructor() {
    this.initializeMenu()
  }

  ngOnInit(): void {
  }


  initializeMenu() {
    this.menu = [
      {
        title: "Profile",
        icon: "ods:profile",
        id: 0
      },
      {
        title: "Address",
        icon: "ods:address",
        id: 1
      },
      {
        title: "Additional Information",
        icon: "ods:address-info",
        id: 2
      },
      {
        title: "Change Password",
        icon: "ods:unlock",
        id: 3
      },
      {
        title: "Change Pincode",
        icon: "ods:keypad",
        id: 4
      }
    ]
  }


  setActiveMenu(_id: number) {
    console.log(_id)
    this.selectedItem = _id
  }
}
