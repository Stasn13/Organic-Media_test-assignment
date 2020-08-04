import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';
import {MaterialModule} from '../material.module';
import {LoginPage} from './login.page';
import {LoginRoutingModule} from './login-routing.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        LoginRoutingModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    declarations: [LoginPage]
})
export class LoginModule {
}
