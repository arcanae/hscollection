import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../../class/card';

@Injectable()
export class CardsService {

  urlApi = 'http://localhost:8000/card';
  card:Card[];
  
  constructor(private http:HttpClient) {  }

}