import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";

import { homeRouting } from "./home.routing";
import { HomeComponent } from "./home.component";
import BooksService from "../books/books.service";


@NgModule({
  providers: [
    BooksService
  ],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    homeRouting
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
