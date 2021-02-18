import { Component, OnInit } from '@angular/core';
import { post, UserService } from '../user.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-myapp',
  templateUrl: './myapp.component.html',
  styleUrls: ['./myapp.component.css']
})
export class MyappComponent implements OnInit {
  usersList: any[]=[];
  postsList: any[]=[];
  commentsList: any[]=[];
  postsListShow: post[]=[];
  commentsListShow: any[]=[];

  constructor(public userService: UserService) { }
  ngOnInit(): void {
    this.getAllUsers();
    this.getfirstPosts();
    this.getfirstComment();
  }
  // get all Users from API
  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      ListFromDB => {
        this.usersList = JSON.parse(ListFromDB);
      });
  }
  //get all Posts from API
  getAllPosts() {
    this.userService.getAllPosts().subscribe(
      ListFromDB => {
        this.postsList = JSON.parse(ListFromDB);
      });
  }
  //get all Comments from API
  getAllComments() {
    this.userService.getAllComments().subscribe(
      ListFromDB => {
        this.commentsList = JSON.parse(ListFromDB);
      });
  }
  //get first Posts
  getfirstPosts():any {
    this.userService.getfirstPosts().subscribe(
      ListFromDB => {
        this.postsListShow = JSON.parse(ListFromDB);
      });
  }
  //get first Comment
  getfirstComment() {
    this.userService.getfirstComments().subscribe(
      ListFromDB => {
        this.commentsListShow = JSON.parse(ListFromDB);
      });  
    }
    //get the all posts for specific user
  userClick(postId: number) {
    this.postsListShow=[];
    this.getAllPosts();
    for (let p of this.postsList) {
      if (p.userId == postId) {
        this.postsListShow.push(p);
      }
      else {
      }
    }
  }
   //get the all comments for specific post
  postClick(postId:number){
    this.commentsListShow=[];
    this.getAllComments();
    for (let c of this.commentsList) {
      if (c.postId == postId) {
        this.commentsListShow.push(c);
      }
      else {
      }
    } 
   }
refreshComments(){
 // Activate after 30 secends.
    setTimeout(() => {
      window.location.reload();
    }, 0.5); 
    this.userService.getAllComments();
}
}
