import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PosteFormComponent } from './posteo/poste-form/poste-form.component';
import { PosteListComponent } from './posteo/poste-list/poste-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PosteFormComponent,
    PosteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
