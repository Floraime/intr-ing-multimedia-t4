import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-job-search',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './job-search.component.html',
  styleUrl: './job-search.component.scss'
})
export class JobSearchComponent {
  public Jobs: Array<string> = [
    'Dseñador Web',
    'Dseñador gráfico',
    'Dseñador UI',
    'Diseñador'
  ];

  public RecentJobs: Array<string> = [
    'Desarrollador Web',
    'Programador Backend',
    'Editor de Vídeos',
    'Editor de audio'
  ];
}
