import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
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
  postsListShow: any[]=[];
  commentsListShow: any[]=[];

  constructor(public userService: UserService) { }
  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      ListFromDB => {
        debugger
        this.usersList = JSON.parse(ListFromDB);
      });
  }
  getAllPosts() {
    this.userService.getAllPosts().subscribe(
      ListFromDB => {
        this.postsList = JSON.parse(ListFromDB);
      });
  }
  getAllComments() {
    // Activate after 30 secends.
    setTimeout(() => {
      window.location.reload();
    }, 0.5); 
    this.userService.getAllComments().subscribe(
      ListFromDB => {
        this.commentsList = JSON.parse(ListFromDB);
      });
  }
  getfirstPosts():any {
    this.userService.getfirstPosts().subscribe(
      ListFromDB => {
        this.postsListShow = JSON.parse(ListFromDB);
      });
  }
  getfirstComment() {
    this.userService.getfirstComments().subscribe(
      ListFromDB => {
        this.commentsListShow = JSON.parse(ListFromDB);
      });  }
  userClick(postId: number) {debugger
    this.postsListShow=[];
    this.getAllPosts();
    for (let p of this.postsList) {
      if (p.userId == postId) {
        this.postsListShow.push(p);
        console.log(this.postsList)
      }
      else {
      }
    }
  }
  postClick(commentId:number){
    this.commentsListShow=[];
    this.getAllComments();
    for (let c of this.commentsList) {
      if (c.postId == commentId) {
        this.postsListShow.push(c);
        console.log(this.postsList)
      }
      else {
      }
    }  }

  ngOnInit(): void {
    this.getAllUsers();
    this.getfirstPosts();
    this.getfirstComment();
  }

}
