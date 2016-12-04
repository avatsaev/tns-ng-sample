import { getFile, getImage, getJSON, getString, request } from "http";
import { Injectable } from "@angular/core";
import Book from "../book/book";

@Injectable()

export default class BooksService{

  private endpointUrl:string = "http://ub.vatsaev.com:8080/";

  bookList:Book[]

  constructor(){
    this.bookList = new Array<Book>()

    this.fetchAllBooks().then((books) =>{
       books.map( book => book.fetchThumbCoverImage())
    })

  }


  fetchAllBooks():Promise<Book[]>{

    return new Promise((resolve) => {

      getJSON(`${this.endpointUrl}/books.json`).then(((res:any)=>{

        console.log("fetching books from server...")
        for(let bookJSON of res.books){

          this.bookList.push(new Book({

            objectID     :bookJSON.objectId,
            title        :bookJSON.title,
            details      :bookJSON.details,
            thumbCover   :bookJSON.thumb_cover,
            cover        :bookJSON.cover,
            epubLink     :bookJSON.epub_link,
            audioLink    :bookJSON.audio_link,
            pdfLink      :bookJSON.pdf_link,
            mobiLink     :bookJSON.mobi_link,
            quickDetails :bookJSON.quick_details,
            storeLink    :bookJSON.store_link,
            category     :bookJSON.category,
            spotted      :bookJSON.spotted,
            keywords     :bookJSON.keywords,
            contentIndex :bookJSON.content_index,

          }));



          //this.bookList[book_i].fetchThumbCoverImage()


        }

        resolve(this.bookList)

      }))

    });

  }

  getAllBooks():Promise<Book[]>{

    if(this.bookList.length == 0){
      console.log("Get all books: fetch")
      return this.fetchAllBooks()

    }else{
      console.log("Get all books: return")
      return new Promise((resolve)=>{
        resolve(this.bookList)
      })

    }

  }

  getBook(id:string):Promise<Book>{
    return new Promise((resolve) => {
      resolve(this.bookList.filter((b:Book) => b.objectID == id)[0]);
    })
  }

}