import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
})
export class ButtonComponent implements OnInit {
  @Input()
  type: string;
  @Input()
  label: string;

  constructor() {}

  ngOnInit(): void {}
}
