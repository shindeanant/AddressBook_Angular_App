import { Component, OnInit } from '@angular/core';
import { ContactDetails } from '../service/contact-details';
import { HttpServicesService } from '../service/http-services.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
})
export class DashBoardComponent implements OnInit {
  user: any;
  contactList: ContactDetails[] = [];
  constructor(private address: HttpServicesService) {}
  ngOnInit() {
    this.address.getUser().subscribe((data) => {
      this.user = data;
      this.contactList = this.user.data;

      console.log(this.contactList);
    });
  }
  delete(id: number) {
    this.address.deleteAdd(id).subscribe((data) => {
      console.log(data);
    });
    alert('Your data is Deleted succesfully');
  }
  // update(id:number){
  //   this.address.updateContact(id).subscribe((data =>{
  //     console.log(data)
  //   }));
}
