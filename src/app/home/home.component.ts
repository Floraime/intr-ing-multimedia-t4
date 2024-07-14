import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  TextTest: string = 'Hola.Bienvenido al maravilloso mundo de la Ingeniería Multimedia.' +
    'Te contaremos los fundamentos de este campo para que te animes a estudiarlo.';

  CircleColors: Array<string> = [
    '#2699FB',
    '#F1F9FF',
    '#F1F9FF',
    '#F1F9FF',
  ];
}
