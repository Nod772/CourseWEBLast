import { Component, OnInit } from '@angular/core';
import { DiscussionsService } from '../../../Services/discussions.service';
import { DiscussionModel } from '../../../Models/discussion.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-discussion-list',
  templateUrl: './discussion-list.component.html',
  styleUrls: ['./discussion-list.component.scss']
})
export class DiscussionListComponent implements OnInit {

  discussions:DiscussionModel[];
  search:string;
  constructor(private discussionsService:DiscussionsService,private router:Router) { }

  ngOnInit() {
    this.discussionsService.getDiscussions().subscribe(data=>{
      this.discussions=data;
    })
  }

  searchClick() {
    console.log(this.search);
    this.discussionsService.searchProduct(this.search).subscribe(data => {
      console.log(data);
      this.discussions = data;
      console.log(this.discussions);
    });
  }
    deleteClick(id: number) {
      console.log(id);
      this.discussionsService.deleteProduct(id).subscribe(data => {
        this.discussions = data;
      });

  }
  cancelDelete(){
    console.log("Cancel clicked");
  }
  listOfColumn = [
    {
      title: 'Id',
    },
    {
      title: 'Question Text',
    },
    {
      title: 'Count people',
    },
    {
      title: 'Action',
    }
  ];
}

