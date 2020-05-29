import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {environment} from '../../../src/environments/environment';
import {Drink} from '../model/drink.model';
import {map, filter} from 'rxjs/operators';
@Injectable()
export class ServiceService {

  API: string =  environment.apilista;

  constructor(private httpclient: HttpClient, private router:Router) { }

  public  getList(){
    return this.httpclient.get<Drink[]>(`${this.API}/api/json/v1/1/search.php?s=margarita`)
  }

  public  getCategories(){
    return this.httpclient.get<any[]>(`${this.API}/api/json/v1/1/list.php?c=list`)
  }

  public  getGlasses(){
    return this.httpclient.get<any[]>(`${this.API}/api/json/v1/1/list.php?g=list`)
  }

  public  getIngredients(){
    return this.httpclient.get<any[]>(`${this.API}/api/json/v1/1/list.php?i=list`)
  }

  public  getAlcoholic(){
    return this.httpclient.get<Drink[]>(`${this.API}/api/json/v1/1/list.php?a=list`) 
  }
}
