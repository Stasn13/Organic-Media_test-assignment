import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SendCredentialsService} from '../services/send-credentials.service';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
    selector: 'app-account',
    templateUrl: 'login.page.html',
    styleUrls: ['login.page.scss']
})
export class LoginPage {

    login: FormGroup;

    constructor(
        fb: FormBuilder,
        private sendCredentialsService: SendCredentialsService,
        public alertController: AlertController,
        private router: Router
    ) {
        this.login = fb.group({
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
        });
    }

    async presentAlert() {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Alert',
            subHeader: 'Inputs should not be blank',
            message: 'Please fill all inputs',
            buttons: ['OK']
        });

        await alert.present();
    }

    loginUser() {
        if (!this.login.valid) {
            this.presentAlert();
            return false;
        }
        this.sendCredentialsService.sendCredentials(this.login.value.username, this.login.value.password).subscribe(data => {
            if (data.canLogin) {
                this.router.navigate(['/tabs']);
            }
        });
    }
}
