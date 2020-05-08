import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass'],
})
export class InputComponent implements OnInit {
  @Input()
  formGroup: FormGroup;
  @Input()
  name: string;
  @Input()
  type: string;
  @Input()
  placeholder: string;

  constructor() {}

  ngOnInit(): void {}
}
