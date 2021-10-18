import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-page-header',
  templateUrl: './comp-page-header.component.html',
  styleUrls: ['./comp-page-header.component.scss'],
})
export class CompPageHeaderComponent implements OnInit {
  @Input() title!: string;
  @Input() icon?: string;
  constructor() {}

  ngOnInit(): void {}
}
