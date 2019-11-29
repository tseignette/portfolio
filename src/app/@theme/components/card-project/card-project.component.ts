import { Component, Input } from '@angular/core';
import { Project } from '../../../@core/models';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss']
})
export class CardProjectComponent {

  @Input() project: Project;

  constructor() { }

}
