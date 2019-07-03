import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { TestCRUDpageComponent } from './test-crudpage/test-crudpage.component';
import { DeleteTestComponent } from './delete-test/delete-test.component';
import { ViewTestComponent } from './view-test/view-test.component';
import { TestDetailsComponent } from './test-details/test-details.component';

@NgModule({
  declarations: [TestCRUDpageComponent, DeleteTestComponent, ViewTestComponent, TestDetailsComponent],
  imports: [
    CommonModule,
    AdminModuleRoutingModule
  ]
})
export class AdminModuleModule { }
