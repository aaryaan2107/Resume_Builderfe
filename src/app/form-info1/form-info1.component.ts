import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/service.service';

@Component({
  selector: 'app-form-info1',
  templateUrl: './form-info1.component.html',
  styleUrls: ['./form-info1.component.scss']
})
export class FormInfo1Component {
  message: string | null = "Please provide your personal information";
  data1:any;
  armakeid:number = 0;
  frist_nm:string = "";
  last_nm:string = "";
  gender:string = "";
  dob!:Date;
  marital_status:string = "";
  profession:string = "";
  address:string = "";
  country:string = "";
  phone:number = 0;
  email:string = "";
  constructor(private service:ServiceService , private router: Router){}

  ngOnInit() {
    this.service.rmakeid().subscribe(
      (res) => {
        if(res)
        {
          this.data1 = res;
          this.armakeid = this.data1.rmakeid+1;
          if(!this.armakeid)
          {
            this.armakeid = 1;
          }
        }else{
          this.armakeid = 1;
        }
        console.log(this.armakeid);
      }
    )
  }
  closeMessage(): void {
    this.message = null;
  }
  onSave(){
    console.log(
      this.armakeid,
      this.frist_nm,
      this.last_nm,
      this.gender,
      this.dob,
      this.marital_status,
      this.profession,
      this.address,
      this.country,
      this.phone,
      this.email
    );
    this.service.personal_info(this.armakeid,
      this.frist_nm,
      this.last_nm,
      this.dob,
      this.gender,
      this.marital_status,
      this.profession,
      this.address,
      this.country,
      this.phone,
      this.email).subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['/form-info2/' + this.armakeid]);
        }
      )
  }
}
