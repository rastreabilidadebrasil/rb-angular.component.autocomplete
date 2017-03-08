import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'rb-autocomplete',
  templateUrl: 'rb-autocomplete.component.html',
  styleUrls: ['rb-autocomplete.component.scss']
})
export class RbAutocompleteComponent {

  _list: any[];

  constructor(private ref: ElementRef) {
  }

  @Input()
  get list(): any[] {
    return this._list;
  }

  set list(values: any[]) {
    this._list = values;
    const data = values.reduce((a, i) => {
      a[i] = null;
      return a;
    }, {});
    $(this.ref.nativeElement).find('input')['autocomplete']({ data });
  }

}
