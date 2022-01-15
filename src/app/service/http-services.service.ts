import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ContactDetails } from './contact-details';
@Injectable({
  providedIn: 'root',
})
export class HttpServicesService {
  baseUrl: string = environment.api_url;
  constructor(private httpClient: HttpClient) {}
  getUser() {
    return this.httpClient.get(environment.api_url + '/get');
  }

  url = environment.api_url + '/create';
  createContact(reourceBody: {
    name: string;
    address: string;
    city: string;
    state: string;
    zip: number;
    phone: string;
  }) {
    return this.httpClient.post(this.url, reourceBody);
  }

  deleteAdd(id: any) {
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }

  updateContact(id: number, data: ContactDetails) {
    return this.httpClient.put(`${this.baseUrl}/update/${id}`, data);
  }
}
