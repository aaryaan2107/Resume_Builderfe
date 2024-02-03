import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormInfo1Component } from './form-info1/form-info1.component';
import { FormInfo2Component } from './form-info2/form-info2.component';
import { FormInfo3Component } from './form-info3/form-info3.component';
import { FormInfo4Component } from './form-info4/form-info4.component';
import { FormInfo5Component } from './form-info5/form-info5.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    NavbarComponent,
    HomeComponent,
    ContactFormComponent,
    AboutComponent,
    FormInfo1Component,
    FormInfo2Component,
    FormInfo3Component,
    FormInfo4Component,
    FormInfo5Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
