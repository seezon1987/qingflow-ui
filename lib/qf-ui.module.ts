import { NgModule } from '@angular/core';

import { QfMemberSelectModule } from './components/member-select/qf-member-select.module';


@NgModule({
  exports: [
    QfMemberSelectModule
  ]
})
export class QfUiModule { }
