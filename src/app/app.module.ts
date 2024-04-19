import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    DragDropModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: TaskComponent },
      { path: 'shopify', component: Task2Component },
      { path: 'dragdrop', component: Task3Component },
    ]),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
