import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/IProduct';

@Injectable()
export class CommonService {
  userEmail: string = ''; 

  constructor(private http: HttpClient) { }

  searchForProducts(keyword: string): Observable<IProduct[]> {
      return <Observable<IProduct[]>>this.http.get('http://localhost:8080/searchProducts' + '?keyword='+ keyword + '&email=' + this.userEmail);
  }

  getMyBoughtProducts(): Observable<IProduct[]> {
    return <Observable<IProduct[]>>this.http.get('http://localhost:8080/getMyBoughtProducts' + '?email='+ this.userEmail);
  }

  buyProduct(prod: IProduct): Observable<any> {
    return <Observable<any>>this.http.get('http://localhost:8080/buyProduct' + '?productId=' + prod.id + '&email=' + this.userEmail, {responseType: 'text'});
  }

  returnProduct(prod: IProduct): Observable<any> {
    return <Observable<any>>this.http.get('http://localhost:8080/returnProduct' + '?productId=' + prod.id + '&email=' + this.userEmail, {responseType: 'text'});
  }
}
