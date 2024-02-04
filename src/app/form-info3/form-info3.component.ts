import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/service.service';

@Component({
  selector: 'app-form-info3',
  templateUrl: './form-info3.component.html',
  styleUrls: ['./form-info3.component.scss']
})
export class FormInfo3Component {
  item: any[] = [];
  message: string | null = "Please provide your Experience ";
  rid!:number;
  id!: string | null;
  
  a2: string = "";
  con: string = "";

  job_title:string= "";
  emp:string= "";
  location:string= "";
  start_date:string= "";
  end_date:string= "";
  job_description:string= "";

constructor(private service: ServiceService, private route: ActivatedRoute,private router : Router){}

ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.id = params.get('id');
    });
    this.getwork_hs();
  }
  closeMessage(): void {
    this.message = null;
  }
  getwork_hs(){
    this.service.getrmakeid(this.id).subscribe(
      (res) => {
        this.item = res.work_hs;
        console.log(this.item);
        this.rid = res.rmakeid;  
        console.log(this.item);
              
      }
    )
  }

  onadd() {
    this.con = "this";
    this.a2 = "this"
  }

  onSubmit() {
    const a1 = {
      job_title:this.job_title,
      emp:this.emp,
      location:this.location,
      start_date:this.start_date,
      end_date:this.end_date,
      job_description:this.job_description
    }
    this.item.push(a1);
    this.service.work_hs(this.rid,this.item).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/form-info4/'+ this.rid]);
      }
    )
  }

}
