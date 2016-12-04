import {NgModule} from '@angular/core'

import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import {bookRouting} from "./book.routing";
import BookComponent from "./book.component";
import {BookResolver} from "./book.resolver";


@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    bookRouting
  ],
  declarations: [
    BookComponent
  ],
  providers: [
      BookResolver
  ]

})

export class BookModule{}