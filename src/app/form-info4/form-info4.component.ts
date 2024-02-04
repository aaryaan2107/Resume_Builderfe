import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/service.service';

@Component({
  selector: 'app-form-info4',
  templateUrl: './form-info4.component.html',
  styleUrls: ['./form-info4.component.scss']
})
export class FormInfo4Component {
  item: any[] = [];
  message: string | null = "Please provide your Skills ";
  name: string = "";
  level: string = "low";
  name1: string = "";
  level1: string = "low";
  name2: string = "";
  level2: string = "low";
  a2: string = "";
  con: string = "";
  id!: string | null;
  rid!:number;
  constructor(private service: ServiceService, private route: ActivatedRoute,private router : Router) { }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.getskils()
  }

  getskils(){
    this.service.getrmakeid(this.id).subscribe(
      (res) => {
        this.item = res.skils;
        console.log(this.item);
        this.rid = res.rmakeid;        
      }
    )
  }
  closeMessage(): void {
    this.message = null;
  }
  onSubmit() {
    const a1 = {
      name: this.name,
      level : this.level,
    };
    const a2 ={
      name : this.name1,
      level : this.level1,
    };
    const a3 ={
      name : this.name2,
      level : this.level2,
    };
  
    this.item.push(a1);
    this.item.push(a2);
    this.item.push(a3);
    
    this.service.skils_info(this.rid,this.item).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/form-info5/' + this.rid]);
      });
    this.getskils();
    this.level = "low";
    this.name = "";
    this.con = "";
    this.a2 = "";
  }
  onadd() {
    this.con = "this";
    this.a2 = "this"
  }
  onchange(value:string){
    this.level = value;
    console.log(this.level);
    
  }
}
