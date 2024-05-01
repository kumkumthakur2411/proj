import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Country } from '../shared/model/country';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CountryCardComponent {
  @Input() country!: Country


}
