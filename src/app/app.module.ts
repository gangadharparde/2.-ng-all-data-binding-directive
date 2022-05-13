import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"; 
import { AllCompComponent } from './all-comp.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AllCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
