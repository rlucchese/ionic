import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'grp-input',
  templateUrl: './grp-input.component.html',
  styleUrls: ['./grp-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GrpInputComponent),
      multi: true,
    }
  ]
})


export class GrpInputComponent implements ControlValueAccessor {
   @Input()  label: string = ""
   @Input() required:string = "false"
   @Input() type:string = "text"
   @Input() name: string = ""

   public value: string = ""

//   private _onChange = (value: String) => undefined;
   onChange: any = () => {}
   onTouch: any = () => {}
   onBlur: any =() => {}
   public iconRequired: string = "star"

  constructor() { }

  ngOnInit() {}

  mensagem (msg: string) {
    console.log (msg)
  }

  writeValue(value: string): void {
    this.value = value
//    this.value = "sssddeee"

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
