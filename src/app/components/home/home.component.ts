import { Component, OnInit, inject } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { HousingLocation } from 'src/app/models/housinglocation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];
  baseUrl: string = '';

  //for static content
  // constructor() {
  //   this.housingLocationList = this.housingService.getAllHousingLocations();
  //   this.filteredLocationList = this.housingLocationList;
  // }

  constructor() {}
  ngOnInit() {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocation[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
        this.baseUrl = this.housingService.getBaseUrl();
      });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
  
}
