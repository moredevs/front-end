import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { Drink } from '../../../model/drink.model';
import { Router ,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  data =new Drink() ;
  flag:boolean=false;
  constructor(private service: ServiceService, private router: Router, private activatedRoute: ActivatedRoute) { }
    params = this.activatedRoute.snapshot.params;
  ngOnInit() {
 
    this.service.getList().subscribe(res => {
      this.data = res['drinks'].filter(item => item.idDrink == this.params.id);
      this.data=this.data[0] 
      this.flag=true;
    },
      err => {
        console.log(err);

      }
    )
  }

}
