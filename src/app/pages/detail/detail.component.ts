import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/countries/shared/data.service';
import { Country,Currency,Language } from 'src/app/countries/shared/model/country';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
country$= new Observable<Country>();
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.country$ =this.dataService.getCountryByName(params.country).pipe(
        tap((res) => console.log(res)));
    });
  }
  // displayCurrencies(currencies: Currency[]){
  //   return currencies.map(currency => currency.name).join(',');
  // }
  // displayLanguages(languages: Language[]){
  //   return languages.map(language => language.name).join(',');
  // }

}
