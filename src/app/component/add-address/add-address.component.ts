import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { HttpServicesService } from 'src/app/service/http-services.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css'],
})
export class AddAddressComponent implements OnInit {
  [x: string]: any;

  City = ['Pune', 'Mumbai', 'Beed', 'Latur', 'Aurangabad', 'Nagpur'];
  State = [
    'Maharashtra',
    'Arunachal Pradesh',
    'Assam',
    'Goa',
    'Jharkhand',
    'Nagaland',
  ];

  name: string = '';
  address: string = '';
  city: string = '';
  state: string = '';
  zip: string = '';
  phone: string = '';

  signupForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private HttpServicesService: HttpServicesService
  ) {
    this.signupForm = formBuilder.group({
      name: new FormControl(),
      address: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      zip: new FormControl(),
      phone: new FormControl(),
    });
  }

  ngOnInit(): void {}
  PostData(signupForm: any) {
    console.log(signupForm.controls);
  }
  addNewContact() {
    const newformData = {
      name: this.signupForm.controls.name.value,
      address: this.signupForm.controls.address.value,
      city: this.signupForm.controls.city.value,
      state: this.signupForm.controls.state.value,
      zip: this.signupForm.controls.zip.value,
      phone: this.signupForm.controls.phone.value,
    };
    this.HttpServicesService.createContact(newformData).subscribe((data: any) =>
      console.log(JSON.stringify(data))
    );
  }
  // newContact(id:number){s
  //   const updateformData={

  //     name: this.signupForm.controls.name.value,
  //     address : this.signupForm.controls.address.value,
  //     city : this.signupForm.controls.city.value,
  //     state : this.signupForm.controls.state.value,
  //     zip : this.signupForm.controls.zip.value,
  //     phone : this.signupForm.controls.phone.value

  // }
  // this.HttpServicesService.updateContact(updateformData).subscribe((data: any) =>
  //   console.log(JSON.stringify(data))
  //   );
}
