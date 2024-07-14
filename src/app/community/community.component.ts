import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss'
})
export class CommunityComponent {

  Messages: Array<string> = [
    'Hola. Comunidad. ¿Alguno sabe de un empleo para desarrollador web?',
    'Hola. Les comparto mi último cortometraje. Espero que los inspire a crear sus propios contenidos.'
  ];

}
