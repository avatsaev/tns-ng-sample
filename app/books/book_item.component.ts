import { Component, OnInit, Input } from "@angular/core";
import Book from "../book/book";
import {Router} from "@angular/router";


@Component({
  selector: "book-item",
  styles: [`
    
    @keyframes appearInLeftAnimaton {
      from {
        opacity: 0.0;
        transform: translate(220, 0);
      }
      to {
        opacity: 1.0;
        transform: translate(0, 0);
      }
    }
    .appear-in {
      opacity: 0;
      animation-name: appearInLeftAnimaton;
      animation-duration: 480ms;
      animation-delay: 220ms;
      animation-timing-function: ease-out;
    }

  `],
  template: `

    <StackLayout (tap)="showBook(book)" 
      orientation="horizontal" 
      class=" appear-in list-group-item" 
    >
      <Image [src]="book.thumbCoverImage" 
        stretch ="aspectFit" 
        height="60" 
        width="60"
       ></Image>
      
      <StackLayout>
        
        <Label 
          marginLeft="10" 
          [text]="book.title" 
          textWrap="true" 
          class="label-item"
        ></Label>
        
        <Label 
          marginLeft="10" 
          marginTop="5" 
          color="#696969"  
          fontSize="12" 
          [text]="book.details"  
          class="label-item"
         ></Label>
         
      </StackLayout>
      
    </StackLayout>

  `
})

export class BookItemComponent implements OnInit {
  @Input() book:Book;

  constructor(private router:Router){}

  showBook(book:Book){
    this.router.navigate(["book",book.objectID])
  }

  ngOnInit(){}
}