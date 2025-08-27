import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'grp-input-range',
  templateUrl: './grp-input-range.component.html',
  styleUrls: ['./grp-input-range.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GrpInputRangeComponent),
      multi: true,
    }
  ]
})
export class GrpInputRangeComponent implements ControlValueAccessor {

  @Input("label") label: string=""
  @Input("type") type: string="text"
  @Input() name: string = ""

  public value1: string="";
  public value2: string="";

  public value: string[] = ["",""]

  onChange: any = () => {}
  onTouch: any = () => {}
  constructor() { }

  ngOnInit() {
//    this.value=["",""]
  }

  writeValue(value: string[]): void {
    console.log(value);
if(!value) this.value=["",""]
else if(!value[1]) this.value[1]=""
else this.value = value

this.value1 = this.value[0]
this.value2 = this.value[1]
//    console.log(value)
//    this.value = "sssddeee"

  }

  onchange1(vlr: string) {
    this.value1 = vlr
    if(this.value1 !== "" && this.value2 != "" && this.value2 < this.value1) {
      this.value2 = this.value1
    }

    this.onChange([this.value1,this.value2]);
  }
  onchange2(vlr: string) {
    this.value2 = vlr
    if(this.value1 !== "" && this.value2 != "" && this.value2 < this.value1) {
      this.value1 = this.value2
    }

    this.onChange([this.value1,this.value2]);
  }


registerOnChange(fn: any): void {
  this.onChange = fn;
}
registerOnTouched(fn: any): void {
  this.onTouch = fn;
}
setDisabledState(isDisabled: boolean): void {

}

}
