import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataTableDataSource, DataTableItem } from '../data-table/data-table-datasource';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {
  
  constructor (private http: HttpClient){

  }
  getAll():Observable<DataTableItem[]> {
    return this.http
    .get<DataTableItem[]>("http://190.57.152.229/ordenescompraws/api/ordencompra");
  }
}
