import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BackendProvider } from './../../providers/backend/backend';
import { Component } from '@angular/core';
import {  NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

/**
 * Generated class for the StatementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-statement',
  templateUrl: 'statement.html',
})
export class StatementPage {
  resultlist: any = [];
  statementForm: FormGroup;
  accountDetails: any;
  details: any =  [];
  loading: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private bck: BackendProvider,
  private fb: FormBuilder, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {
   this.details = this.bck.getSummary();
    this.accountDetails = this.details.message;
    this.statementForm = this.fb.group({
      accountnumber: ['', Validators.required]
    })
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad StatementPage');
  }

  viewStatement() {
    this.loader();
    this.bck.getStatement(this.statementForm.value).subscribe(response => {
      this.resultlist = response;
      this.loading.dismiss();
    })
  }

  notify(d){
      const alert = this.alertCtrl.create({
        title: 'Albrim Mobile',
        subTitle: d.sznaration,
        buttons: ['OK']
      });
      alert.present();

  }



  loader() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

}
