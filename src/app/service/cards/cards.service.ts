import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../../class/card';

@Injectable()
export class CardsService {

  urlApi = 'http://localhost:8000/card';
  card:Card;
  
  constructor(private http:HttpClient) { }

    getAll() {
        return this.http.get<Card[]>(this.urlApi+'/');
    }

    getById(id: number) {
        return this.http.get('' + id);
    }

    create(card: Card) {
        return this.http.post<Card>(this.urlApi+'/new', card);
    }

    update(card: Card) {
        return this.http.put<Card>('' + card.id, card);
    }

    delete(id: number) {
        return this.http.delete<Card>('' + id);
    }

    cardCollection(){
      
    } 
}