import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/service.service';

@Component({
  selector: 'app-form-info5',
  templateUrl: './form-info5.component.html',
  styleUrls: ['./form-info5.component.scss']
})
export class FormInfo5Component {
  item: any[] = [];
  message: string | null = "Please provide your Interest ";
  a2: string = "";
  con: string = "";
  id!: string | null;
  rid!:number;

  interest1:string = "";
  interest2:string = "";
  interest3:string = "";
  professional_summary:string = "";
  armakeid: string = "";
  constructor(private service: ServiceService, private router : Router , private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.getskils();
  }
  closeMessage(): void {
    this.message = null;
  }
  getskils(){
    this.service.getrmakeid(this.id).subscribe(
      (res) => {
        this.rid = res.rmakeid;        
        console.log(this.rid);
      }
    )
  }

  onSubmit() {
    this.service.professional_summary(this.id,this.professional_summary,this.interest1,this.interest2,this.interest3).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/it/' + this.rid]);
      });
  }

}
