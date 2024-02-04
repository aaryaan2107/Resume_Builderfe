import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/service.service';

@Component({
  selector: 'app-it',
  templateUrl: './it.component.html',
  styleUrls: ['./it.component.scss']
})
export class ITComponent implements OnInit  {
  item: any;
  id!: string | null;

constructor(private service: ServiceService, private route: ActivatedRoute ){}

ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.id = params.get('id');
  });
  this.getskils();
}


getskils(){
  this.service.getrmakeid(this.id).subscribe(
    (res) => {
      this.item = res;
      console.log(this.item.skils);
      
    });
}

}