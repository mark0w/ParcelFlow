import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl} from "@angular/forms";
import {Observable, of} from "rxjs";
import {ParcelService} from "../../services/parcel.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {Parcel} from "../../classes/parcel";

@UntilDestroy()
@Component({
  selector: 'app-package-administration',
  templateUrl: './package-administration.component.html',
  styleUrl: './package-administration.component.scss'
})
export class PackageAdministrationComponent implements OnInit {
  columns = [
    {key: 'id', title: 'ID'},
    {key: 'sku', title: 'SKU'},
    {key: 'description', title: 'Description'},
    {key: 'address', title: 'Address'},
    {key: 'town', title: 'Town'},
    {key: 'country', title: 'Country'},
    {key: 'deliveryDate', title: 'Delivery date'}
  ];

  data: Parcel[] = [];
  options = ['Option 1', 'Option 2', 'Option 3'];
  inputFormControl = new FormControl();
  filteredControlOptions$!: Observable<string[]>;

  constructor(private router: Router, private parcelService: ParcelService) {
  }

  ngOnInit() {
    this.filteredControlOptions$ = of(this.options);
    this.parcelService.getParcels().pipe(untilDestroyed(this)).subscribe((parcels) => {
      this.data = parcels
    })
  }

  // private filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();
  //   return this.options.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  // }

  navigateToCreation() {
    this.router.navigateByUrl('administration/insert-package');
  }
}
