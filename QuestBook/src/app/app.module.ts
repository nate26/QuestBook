import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { QuestListComponent } from './quest-list/quest-list.component';

import { AccordionModule } from 'primeng/accordion';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@NgModule({
  declarations: [
    AppComponent,
    QuestListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule,
    ScrollPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
