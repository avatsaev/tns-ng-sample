import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";

import { booksRouting } from "./books.routing";
import { BooksComponent } from "./books.component";
import BooksService from "./books.service";
import {BookItemComponent} from "./book_item.component";

@NgModule({
  providers: [
    BooksService
  ],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    booksRouting
  ],
  declarations: [
    BooksComponent,
    BookItemComponent
  ]
})
export class BooksModule { }
