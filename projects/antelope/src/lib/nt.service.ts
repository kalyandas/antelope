import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dashboard, NtEvent } from './types/types';
@Injectable({
  providedIn: 'root'
})
export class NtService {

  public emitter = new EventEmitter<NtEvent>();
  public filtersEmitter = new EventEmitter<NtEvent[]>();

  constructor(private http: HttpClient) { }

  public getMetadata(id: number): Observable<Dashboard> {
   return this.http.get<Dashboard>(`./assets/antelope/${id}.json`);
  }

  public getData(url: string) {
    return this.http.get(url);
  }
}
