

import {  ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import {  NgZone } from '@angular/core';
import {Component, Inject,OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { UserCrudService } from './../services/user-crud.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})

export class UpdatePage implements OnInit {

  updateUserFg!: FormGroup;
  
  id: any;

  constructor(
    private userCrudService: UserCrudService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.fetchUser(this.id);
    this.updateUserFg = this.formBuilder.group({
      name: [''],
      email: [''],
      username: ['']
    })
  }

  fetchUser(id: string): void {
    this.userCrudService.getUser(id).subscribe((data) => {
      this.updateUserFg.setValue({
        name: ['.name'],
        email: ['.email'],
        username: ['.username']                       
      });
    });
  }

  OnSubmit():any {
    if (!this.updateUserFg.valid) {
     return false;
    } else {
      {
      this.userCrudService.updateUser(this.id, this.updateUserFg.value)
        .subscribe(() => {
          this.updateUserFg.reset();
          this.router.navigate(['/list']);
        })
    }
  }

}
}
