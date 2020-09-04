import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { parsePhoneNumberFromString, AsYouType } from 'libphonenumber-js';

@Component({
  selector: 'app-custom-phone-input',
  templateUrl: './custom-phone-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomPhoneInputComponent),
      multi: true,
    },
  ],
  styleUrls: ['./custom-phone-input.component.scss'],
})
export class CustomPhoneInputComponent implements ControlValueAccessor {
  onChange: any = () => {};
  onTouch: any = () => {};
  value: string;
  disabled: boolean;
  maxLength: number = 14;

  constructor() {}

  // set value(val) {
  //   // this value is updated by programmatic changes
  //   if (val !== undefined && this.val !== val) {
  //     this.val = val + ' sufijo';
  //     this.onChange(val);
  //     this.onTouch(val);
  //   }
  // }

  // sets value
  writeValue(value: string): void {
    console.log(value);
    if (value !== undefined && this.value !== value) {
      this.value = new AsYouType('US').input(value);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
