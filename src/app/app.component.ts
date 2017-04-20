import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sectionInfo = "";
  subSectionInfo = [];
  mySource = {sections:['section1','section2','section3','section4','section5']}
  subSource = {section1:['S01-SS01','S01-SS01','S01-SS01','S01-SS01','S01-SS01'],
              section2:['S02-SS02','S02-SS02','S02-SS02','S02-SS02','S02-SS02'],
              section3:['S03-SS03','S03-SS03','S03-SS03','S03-SS03','S03-SS03'],
              section4:['S04-SS04','S04-SS04','S04-SS04','S04-SS04','S04-SS04'],
              section5:['S05-SS05','S05-SS05','S05-SS05','S05-SS05','S05-SS05']}
  subSubSource = {sections:['subSubSection-1','subSubSection-2','subSubSection-3','subSubSection-4','subSubSection-5']}
  sectionSelected(val){
    switch(val){
      case this.mySource.sections[0]:
        this.subSectionInfo = this.subSource.section1;
        break;
      case this.mySource.sections[1]:
        this.subSectionInfo = this.subSource.section2;
        break;
      case this.mySource.sections[2]:
        this.subSectionInfo = this.subSource.section3;
        break;
      case this.mySource.sections[3]:
        this.subSectionInfo = this.subSource.section4;
        break;
      case this.mySource.sections[4]:
        this.subSectionInfo = this.subSource.section5;
        break;
    }
  }
  title = 'Angular 2 nested Dropdown !';
}
