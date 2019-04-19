import { BackendProvider } from './../../providers/backend/backend';
import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  accountDetails: any = [];
  details: any = [];
  clientName: string;
  constructor(public navCtrl: NavController, private bck: BackendProvider) {
    this.readData();
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    // if(currentIndex===3){
    //   // this.slides.stopAutoplay();
    // }
  }

  readData() {
    this.details = this.bck.getSummary();
    this.accountDetails = this.details.message;
    this.clientName = this.accountDetails[0].customer_name
    // this.accountDetails = this.bck.getSummary().message;
    // this.bck.getSummary().subscribe(response => {
    //   this.accountDetails = response;
    //   console.log(response)
    //   this.clientName = this.accountDetails[0].customer_name
    // })
  }



}
