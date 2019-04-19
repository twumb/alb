import { ListPage } from './../list/list';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {

  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  // }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ServicesPage');
  // }
  selectedItem: any;
  icons: string[];
  // items: Array<{title: string, note: string, icon: string}>;
  items: Array<{title: string, img: string, item: number}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [{title:'Saving & Investments', img:'assets/imgs/savings.jpg', item:1}, {title:'Loan Products', img:'assets/imgs/loan.jpg', item:2}, {title:'Community Development Program', img:'assets/imgs/community.jpg', item:3}, {title:'Business Advisory Services', img:'assets/imgs/business.jpg', item:4},];

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }

}
