import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodosService } from './todos.service';
import { TodosComponent } from './todos/todos.component';
import { TodosInputComponent } from './todos-input/todos-input.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodosInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    TodosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
