import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }   from './app.component';
import { KegAddComponent } from './keg-add.component';
import { KegEditComponent } from './keg-edit.component';
import { KegInfoComponent } from './keg-info.component';
import { KegListComponent } from './keg-list.component';
import { KegTapsComponent } from './keg-taps.component';
import { DisplayOptionPipe } from './display-option.pipe';
import { DisplayTapPipe } from './display-tap.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    KegAddComponent,
    KegEditComponent,
    KegInfoComponent,
    KegListComponent,
    KegTapsComponent,
    DisplayOptionPipe,
    DisplayTapPipe
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
