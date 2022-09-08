import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  galleries: any[] = []
  constructor() { }

  ngOnInit(): void {
    this.galleries = [
      {
        image: 'assets/images/1.png',
        isHeart: false,
        title: 'Lorem ipsum dolor sit',
        description: 'Lorem ipsum dolor',
        price: 'PHP 1500.00',
        lastPrice: 'PHP 1500.00'
      },
      {
        image: 'assets/images/1.png',
        isHeart: false,
        title: 'Lorem ipsum dolor sit',
        description: 'Lorem ipsum dolor',
        price: 'PHP 1500.00',
        lastPrice: 'PHP 1500.00'
      },
      {
        image: 'assets/images/1.png',
        isHeart: true,
        title: 'Lorem ipsum dolor sit',
        description: 'Lorem ipsum dolor',
        price: 'PHP 1500.00',
        lastPrice: 'PHP 1500.00'
      },
      {
        image: 'assets/images/1.png',
        isHeart: false,
        title: 'Lorem ipsum dolor sit',
        description: 'Lorem ipsum dolor',
        price: 'PHP 1500.00',
        lastPrice: 'PHP 1500.00'
      },
      {
        image: 'assets/images/1.png',
        isHeart: false,
        title: 'Lorem ipsum dolor sit',
        description: 'Lorem ipsum dolor',
        price: 'PHP 1500.00',
        lastPrice: 'PHP 1500.00'
      },
      {
        image: 'assets/images/1.png',
        isHeart: false,
        title: 'Lorem ipsum dolor sit',
        description: 'Lorem ipsum dolor',
        price: 'PHP 1500.00',
        lastPrice: 'PHP 1500.00'
      }, {
        image: 'assets/images/1.png',
        isHeart: false,
        title: 'Lorem ipsum dolor sit',
        description: 'Lorem ipsum dolor',
        price: 'PHP 1500.00',
        lastPrice: 'PHP 1500.00'
      }, {
        image: 'assets/images/1.png',
        isHeart: true,
        title: 'Lorem ipsum dolor sit',
        description: 'Lorem ipsum dolor',
        price: 'PHP 1500.00',
        lastPrice: 'PHP 1500.00'
      }, {
        image: 'assets/images/1.png',
        isHeart: false,
        title: 'Lorem ipsum dolor sit',
        description: 'Lorem ipsum dolor',
        price: 'PHP 1500.00',
        lastPrice: 'PHP 1500.00'
      },
      {
        image: 'assets/images/1.png',
        isHeart: false,
        title: 'Lorem ipsum dolor sit',
        description: 'Lorem ipsum dolor',
        price: 'PHP 1500.00',
        lastPrice: 'PHP 1500.00'
      },
      {
        image: 'assets/images/1.png',
        isHeart: false,
        title: 'Lorem ipsum dolor sit',
        description: 'Lorem ipsum dolor',
        price: 'PHP 1500.00',
        lastPrice: 'PHP 1500.00'
      },
      {
        image: 'assets/images/1.png',
        isHeart: true,
        title: 'Lorem ipsum dolor sit',
        description: 'Lorem ipsum dolor',
        price: 'PHP 1500.00',
        lastPrice: 'PHP 1500.00'
      },
      {
        image: 'assets/images/1.png',
        isHeart: false,
        title: 'Lorem ipsum dolor sit',
        description: 'Lorem ipsum dolor',
        price: 'PHP 1500.00',
        lastPrice: 'PHP 1500.00'
      },
      {
        image: 'assets/images/1.png',
        isHeart: false,
        title: 'Lorem ipsum dolor sit',
        description: 'Lorem ipsum dolor',
        price: 'PHP 1500.00',
        lastPrice: 'PHP 1500.00'
      },
      {
        image: 'assets/images/1.png',
        isHeart: false,
        title: 'Lorem ipsum dolor sit',
        description: 'Lorem ipsum dolor',
        price: 'PHP 1500.00',
        lastPrice: 'PHP 1500.00'
      }, {
        image: 'assets/images/1.png',
        isHeart: false,
        title: 'Lorem ipsum dolor sit',
        description: 'Lorem ipsum dolor',
        price: 'PHP 1500.00',
        lastPrice: 'PHP 1500.00'
      }, {
        image: 'assets/images/1.png',
        isHeart: true,
        title: 'Lorem ipsum dolor sit',
        description: 'Lorem ipsum dolor',
        price: 'PHP 1500.00',
        lastPrice: 'PHP 1500.00'
      }, {
        image: 'assets/images/1.png',
        isHeart: false,
        title: 'Lorem ipsum dolor sit',
        description: 'Lorem ipsum dolor',
        price: 'PHP 1500.00',
        lastPrice: 'PHP 1500.00'
      }


    ]
  }

}
