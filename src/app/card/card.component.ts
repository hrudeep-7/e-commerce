import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() name: string | undefined;
  @Input() emp_id: string | undefined;
  @Input() content: string | undefined;
  @Input() type: string | undefined;
  @Input() admin: string | undefined;
  @Input() email: string | undefined;
  @Input() pno: string | undefined;
  @Input() status: string | undefined;
}
