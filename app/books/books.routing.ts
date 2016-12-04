import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BooksComponent } from "./books.component";

const booksRoutes: Routes = [
  { path: "books", component: BooksComponent },
];
export const booksRouting: ModuleWithProviders = RouterModule.forChild(booksRoutes);