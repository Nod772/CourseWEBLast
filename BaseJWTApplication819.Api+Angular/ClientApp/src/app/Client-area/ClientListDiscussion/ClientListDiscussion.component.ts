import { Component, OnInit } from '@angular/core';
import { DiscussionModel } from 'src/app/Models/discussion.model';
import { DiscussionsService } from 'src/app/Services/discussions.service';

@Component({
  selector: 'app-ClientListDiscussion',
  templateUrl: './ClientListDiscussion.component.html',
  styleUrls: ['./ClientListDiscussion.component.scss']
})
export class ClientListDiscussionComponent implements OnInit {

  discussions:DiscussionModel[];
  search:string;
  constructor(private discussionsService:DiscussionsService) { }

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
