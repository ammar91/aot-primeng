import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { DialogModule } from 'primeng/primeng';

@NgModule({
    imports: [BrowserModule, DialogModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
