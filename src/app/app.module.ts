import { NgModule } from "@angular/core";
import { AppComponent } from "./app";
import { HeaderComponent } from "./header/header";
import { User } from "./user/user";
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
    declarations: [AppComponent, HeaderComponent, User],
    bootstrap: [AppComponent],
    imports: [BrowserModule, SharedModule, TasksModule]
})
export class AppModule {

}