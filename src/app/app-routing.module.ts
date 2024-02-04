import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AboutComponent } from './about/about.component';
import { FormInfo1Component } from './form-info1/form-info1.component';
import { FormInfo2Component } from './form-info2/form-info2.component';
import { FormInfo3Component } from './form-info3/form-info3.component';
import { FormInfo4Component } from './form-info4/form-info4.component';
import { FormInfo5Component } from './form-info5/form-info5.component';
import { ITComponent } from './it/it.component';

const routes: Routes = [
  {path: '', component:HomeComponent },
  {path: 'signup', component:SignUpComponent},
  {path:'contact-form', component:ContactFormComponent},
  {path:'about', component:AboutComponent},
  {path:'form-info1', component:FormInfo1Component},
  {path:'form-info2/:id', component:FormInfo2Component},
  {path:'form-info3/:id', component:FormInfo3Component},
  {path:'form-info4/:id', component:FormInfo4Component},
  {path:'form-info5/:id', component:FormInfo5Component},
  {path:'it/:id', component:ITComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
