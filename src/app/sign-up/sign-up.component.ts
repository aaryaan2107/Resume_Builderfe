import { Component } from '@angular/core';
import { ServiceService } from 'src/service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  email:String = '';
  password:String = '';
  constructor(private service:ServiceService){}
  
  onlogin()
  {
    this.service.login(this.email,this.password).subscribe(
      (res)=> {
        console.log(res);
        
      }
    )
  }
}
