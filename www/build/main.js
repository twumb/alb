webpackJsonp([0],{

/***/ 138:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 138;

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 183;

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_list__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServicesPage = /** @class */ (function () {
    function ServicesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [{ title: 'Saving & Investments', img: 'assets/imgs/savings.jpg', item: 1 }, { title: 'Loan Products', img: 'assets/imgs/loan.jpg', item: 2 }, { title: 'Community Development Program', img: 'assets/imgs/community.jpg', item: 3 }, { title: 'Business Advisory Services', img: 'assets/imgs/business.jpg', item: 4 },];
    }
    ServicesPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__list_list__["a" /* ListPage */], {
            item: item
        });
    };
    ServicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-services',template:/*ion-inline-start:"/Users/nadu/Downloads/work/mobile/albrim/src/pages/services/services.html"*/'<!--\n  Generated template for the ServicesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Services</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n        <ion-thumbnail item-start>\n          <img src=" {{item.img}} ">\n        </ion-thumbnail>\n        <h2> {{item.title }} </h2>\n      </ion-item>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/nadu/Downloads/work/mobile/albrim/src/pages/services/services.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], ServicesPage);
    return ServicesPage;
}());

//# sourceMappingURL=services.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        console.log(this.selectedItem);
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/nadu/Downloads/work/mobile/albrim/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{selectedItem.title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list> -->\n  <div class="container second_menu">\n      <div class="church_mission_panel church_color_deep" *ngIf="selectedItem.item === 4">\n          We bring our services closer to our clients by assisting them in general business administration and introducing them to new opportunities and contacts.\n      </div>\n\n      <div class="church_mission_panel church_color_deep" *ngIf="selectedItem.item === 3">\n          We provide small credits for petty traders in groups within La and Okaishie business areas. This empowers petty traders with the needed capital to run their businesses while cultivating the habit of saving.\n          <br> <br>\n        We also provide paid internship schemes for students on vacation and those whose courses of study require industrial attachment\n\n      </div>\n\n\n      <div class="church_mission_panel church_color_deep" *ngIf="selectedItem.item === 2">\n          <h3>  Personal Loans</h3>\n\nQuick and flexible loans for salaried workers who qualify for a maximum loan amount of GHc5, 000.00.\n<h3> Business Loans</h3>\nFinancing products structured for businesses and productive individuals with a history of business activity over a minimum period of six months with relevant documentations.\n\n      </div>\n\n      <div  class="church_mission_panel church_color_deep" *ngIf="selectedItem.item === 1">\n\n	"Tailor-made investment solutions with attractive interest rates"\n\n  <h3>Albrim Fixed Deposit</h3>\n  We offer attractive fixed deposit rates above current treasury bill rates over flexible durations.\n\n  <h3>Albrim Savings</h3>\n  Earn interest of 3% PA on a minimum account balance of GHc5.00\n\n\n  <h3>Albrim “Ghanaman” Savings:</h3>\n  Maintaining a minimum balance of GHc100.00 this account earns you 7%PA\n\n\n  <h3>Albrim “Meba Daakye” Savings</h3>\n  Enjoy an interest of 8% pa on a minimum balance of GHc100.00 and a minimum monthly deposit of GHc5.00 for your children below 18years of age.\n\n      </div>\n\n  </div>\n\n\n\n\n  <!-- <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n    {{selectedItem.item}}\n  </div> -->\n</ion-content>\n'/*ion-inline-end:"/Users/nadu/Downloads/work/mobile/albrim/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepositPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_backend_backend__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DepositPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var DepositPage = /** @class */ (function () {
    function DepositPage(navCtrl, navParams, bck, fb, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bck = bck;
        this.fb = fb;
        this.loadingCtrl = loadingCtrl;
        this.resultlist = [];
        this.details = [];
        this.todo = {};
        this.details = this.bck.getSummary();
        this.accountDetails = this.details.message;
        this.fixedForm = this.fb.group({
            accountnumber: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            d: ['']
        });
    }
    DepositPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad DepositPage');
    };
    DepositPage.prototype.viewDeposit = function () {
        var _this = this;
        this.loader();
        this.bck.getDeposit(this.fixedForm.get('accountnumber').value).subscribe(function (response) {
            var detail = response;
            _this.resultlist = detail.message;
            _this.loading.dismiss();
        });
    };
    DepositPage.prototype.loader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    DepositPage.prototype.notify = function (d) {
    };
    DepositPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-deposit',template:/*ion-inline-start:"/Users/nadu/Downloads/work/mobile/albrim/src/pages/deposit/deposit.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Fixed Deposit</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content padding>\n      <form [formGroup]="fixedForm" (ngSubmit)="viewDeposit()">\n      <!-- <form (ngSubmit)="viewDeposit()"> -->\n          <ion-list>\n          <ion-item>\n            <ion-label>Accounts</ion-label>\n            <ion-select formControlName="accountnumber">\n              <ion-option *ngFor="let d of accountDetails" [value]="d.acc">{{d.acc}}</ion-option>\n            </ion-select>\n          </ion-item>\n        <button ion-button type="submit" block [disabled]="fixedForm.invalid" >View Statement</button>\n        </ion-list>\n  </form>\n\n  <div class="container second_menu" >\n      <div class="church_mission_panel church_color_deep" *ngFor="let d of resultlist" >\n          <h3> Total Amount : GHS {{d.invest_total_amt | number}} <span *ngIf="!d.invest_total_amt">0.00</span>\n</h3>\n\n         <p> Maturity Date: {{d.maturity_date | date:\'mediumDate\'}} </p>\n\n      </div>\n  </div>\n\n  </ion-content>\n'/*ion-inline-end:"/Users/nadu/Downloads/work/mobile/albrim/src/pages/deposit/deposit.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_backend_backend__["a" /* BackendProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* LoadingController */]])
    ], DepositPage);
    return DepositPage;
}());

//# sourceMappingURL=deposit.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_backend_backend__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, fb, alertCtrl, bck) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.bck = bck;
        this.details = [];
        this.passwordForm = this.fb.group({
            oldpass: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            newpass: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.changPass = function () {
        var _this = this;
        this.details = this.bck.getSummary();
        var t = {
            oldpass: this.passwordForm.get('oldpass').value,
            newpass: this.passwordForm.get('newpass').value
        };
        this.bck.changePassword(t).subscribe(function (response) {
            var details = response;
            if (details.status === 1) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Albrim Mobile',
                    subTitle: 'Password change unsucccessful',
                    buttons: ['Ok']
                });
                alert_1.present();
            }
        });
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/nadu/Downloads/work/mobile/albrim/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Password</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <form [formGroup]="passwordForm" (ngSubmit)="changPass()">\n    <ion-list>\n        <ion-item>\n            <ion-label color="primary" stacked>Old Password</ion-label>\n            <ion-input type="password" formControlName="oldpass"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label color="primary" stacked>New Password</ion-label>\n              <ion-input type="password" formControlName="newpass"></ion-input>\n          </ion-item>\n\n    <button ion-button full type="submit" [disabled]="passwordForm.invalid">Change</button>\n</ion-list>\n</form>\n</ion-content>\n'/*ion-inline-end:"/Users/nadu/Downloads/work/mobile/albrim/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1__providers_backend_backend__["a" /* BackendProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_backend_backend__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the StatementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StatementPage = /** @class */ (function () {
    function StatementPage(navCtrl, navParams, bck, fb, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bck = bck;
        this.fb = fb;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.resultlist = [];
        this.details = [];
        this.details = this.bck.getSummary();
        this.accountDetails = this.details.message;
        this.statementForm = this.fb.group({
            accountnumber: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].required]
        });
    }
    StatementPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad StatementPage');
    };
    StatementPage.prototype.viewStatement = function () {
        var _this = this;
        this.loader();
        this.bck.getStatement(this.statementForm.value).subscribe(function (response) {
            _this.resultlist = response;
            _this.loading.dismiss();
        });
    };
    StatementPage.prototype.notify = function (d) {
        var alert = this.alertCtrl.create({
            title: 'Albrim Mobile',
            subTitle: d.sznaration,
            buttons: ['OK']
        });
        alert.present();
    };
    StatementPage.prototype.loader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    StatementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-statement',template:/*ion-inline-start:"/Users/nadu/Downloads/work/mobile/albrim/src/pages/statement/statement.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Statement</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n      <form [formGroup]="statementForm">\n    <ion-item>\n      <ion-label>Accounts</ion-label>\n      <ion-select formControlName="accountnumber">\n        <ion-option *ngFor="let d of accountDetails" >{{d.acc}}</ion-option>\n      </ion-select>\n    </ion-item>\n  <button ion-button full (click)="viewStatement()" [disabled]="statementForm.invalid">View Statement</button>\n    </form>\n  </ion-list>\n  <div class="statementTable" >\n    <table >\n        <thead>\n                <tr  style="text-align: left">\n                    <th>\n                        Date\n                    </th>\n                    <th >\n                        Credit\n                    </th>\n                    <th >\n                        Debit\n                    </th>\n                    <th >\n                        Balance\n                    </th>\n                </tr>\n        </thead>\n        <tbody>\n                    <tr *ngFor="let n of resultlist" (click)="notify(n)">\n\n                        <td>\n                            {{ n.szdate | date:\'mediumDate\'}}\n                        </td>\n                        <td>\n                            {{ n.credit | number}}\n                        </td>\n                        <td>\n                            {{ n.debit | number}}\n                        </td>\n                        <td>\n                            {{ n.Balance  | number}}\n                        </td>\n                    </tr>\n        </tbody>\n\n    </table>\n</div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/nadu/Downloads/work/mobile/albrim/src/pages/statement/statement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_backend_backend__["a" /* BackendProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
    ], StatementPage);
    return StatementPage;
}());

//# sourceMappingURL=statement.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(257);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_login_login__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_services_services__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_deposit_deposit__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_statement_statement__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_backend_backend__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_animations__ = __webpack_require__(405);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_statement_statement__["a" /* StatementPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_deposit_deposit__["a" /* DepositPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_services_services__["a" /* ServicesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_statement_statement__["a" /* StatementPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_deposit_deposit__["a" /* DepositPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_services_services__["a" /* ServicesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_backend_backend__["a" /* BackendProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_login_login__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_settings_settings__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_services_services__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_deposit_deposit__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_statement_statement__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // rootPage: any = HomePage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */], icon: 'home' },
            { title: 'Statement', component: __WEBPACK_IMPORTED_MODULE_4__pages_statement_statement__["a" /* StatementPage */], icon: 'stats' },
            { title: 'Fixed Deposit', component: __WEBPACK_IMPORTED_MODULE_3__pages_deposit_deposit__["a" /* DepositPage */], icon: 'bookmarks' },
            { title: 'Services', component: __WEBPACK_IMPORTED_MODULE_2__pages_services_services__["a" /* ServicesPage */], icon: 'keypad' },
            { title: 'Password', component: __WEBPACK_IMPORTED_MODULE_1__pages_settings_settings__["a" /* SettingsPage */], icon: 'cog' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_0__pages_login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nadu/Downloads/work/mobile/albrim/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name="{{p.icon}}" item-start></ion-icon> {{p.title}}\n      </button>\n      <button menuClose ion-item (click)="logout()"> <ion-icon name="log-out" item-start></ion-icon>Logout</button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/nadu/Downloads/work/mobile/albrim/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackendProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the BackendProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BackendProvider = /** @class */ (function () {
    function BackendProvider(http, alertCtrl) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        // url: string = 'http://etribegh.com/sikasemapp';
        this.url = ' https://albrim.herokuapp.com/api';
        // url: string = 'http://localhost:5000/api';
        this.userDetails = [];
        console.log('Hello BackendProvider Provider');
    }
    BackendProvider.prototype.loginService = function (data) {
        var _this = this;
        return this.http.post(this.url + '/' + data.username + '/login', data).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (response) {
            _this.userDetails = response;
            return response;
        }));
    };
    BackendProvider.prototype.getSummary = function () {
        return this.userDetails;
    };
    BackendProvider.prototype.getStatement = function (data) {
        var user = this.userDetails.message[0].accountnumber;
        return this.http.post(this.url + '/' + user + '/statement', data).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (response) {
            return response;
        }));
    };
    BackendProvider.prototype.getDeposit = function (data) {
        var t = {
            accountnumber: data
        };
        var user = this.userDetails.message[0].accountnumber;
        return this.http.post(this.url + '/' + user + '/fixed', t).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (response) {
            return response;
        }));
    };
    BackendProvider.prototype.getFixed = function (data) {
        var user = this.userDetails.message[0].accountnumber;
        return this.http.post(this.url + '/' + user + '/fixed', data).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (response) {
            return response;
        }));
    };
    BackendProvider.prototype.alertController = function (d) {
        var alert = this.alertCtrl.create({
            title: 'Albrim Mobile',
            subTitle: d,
            buttons: ['OK']
        });
        alert.present();
    };
    BackendProvider.prototype.changePassword = function (data) {
        var user = this.userDetails.message[0].accountnumber;
        return this.http.post(this.url + '/' + user + '/changepass/' + user, data).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (response) {
            return response;
        }));
    };
    BackendProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */]])
    ], BackendProvider);
    return BackendProvider;
}());

//# sourceMappingURL=backend.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_backend_backend__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, fb, loadingCtrl, backService, alertCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.loadingCtrl = loadingCtrl;
        this.backService = backService;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.details = [];
        this.createForm();
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.loader();
        this.backService.loginService(this.loginForm.value).subscribe(function (response) {
            _this.details = response;
            _this.loading.dismiss();
            if (_this.details.status === 1) {
                if (_this.details.message.length > 0) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
                }
                else {
                    _this.backService.alertController('Incorrect Credentials');
                }
            }
            else {
                _this.backService.alertController('Incorrect Credentials');
            }
        }, function (error) {
            _this.backService.alertController('Error Occured');
        }, function () {
            // 'onCompleted' callback.
            // No errors, route to new page here
            // this.backService.alertController('Error Occured');
        });
    };
    LoginPage.prototype.loader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/nadu/Downloads/work/mobile/albrim/src/pages/login/login.html"*/'<ion-content padding  >\n<ion-card style="margin-top:100px">\n    <!-- <div class="page-profile">\n        <div class="page-profile-header container-fullscreen">\n            <img src="assets/imgs/albrimlogo.png" alt="img">\n            <h3>Albrim Mobile</h3>\n    </div>\n</div> -->\n    <ion-card-content >\n      <ion-row >\n        <ion-col col-4></ion-col>\n        <ion-col col-4>\n          <img src="assets/imgs/albrimlogo.png" style="height: 100%;width: 100%;" />\n        </ion-col>\n        <ion-col col-4></ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-list >\n  <form [formGroup]="loginForm" >\n  <ion-item>\n    <ion-label floating>Username</ion-label>\n    <ion-input type="tel" formControlName="username"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input type="password" formControlName="password"></ion-input>\n  </ion-item>\n  <button ion-button full (click)="login()" [disabled]="loginForm.invalid">Login</button>\n</form>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/nadu/Downloads/work/mobile/albrim/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_backend_backend__["a" /* BackendProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_backend_backend__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, bck) {
        this.navCtrl = navCtrl;
        this.bck = bck;
        this.accountDetails = [];
        this.details = [];
        this.readData();
    }
    HomePage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        // if(currentIndex===3){
        //   // this.slides.stopAutoplay();
        // }
    };
    HomePage.prototype.readData = function () {
        this.details = this.bck.getSummary();
        this.accountDetails = this.details.message;
        this.clientName = this.accountDetails[0].customer_name;
        // this.accountDetails = this.bck.getSummary().message;
        // this.bck.getSummary().subscribe(response => {
        //   this.accountDetails = response;
        //   console.log(response)
        //   this.clientName = this.accountDetails[0].customer_name
        // })
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/nadu/Downloads/work/mobile/albrim/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!-- <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p> -->\n  <ion-slides autoplay="2000" loop="true" speed="2000" pager="true" (ionSlideDidChange)="slideChanged()"   style="height:100px" does-continue="true">\n    <ion-slide>\n      <!-- <h1>Slide 1</h1> -->\n      <ion-img width="100%" height="200px" src="assets/imgs/1.jpg"></ion-img>\n    </ion-slide>\n    <ion-slide>\n        <ion-img width="100%" height="200px" src="assets/imgs/2.jpg"></ion-img>\n    </ion-slide>\n    <ion-slide>\n        <ion-img width="100%" height="200px" src="assets/imgs/3.jpg"></ion-img>\n    </ion-slide>\n    <ion-slide>\n        <ion-img width="100%" height="200px" src="assets/imgs/5.jpg"></ion-img>\n    </ion-slide>\n  </ion-slides>\n\n\n  <div padding>\n    <div id="top_page">\n      <div class="container">\n              <h4>Welcome, {{ clientName }}</h4>\n\n              <p>Our mission is to provide quick & flexible financial solutions through innovation, professionalism & excellence to individuals & businesses</p>\n      <br>\n              <div class="container second_menu" >\n\n                 <div class="church_mission_panel church_color_deep" *ngFor="let d of accountDetails" >\n\n                            <h3> GHS {{d.value | number}}\n                              <!-- <span *ngIf="!d.value">0.00</span> -->\n</h3>\n\n                           <p> {{d.acc}} - {{d.product_name}}</p>\n\n                        </div>\n              </div>\n          </div>\n    </div>\n    <div id="down_page">\n\n    </div>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nadu/Downloads/work/mobile/albrim/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_backend_backend__["a" /* BackendProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[249]);
//# sourceMappingURL=main.js.map