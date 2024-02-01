import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input()
  public cardNumber: string;

  @Input()
  public name: string;

  @Input()
  public expiration: string;

  constructor() {}

  ngOnInit(): void {}
}
