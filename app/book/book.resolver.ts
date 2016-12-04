import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import BooksService from "../books/books.service";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core"
import Book from "./book";


@Injectable()
export class BookResolver implements Resolve<Book> {

  constructor(
      private bookService:BooksService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book> {
    const id:string = route.params['id'];
    return Observable.fromPromise(this.bookService.getBook(id));
  }

}