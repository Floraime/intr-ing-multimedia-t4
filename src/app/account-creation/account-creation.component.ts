import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-account-creation',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './account-creation.component.html',
  styleUrl: './account-creation.component.scss'
})
export class AccountCreationComponent {

  TermsAndConditions: string = 'https://help.workana.com/hc/en-us/articles/360041613914-Privacy-and-Data-Protection-Policy';

}
