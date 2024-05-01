
import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Country } from '../shared/model/country';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  countries$: Observable<Country[]> | undefined;
  private source: Country[]=[];
  searchFilter?: string;
 

  constructor(private api: DataService) {}

  ngOnInit(): void {
    this.countries$ = this.api.getAllCountries();
    this.api.getAllCountries().subscribe((countries) => {
      this.source = countries;
    });
  }

  get countries() {
    return this.source
      ? this.source
          .filter((country) =>
            this.searchFilter
              ? country.name
                  .toLowerCase()
                  .includes(this.searchFilter.toLowerCase())
              : country
          )
      : this.source;
  }
}