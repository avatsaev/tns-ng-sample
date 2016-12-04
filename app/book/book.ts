
import {getImage} from "http";
import {ImageSource} from "image-source";

export default class Book {
  title:string;
  details:string;
  objectID:string;
  thumbCover:any;
  cover:any;
  thumbCoverImage:ImageSource|string;
  coverImage:ImageSource|string;

  epubLink:string;
  audioLink:string;
  pdfLink:string;
  mobiLink:string;
  quickDetails:string;
  storeLink:string;
  category:string;
  spotted:boolean;

  keywords:string;
  contentIndex:string;


  constructor({
    objectID,
    title,
    details,
    thumbCover,
    cover,
    epubLink    ,
    audioLink   ,
    pdfLink    ,
    mobiLink    ,
    quickDetails,
    storeLink   ,
    category    ,
    spotted      ,
    keywords ,
    contentIndex ,
  }:{
    objectID      :string,
    title         :string,
    details       :string,
    thumbCover?   :any,
    cover?        :any
    epubLink?     :string;
    audioLink?    :string;
    pdfLink?      :string;
    mobiLink?     :string;
    quickDetails? :string;
    storeLink?    :string;
    category?     :string;
    spotted?      :boolean;
    keywords?     :string;
    contentIndex? :string;
  }){


    this.title = title;
    this.details = details;
    this.quickDetails = quickDetails;
    this.objectID = objectID;


    this.thumbCover = thumbCover;
    this.cover = cover;

    this.epubLink = epubLink;
    this.audioLink = audioLink;
    this.pdfLink = pdfLink;
    this.mobiLink = mobiLink;
    this.storeLink = storeLink;

    this.category = category;
    this.spotted = spotted;
    this.keywords = keywords;
    this.contentIndex = contentIndex;

    this.thumbCoverImage = "res://CoverThumbPlaceHolder";
    this.coverImage = "res://CoverThumbPlaceHolder"

  }


  availableLinks():string[]{
    let linksTypes = []
    if(this.epubLink) linksTypes.push("Epub");
    if(this.pdfLink) linksTypes.push("PDF");
    if(this.audioLink) linksTypes.push("Audio");
    if(this.mobiLink) linksTypes.push("Mobi");
    if(this.storeLink) linksTypes.push("Store");
    return linksTypes;
  }

  fetchThumbCoverImage():Promise<ImageSource>{

    if(!this.thumbCoverImage || this.thumbCoverImage=="res://CoverThumbPlaceHolder"){
      console.log("Fetching thumb from server...");
      return getImage(this.thumbCover.url)
          .then((res) => this.thumbCoverImage = res);
    }else{
      return new Promise( resolve => resolve(this.thumbCoverImage));
    }

  }

  fetchCoverImage():Promise<ImageSource>{
    if(!this.coverImage || this.coverImage=="res://CoverThumbPlaceHolder"){
      console.log("Fetching cover from server...");
      return getImage(this.cover.url)
          .then((res) => this.coverImage = res);
    }else{
      return new Promise( resolve => resolve(this.coverImage));
    }
  }

}