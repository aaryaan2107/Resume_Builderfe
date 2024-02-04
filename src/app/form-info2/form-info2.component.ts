import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/service.service';

@Component({
  selector: 'app-form-info2',
  templateUrl: './form-info2.component.html',
  styleUrls: ['./form-info2.component.scss']
})
export class FormInfo2Component {
  item: any[] = [];
  message: string | null = "Please provide your educational information";
  s_name:string = "";
  s_location:string = "";
  degree:string = "";
  field_of_study:string = "";
  graduation_date:string = "";
  grades:number = 0;
  state:string = "";
  a2: string = "";
  con: string = "";
  id!: string | null;
  rid!:number;

  constructor(private service: ServiceService, private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.geteducation();
  }
  closeMessage(): void {
    this.message = null;
  }
  geteducation(){
    this.service.getrmakeid(this.id).subscribe(
      (res) => {
        this.item = res.education;
        console.log(this.item);
        this.rid = res.rmakeid;  
        console.log(this.item);
              
      }
    )
  }

  onSubmit() {
    const a1 = {
      s_name:this.s_name,
      s_location:this.s_location,
      degree:this.degree,
      field_of_study:this.field_of_study,
      graduation_date:this.graduation_date,
      grades:this.grades,
      state:this.state,
    }
    this.item.push(a1);
    this.service.education(this.rid,this.item).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/form-info3/'+ this.rid]);
      });
    this.geteducation();
    this.con = "";
    this.a2 = "";
  }

  onadd() {
    this.con = "this";
    this.a2 = "this"
  }
  
}
