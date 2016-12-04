import {Component, OnInit, AfterViewInit} from "@angular/core";

import {ActivatedRoute} from '@angular/router'
import Book from "./book";

import dialogs = require("ui/dialogs");
import utilityModule = require("utils/utils");

@Component({
  selector: "app-book",
  templateUrl: "book/book.component.html",
  styleUrls: ["book/book.component.css"]
})


export default class BookComponent implements OnInit, AfterViewInit{


  book:Book


  constructor(
    private route:ActivatedRoute,

  ){}

  showInfo(){

  }

  getBook(){

    dialogs.action({
      message: "Chose format",
      cancelButtonText: "Cancel",
      actions: this.book.availableLinks()
    }).then(result => {
      console.log("Dialog result: " + result)

      switch (result){
        case "Epub":
          console.log("get epub link");
          utilityModule.openUrl(this.book.epubLink);
          break;
        case "PDF":
          console.log("get PDF link");
          utilityModule.openUrl(this.book.pdfLink);
          break;
        case "Audio":
          console.log("get Audio link");
          utilityModule.openUrl(this.book.audioLink);
          break;

      }

    });

  }

  shareBook(){

  }

  ngOnInit(){

    this.book = this.route.snapshot.data['book'];
    this.book.fetchCoverImage();
    console.dump(this.book)

    // this.route.params.subscribe(params => {
    //
    //   this.booksService.getBook(params['id'])
    //       .then((book:Book) => this.book = book)
    //\
    // });

  }

  ngAfterViewInit(){}




}



