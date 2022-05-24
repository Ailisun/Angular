import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IUser} from "../../interfaces";
import {UserService} from "../../services";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
user:IUser
  constructor(private activateRoute :ActivatedRoute, private userService :UserService) { }

  ngOnInit(): void {
  this.activateRoute.params.subscribe(({id}) => {
    this.userService.getById(id).subscribe(value => this.user = value)
  })
  }

}
