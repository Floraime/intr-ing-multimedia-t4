import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import {MenuComponent} from "../menu/menu.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-general-usage',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuComponent,
    NgIf
  ],
  templateUrl: './general-usage.component.html',
  styleUrl: './general-usage.component.scss'
})
export class GeneralUsageComponent {

  ShowMenu: boolean = false;

  constructor(private router: RouterOutlet) { }

  public SwapMenuVisibility(): void {
    this.ShowMenu = !this.ShowMenu;
  }
}
