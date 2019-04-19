import { AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

/*
  Generated class for the BackendProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BackendProvider {
  // url: string = 'http://etribegh.com/sikasemapp';
  url: string = ' https://albrim.herokuapp.com/api';
  // url: string = 'http://localhost:5000/api';
  userDetails: any = [];
  constructor(public http: HttpClient, private alertCtrl: AlertController) {
    console.log('Hello BackendProvider Provider');
  }

  loginService(data) {
    return this.http.post(this.url + '/'+ data.username + '/login', data).pipe(
      map(response => {
            this.userDetails = response;
            return response;
          })
    )
  }

  getSummary(){
    return this.userDetails;
  }

  getStatement(data){
    const user = this.userDetails.message[0].accountnumber;
    return this.http.post(this.url + '/' + user + '/statement', data).pipe(
      map(response => {
            return response;
          })
    )
  }

  getDeposit (data) {
    const t = {
      accountnumber: data
    }
    const user = this.userDetails.message[0].accountnumber;

    return this.http.post(this.url + '/' + user + '/fixed', t ).pipe(
      map(response => {
            return response;
          })
    )
  }

  getFixed(data){
    const user = this.userDetails.message[0].accountnumber;
    return this.http.post(this.url + '/' + user + '/fixed', data).pipe(
      map(response => {
            return response;
          })
    )
  }

  alertController(d) {
    let alert = this.alertCtrl.create({
      title: 'Albrim Mobile',
      subTitle: d,
      buttons: ['OK']
    });
    alert.present();
  }

  changePassword(data){
    const user = this.userDetails.message[0].accountnumber;
    return this.http.post(this.url + '/' + user + '/changepass/'+ user, data).pipe(
      map(response => {
            return response;
          })
    )
  }
}
