import { Component, OnInit } from '@angular/core';
import { DiscussionModel } from '../../../Models/discussion.model';
import { ProductService } from '../../../Services/product.service';
import { Router } from '@angular/router';
import { DiscussionsService } from '../../../Services/discussions.service';
import { Options } from '../../../Models/options';

@Component({
  selector: 'app-add-discussion',
  templateUrl: './add-discussion.component.html',
  styleUrls: ['./add-discussion.component.scss']
})
export class AddDiscussionComponent implements OnInit {
  value: string;

  discussion: DiscussionModel;
  constructor(private discussionService: DiscussionsService, private router: Router) { }

  ngOnInit() {
    this.discussion = new DiscussionModel();
    this.discussion.options = [];
    

  }
  addOption() {
    const option = new Options(0, this.value, 0);
    this.discussion.options.push(option);
    this.value = "";
  }

  submitAdd() {
    console.log(this.discussion.options);
    this.discussionService.addDiscussion(this.discussion).subscribe(data => {
      this.router.navigate(['/add-discussion']);
    });
  }
}
