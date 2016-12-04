import { NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";

import { AppRoutes } from './app.routing';
import { HomeModule } from "./home/home.module";
import {BooksModule} from "./books/books.module";
import {BookModule} from "./book/book.module";


@NgModule({
    providers: [

    ],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(AppRoutes),
        HomeModule,
        BooksModule,
        BookModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
