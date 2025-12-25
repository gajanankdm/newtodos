import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodosComponent } from './shared/component/todo4/todos.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Todo1Component } from './shared/component/todo1/todo1.component';
import { Todo2Component } from './shared/component/todo2/todo2.component';
import { Todo3Component } from './shared/component/todo3/todo3.component';
import { Todo5Component } from './shared/component/todo5/todo5.component';
import { Todo6Component } from './shared/component/todo6/todo6.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    Todo1Component,
    Todo2Component,
    Todo3Component,
    Todo5Component,
    Todo6Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
