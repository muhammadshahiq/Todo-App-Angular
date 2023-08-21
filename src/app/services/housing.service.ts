import { Injectable } from '@angular/core';
import { HousingLocation } from 'src/app/models/housinglocation';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private http: HttpClient) {}
  //for static content
  // getAllHousingLocations(): HousingLocation[] {
  //   return this.housingLocationList;
  // }

  // getHousingLocationById(id: number): HousingLocation | undefined {
  //   return this.housingLocationList.find(
  //     (housingLocation) => housingLocation.id === id
  //   );
  // }
  getBaseUrl(): string {
    return 'https://angular.io/assets/images/tutorials/faa';
  }

  url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
 
  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
