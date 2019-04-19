import { HttpClient } from '@angular/common/http';
import { HomePage } from './../home/home';
import { BackendProvider } from './../../providers/backend/backend';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertCmp, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
  details: any = [];
  loading: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder,
    private loadingCtrl: LoadingController, private backService: BackendProvider, private alertCtrl: AlertController,
  private http: HttpClient) {
    this.createForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  createForm(){
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login(){
    this.loader()
    this.backService.loginService(this.loginForm.value).subscribe(response => {
      this.details = response;
      this.loading.dismiss();
      if(this.details.status === 1){
        if(this.details.message.length > 0){
          this.navCtrl.setRoot(HomePage)
        } else {
          this.backService.alertController('Incorrect Credentials')
        }
      }else {
        this.backService.alertController('Incorrect Credentials')
      }
    },
    error => {
      this.backService.alertController('Error Occured');
    },
    () => {
      // 'onCompleted' callback.
      // No errors, route to new page here
      // this.backService.alertController('Error Occured');
    }

  )
  }

  loader() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

}
