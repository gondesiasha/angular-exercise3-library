import { Component } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Exercise3';
  title="";
  author="";
  books=[];
  title1="";
  author1="";
  id:number=0;
  addClick(){
    this.id=this.id+1;
    this.books.push({
      id:this.id,
      title1:this.title,
      author1:this.author

    })
    this.title="";
    this.author="";
      
    

  }
  deleteID(n){
    this.books=this.books.filter((b)=>b.id!==n)

  }
  }
