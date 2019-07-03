import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminModuleModule } from './admin-module/admin-module.module';
import { TestCRUDpageComponent } from './admin-module/test-crudpage/test-crudpage.component';
import { AdminModuleRoutingModule } from './admin-module/admin-module-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TestCRUDpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModuleModule,
    AdminModuleRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
