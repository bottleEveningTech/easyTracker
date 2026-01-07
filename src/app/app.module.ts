import { NgModule } from "@angular/core";
import { AppComponent } from "./app";
import { HeaderComponent } from "./header/header";
import { User } from "./user/user";
import { Task } from "./tasks/task/task";
import { Tasks } from "./tasks/tasks";
import { BrowserModule } from '@angular/platform-browser';
import { NewTask } from "./tasks/new-task/new-task";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared/shared.module";

@NgModule({
    declarations: [AppComponent, HeaderComponent, User, Tasks, Task, NewTask],
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule, SharedModule]
})
export class AppModule {

}