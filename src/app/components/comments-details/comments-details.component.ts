import { Component, OnInit } from '@angular/core';
import {IComment} from "../../interfces";
import {ActivatedRoute, Router} from "@angular/router";
import {CommentService} from "../../services";

@Component({
  selector: 'app-comments-details',
  templateUrl: './comments-details.component.html',
  styleUrls: ['./comments-details.component.css']
})
export class CommentsDetailsComponent implements OnInit {
  comment: IComment;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['comment'] as IComment;

      if (state) {
        this.comment = state
      } else {
        this.commentService.getById(id).subscribe(value => this.comment = value)
      }
    })
  }

}
