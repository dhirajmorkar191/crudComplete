import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
email:any = {};
password:any = {};
  constructor(private crudservise: CrudService) { }

  ngOnInit(): void {
  }

  onSubmit(formData:any) {
    if (formData.valid) {
      console.log(formData.value);
      this.crudservise.login(
        formData.value.email,
        formData.value.password
      );
    }
  }

}
