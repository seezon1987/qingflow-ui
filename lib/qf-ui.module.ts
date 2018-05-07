import { NgModule } from '@angular/core';

import { HeaderModule } from './components/header/header.module';

@NgModule({
  exports: [
    HeaderModule
  ]
})
export class NameModule { }
