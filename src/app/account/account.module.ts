import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AccountPage} from './account.page';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';
import {AccountRoutingModule} from './account-routing.module';
import {MaterialModule} from '../material.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        AccountRoutingModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    declarations: [AccountPage]
})
export class AccountPageModule {
}
