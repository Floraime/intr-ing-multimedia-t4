import {Component, Input, Output, EventEmitter} from '@angular/core';
import {IMenuItem} from "../interfaces/imenu-item";
import {NgForOf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  public MenuItems: Array<IMenuItem> = [
    {
      Icon: '/assets/images/menu-items/icon-home.svg',
      Text: 'Home',
      Url: '/home'
    }, {
      Icon: '/assets/images/menu-items/icon-jobs.svg',
      Text: 'Empleos',
      Url: '/empleos'
    }, {
      Icon: '/assets/images/menu-items/icon-community.svg',
      Text: 'Comunidad',
      Url: '/comunidad'
    }, {
      Icon: '/assets/images/menu-items/icon-notifications.svg',
      Text: 'Notificaciones'
    }, {
      Icon: '/assets/images/menu-items/icon-creations.svg',
      Text: 'Creaciones'
    }, {
      Icon: '/assets/images/menu-items/icon-collegues.svg',
      Text: 'Universidades'
    }, {
      Icon: '/assets/images/menu-items/icon-configuration.svg',
      Text: 'Configuración'
    },
  ];

  @Input() ShowMenu: boolean = false;
  @Output() ShowMenuChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private _Router: Router) {}

  public CalculateURL(url: string): string {
    let result: string = '';
    if (url) {
      result = `url(${url})`;
    }
    return result;
  }

  public NavigateTo(path: string | undefined): void {
    if (path) {
      this._Router.navigate([path]);
      this.ShowMenu = false;
      this.ShowMenuChange.emit(this.ShowMenu);
    }
  }
}
