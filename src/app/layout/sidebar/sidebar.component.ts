import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router
} from '@angular/router';
import { Subject } from 'rxjs';
import { filter, startWith } from 'rxjs/operators'
import { SharedService } from 'src/shared/shared.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  isCollapse: boolean = false;
  menu: any[] = [];
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  constructor(
    private _sharedService: SharedService,
    private _router: Router,
    private _routerActive: ActivatedRoute,
  ) {

    this._router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {
        if (this._router.url.toString()) {
          this.getCurrentUrl(this._router.url.toString())
        }
      }
    });

    this.initializeMenu()
    this.routerNavigation(this.menu[1].link)
  }

  getCurrentUrl(url: string) {
    let latesturl = this.menu.find((data) => data.link == url);
    if (latesturl) {
      this.routerNavigation(latesturl.link)
    }
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(0);
    this._unsubscribeAll.complete();
  }

  routerNavigation(_value: string) {
    this.menu.forEach(element => {
      if (_value) {
        if (element.link === _value) {
          element.isActive = true
        } else {
          element.isActive = false
        }
      } else {
        this.menu[1].isActive = true
      }
    });
  }

  ngOnInit(): void {
    this._sharedService.collapse$.subscribe((value) => {
      this.isCollapse = value

    })
  }


  initializeMenu() {
    this.menu = [
      {
        title: 'My Profile',
        icon: 'ods_outline:person',
        link: '/ods/myprofile',
        isActive: false
      },
      {
        title: 'My Order',
        icon: 'ods_outline:order',
        link: '/ods/home',
        isActive: false
      },
      {
        title: 'Favorite',
        icon: 'ods_outline:heart',
        link: '/ods/favorite',
        isActive: false
      },
      {
        title: 'Set Family & Contacts',
        icon: 'ods_outline:group',
        link: '/ods/family-contacts',
        isActive: false
      },
      {
        title: 'Referral',
        icon: 'ods_outline:users',
        link: '/ods/referral',
        isActive: false
      },
      {
        title: 'Promo & Updates',
        icon: 'ods_outline:bell',
        link: 'profile',
        isActive: false
      },
      {
        title: 'Rates',
        icon: 'ods_outline:star',
        link: 'profile',
        isActive: false
      },
      {
        title: 'Contact Us',
        icon: 'ods_outline:contacts',
        link: 'profile',
        isActive: false
      },
      {
        title: 'Settings',
        icon: 'ods_outline:settings',
        link: 'profile',
        isActive: false
      },
      {
        title: 'FAQ',
        icon: 'ods_outline:document',
        link: 'profile',
        isActive: false
      }

    ]
  }
}
