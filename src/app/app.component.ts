import { Component } from '@angular/core';
import { HttpServicesService } from './service/http-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'addressbookservice-app';
  constructor(private address: HttpServicesService) {}

  ngOnInit() {
    this.address.getUser().subscribe((data) => console.log(data));
  }
}
