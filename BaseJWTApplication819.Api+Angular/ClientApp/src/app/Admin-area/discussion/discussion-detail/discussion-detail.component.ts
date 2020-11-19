import { Component, OnInit } from '@angular/core';
import { DiscussionsService } from '../../../Services/discussions.service';
import { DiscussionModel } from '../../../Models/discussion.model';
import { ActivatedRoute } from '@angular/router';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-discussion-detail',
  templateUrl: './discussion-detail.component.html',
  styleUrls: ['./discussion-detail.component.scss']
})
export class DiscussionDetailComponent implements OnInit {
  id: number;
  discussion: DiscussionModel;
  loaded: boolean = false;

  constructor(private discussionService: DiscussionsService, activeRoute: ActivatedRoute) {
    this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
  }

  ngOnInit() {
    if (this.id)
      this.discussionService.getDiscussion(this.id)
        .subscribe((data: DiscussionModel) => { this.discussion = data; this.loaded = true; });
    this.discussionService.refreshDiscussion.subscribe(data => {
      this.discussion = data;
    })
  }

  selectAnswer(id: number) {
    console.log(id);
    this.discussionService.selectAnswer(id).subscribe(data => {
      console.log(data);
        this.discussionService.refreshDiscussion.emit(data)

    });

  }
  cancelDelete() {
    console.log("Cancel clicked");
  }
  listOfColumn = [

    {
      title: 'Option Text',
    },

    {
      title: 'Action',
    }
  ];
}
