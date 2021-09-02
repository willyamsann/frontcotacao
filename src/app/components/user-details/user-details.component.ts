import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User = new User;
  userId?: number;

  constructor(private userService: UserService,private router: Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('userId'));
    this.getLoadUserById(this.userId);
  }


  getLoadUserById(id:number){
    this.userService.getById(id)
    .subscribe(
      data => {
        this.user = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });

  }

}
