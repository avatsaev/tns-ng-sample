import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import BooksService from "../books/books.service";

@Component({
  selector: "app-home",
  templateUrl: "home/home.component.html",
  styles: [`
    @keyframes appearInAnimaton {
      from {
        opacity: 0.0;
        transform: translate(0, -60);
      }
      to {
        opacity: 1.0;
        transform: translate(0, 0);
      }
    }
    .appear-in {
      opacity: 0;
      animation-name: appearInAnimaton;
      animation-duration: 600ms;
      animation-delay: 160ms;
      animation-timing-function: ease-in-out;
    }
    
    .appear-in-1 {
      opacity: 0;
      animation-name: appearInAnimaton;
      animation-duration: 300ms;
      animation-delay: 200ms;
      animation-timing-function: ease-in-out;
    }
    
    .appear-in-2 {
      opacity: 0;
      animation-name: appearInAnimaton;
      animation-duration: 300ms;
      animation-delay: 400ms;
      animation-timing-function: ease-in-out;
    }
    
    .appear-in-3 {
      opacity: 0;
      animation-name: appearInAnimaton;
      animation-duration: 300ms;
      animation-delay: 600ms;
      animation-timing-function: ease-in-out;
    }
  `],
  styleUrls: ["home/home.component.css"],
})

export class HomeComponent implements OnInit {

  constructor(
    private router:Router,
    private _:BooksService
  ){}

  showBooks(){
    this.router.navigate(["books"])
  }


  ngOnInit(){

  }
}