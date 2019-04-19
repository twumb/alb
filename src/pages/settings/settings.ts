import { LoginPage } from './../login/login';
import { BackendProvider } from './../../providers/backend/backend';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  passwordForm: FormGroup;
  details: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder,
  private alertCtrl: AlertController, private bck: BackendProvider) {
    this.passwordForm = this.fb.group({
      oldpass: ['', Validators.required],
      newpass: ['', Validators.required]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  changPass() {
    this.details = this.bck.getSummary();
      const t = {
        oldpass: this.passwordForm.get('oldpass').value,
        newpass: this.passwordForm.get('newpass').value
      }
      this.bck.changePassword(t).subscribe(response => {
          const details: any = response;
          if(details.status === 1){
            this.navCtrl.setRoot(LoginPage)
          }else {
            let alert = this.alertCtrl.create({
              title: 'Albrim Mobile',
              subTitle: 'Password change unsucccessful',
              buttons: ['Ok']
            });
            alert.present();
          }
      })
  }

}

