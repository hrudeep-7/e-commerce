import { Component } from '@angular/core';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent {
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  department: string | undefined;
  role: string | undefined;
}
