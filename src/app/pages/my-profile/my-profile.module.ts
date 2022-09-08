import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { myprofileRoutes } from './my-profile-routing';
import { ProfileComponent } from './component/profile/profile.component';
import { AddressComponent } from './component/address/address.component';
import { AdditionalInfoComponent } from './component/additional-info/additional-info.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { ChangePincodeComponent } from './component/change-pincode/change-pincode.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    MyProfileComponent,
    ProfileComponent,
    AddressComponent,
    AdditionalInfoComponent,
    ChangePasswordComponent,
    ChangePincodeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(myprofileRoutes),
    MatIconModule
  ]
})
export class MyProfileModule { }
