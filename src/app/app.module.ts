import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs'
import { AppComponent } from './app.component';
import { DealsComponent } from './deals/deals.component';
import { AccountComponent } from './account/account.component';
import { ProfitComponent } from './profit/profit.component';
import { MdDatepickerModule, MdNativeDateModule } from '@angular/material';
import { DragDropDirectiveModule} from "angular4-drag-drop";

declare var jquery:any;
declare var $ :any;

const routes: Routes = [
  { path: '', redirectTo: 'deals', pathMatch: 'full' },
  { path: '', component: DealsComponent },
  { path: 'account', component: AccountComponent },
  { path: 'profit', component: ProfitComponent },
  { path: '**', component: DealsComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    DealsComponent,
    AccountComponent,
    ProfitComponent
  ],
  imports: [
    MdDatepickerModule, 
    MdNativeDateModule,
    DragDropDirectiveModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
.catch((err: any) => console.log(err));