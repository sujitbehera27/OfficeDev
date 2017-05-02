import { Component, OnInit } from '@angular/core';
import { IMultiSelectOption,IMultiSelectTexts,IMultiSelectSettings } from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() {  }
  optionsModel: number[];
  myOptions: IMultiSelectOption[] = [
      { id: 1, name: 'Section 1' },
      { id: 2, name: 'Section 2' },
      { id: 3, name: 'Section 3' },
      { id: 4, name: 'Section 4' },
      { id: 5, name: 'Section 5' },
      { id: 6, name: 'Section 6' },
  ];
    // Settings configuration
  mySettings: IMultiSelectSettings = {
      enableSearch: true,
      checkedStyle: 'checkboxes',
      buttonClasses: 'btn btn-default btn-block',
      dynamicTitleMaxItems: 1,
      displayAllSelectedText: true,
      selectionLimit: 3,
      autoUnselect: false
  };

  // Text configuration
  myTexts: IMultiSelectTexts = {
      checkAll: 'Select all',
      uncheckAll: 'Unselect all',
      checked: 'item selected',
      checkedPlural: 'items selected',
      searchPlaceholder: 'Find',
      defaultTitle: 'Select',
      allSelected: 'All selected',
  };
  onChange() {
      console.log(this.optionsModel);
  }
  ngOnInit() {
  }

}
