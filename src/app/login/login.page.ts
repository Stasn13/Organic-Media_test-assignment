import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-account',
    templateUrl: 'login.page.html',
    styleUrls: ['login.page.scss']
})
export class LoginPage {

    login: FormGroup;
    constructor(fb: FormBuilder) {
        this.login = fb.group({
            'userName' : '',
            'password' : ''
        })
    }

}