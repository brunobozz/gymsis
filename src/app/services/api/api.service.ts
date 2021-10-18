import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_PREFIX = environment.apiUrl;
  constructor(private http: HttpClient) {}

  public getData(endpoint: string) {
    return this.http.get(this.API_PREFIX + endpoint);
  }

  public deleteData(id: number, onde: string) {
    return this.http.delete(this.API_PREFIX + onde + id);
  }

  public postData(info: string, data: any) {
    return this.http.post(this.API_PREFIX + info, data);
  }
}
