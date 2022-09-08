import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from './icon/icon.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IconModule
  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule?: CoreModule
  ) {
    // Do not allow multiple injections
    if (parentModule) {

      throw new Error('CoreModule has already been loaded. Import this module in the AppModule only.');
    }
  }
}
