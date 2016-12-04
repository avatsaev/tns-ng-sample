import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import BookComponent from './book.component'
import {BookResolver} from "./book.resolver";

const bookRoutes:Routes = [
  {
    path: "book/:id",
    component: BookComponent,
    resolve: { book: BookResolver }
  }
];


export const bookRouting: ModuleWithProviders = RouterModule.forChild(bookRoutes);