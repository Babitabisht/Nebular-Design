import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NbSidebarModule,NbSidebarService, NbThemeModule, NbLayoutModule ,NbCardModule ,NbStepperModule,NbAccordionModule, NbButtonModule,NbInputModule, } from '@nebular/theme';
import { MyPageComponent } from './my-page/my-page.component';
import { MyStepperComponent } from './my-stepper/my-stepper.component';
import { MyAccordianComponent } from './my-accordian/my-accordian.component';
import { FormsModule }   from '@angular/forms';
import { MyBootstrapComponentComponent } from './my-bootstrap-component/my-bootstrap-component.component';


@NgModule({
  declarations: [
    AppComponent,
    MyPageComponent,
    MyStepperComponent,
    MyAccordianComponent,
    MyBootstrapComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot(),
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbCardModule,
    NbSidebarModule,
    NbStepperModule,
    NbAccordionModule,
    NbButtonModule,
    NbInputModule,
    FormsModule
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
