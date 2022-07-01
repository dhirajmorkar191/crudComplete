import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  employee : any;
  employeeName : any;
  employeeAge :any;
  employeeAddress : any;
  message: any;
  editname: any;
  editage: any;
  editaddress: any;
  
    // std$ = this.angularFirestore.doc("/Student/Dnyanesh15").get().pipe(map((res:any) => {
    //   let data = res.data().detail;
    //   return data
  
    // }))
  
    constructor(public crudservice:CrudService){
      
    }
    ngOnInit(){
      this.crudservice.get_Allemployee().subscribe(data => {
  
        this.employee = data.map((datas:any) => {
          return {
            id: datas.payload.doc.id,
            isedit: false,
            name: datas.payload.doc.data()['name'],
            age: datas.payload.doc.data()['age'],
            address: datas.payload.doc.data()['address'],
          };
        })
        console.log(this.employee);
  
      });
    }
  
    
    createRecord()
    {
      const Record = {'name':this.employeeName,'age':this.employeeAge,'address':this.employeeAddress};
      // Record['name'] = this.employeeName;
      // Record['age'] = this.employeeAge;
      // Record['address'] = this.employeeAddress;
  
      this.crudservice.create_Newemployee(Record).then(res => {
        this.employeeName = "";
        this.employeeAge = undefined;
        this.employeeAddress = "";
        console.log(res);
        this.message = "Employee Data Save Done"
      }).catch(error =>{
        console.log(error);
      });
    }
  
    EditRecord(Record: { isedit: boolean; editname: any; name: any; editage: any; age: any; editaddress: any; address: any; })
    {
      Record.isedit =true;
      Record.editname = Record.name;
      Record.editage = Record.age;
      Record.editaddress = Record.address;
  
    }
  
    Updatarecord(recorddata:any)
    {
      const record = {'name':this.editname,'age':this.editage,'address':this.editaddress};
      record['name'] = recorddata.editname;
      record['age'] = recorddata.editage;
      record['address'] = recorddata.editaddress;
      this.crudservice.update_employee(recorddata.id, record);
      recorddata.isedit = false;
    }
  
    Deleteemployee(record_id: any)
    {
      this.crudservice.delete_employee(record_id);
    }

}
