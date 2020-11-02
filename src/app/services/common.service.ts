import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/IProduct';

@Injectable()
export class CommonService {
  constructor(private http: HttpClient) { }

  searchForProducts(keyword: string): Observable<IProduct[]> {
      return <Observable<IProduct[]>>this.http.get('http://localhost:8080/searchProducts' + '?keyword='+ keyword);
  }
}
