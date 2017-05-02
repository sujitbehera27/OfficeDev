import { Component,trigger,state,style,animate,transition } from '@angular/core';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('filterPane' , [
      state('inactive', style({
        visibility: 'hidden',
        display: 'none',
        opacity: '0',
        transition: 'visibility 0s, opacity 0.5s linear'
      })),
      state('active', style({
        display: 'block',
        transform: 'translateY(0%)',
      })),
      transition('inactive => active', animate(500)),
      transition('active => inactive', animate(500))
    ])
  ]
})
export class AppComponent {
   header = ""
   state: string = 'inactive'
   filterToggle = false
   mySource = {sections:['section1','section2','section3','section4','section5']}
   private filterClick = () => {
     this.state = (this.state === 'inactive' ? 'active' : 'inactive')
     this.filterToggle = !this.filterToggle
   }
}
