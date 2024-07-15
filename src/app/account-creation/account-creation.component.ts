import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-account-creation',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './account-creation.component.html',
  styleUrl: './account-creation.component.scss'
})
export class AccountCreationComponent {

  public Loading: boolean = false;
  public TermsAndConditions: string = 'https://help.workana.com/hc/en-us/articles/360041613914-Privacy-and-Data-Protection-Policy';

  constructor(public _Router: Router) {
  }
  public GoLink() {
    window.open(this.TermsAndConditions,'_blank');
  }

  public GoHome() {
    this.Loading = true;
    setTimeout(() => {
      this.Loading = false;
      this._Router.navigate(['/home']);
    }, 2000);
  }
}
