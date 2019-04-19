import { BackendProvider } from './../../providers/backend/backend';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the DepositPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-deposit',
  templateUrl: 'deposit.html'
})
export class DepositPage {
  public fixedForm: FormGroup;
  resultlist: any = [];

  accountDetails: any;
  details: any =  [];
  loading: any;
  todo =  {}
  constructor(public navCtrl: NavController, public navParams: NavParams, private bck: BackendProvider,
    private fb: FormBuilder, private loadingCtrl: LoadingController) {
      this.details = this.bck.getSummary();

      this.accountDetails = this.details.message;
      this.fixedForm = this.fb.group({
        accountnumber: ['', Validators.required],
        d: ['']
      })
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad DepositPage');
  }


  viewDeposit() {
    this.loader();
    this.bck.getDeposit(this.fixedForm.get('accountnumber').value).subscribe(response => {
       const detail: any = response;
        this.resultlist = detail.message;
        this.loading.dismiss();
    })
  }

  loader() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

  notify(d){

  }


}
