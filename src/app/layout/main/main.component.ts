import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../layout/service.service';
import { Drink } from '../../model/drink.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title = 'frontend';
  public drink: Drink[];
  categorie: Drink[];
  glasses: Drink[];
  ingredients: Drink[];
  alcohol: Drink[];
  constructor(private service: ServiceService, private router: Router) { }
  data =new Drink() ;
  strCategory: Drink;
  strGlass: Drink;
  strIngredient1: string="";
  strAlcoholic: string="";

  public Keywordc = "strCategory";
  public Keywordg = "strGlass";
  public Keywordi = "strIngredient1";
  public Keyworda = "strAlcoholic";
  
  valuec=null;
  valueg=null;
  valuei=null;
  valuea=null;
 
  ngOnInit() {

    this.getlsit()
     
     this.service.getAlcoholic().subscribe(res => {
      this.alcohol = res['drinks'].filter(item => item.strAlcoholic != null);
    },
      err => {
        console.log(err);

      }
    )

  

    this.service.getCategories().subscribe(res => {
      this.categorie = res['drinks'];
    },
      err => {

        console.log(err);

      }
    )


    this.service.getGlasses().subscribe(res => {
      this.glasses = res['drinks'];
    },
      err => {

        console.log(err);

      }
    )


    this.service.getIngredients().subscribe(res => {
      this.ingredients = res['drinks'];
    },
      err => {

        console.log(err);

      }
    )


   
  }

  getlsit(){
    this.service.getList().subscribe(res => {
      this.drink =   res['drinks'] 
        console.log(this.drink)
    },
      err => {
        console.log(err);

      }
    )
  }

  selectEvent(item) {
    this.strCategory=item["strCategory"]
  }

  selectEventg(item) {
    this.strGlass=item["strGlass"]
  }


  
}
