import {Component, OnInit, ChangeDetectionStrategy} from "@angular/core";
import Book from "../book/book";
import BooksService from "./books.service";

@Component({
  selector: "app-books",
  templateUrl: "books/books.component.html",
  styleUrls: ["books/books.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BooksComponent implements OnInit {

  books:Book[];


  constructor(
      private booksService:BooksService
  ){}


  ngOnInit(){

    this.books = new Array<Book>()

    this.booksService.getAllBooks()
        .then((books) => books.map( book => this.books.push(book)))

  }
}