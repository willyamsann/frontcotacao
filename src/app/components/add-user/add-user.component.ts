import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User;
  constructor(private userService: UserService,private router: Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.user = new User;
  }

    createUser(){
      this.userService.create(this.user)
      .subscribe((res) => {
        this.router.navigate(["/users"]);
      });
    }
  
}
