import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged, map, Observable, of, startWith} from "rxjs";
import {ParcelService} from "../../services/parcel.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {Parcel} from "../../classes/parcel";
import {elasticInOut} from "../../shared/animations";

@UntilDestroy()
@Component({
    selector: 'app-package-administration',
    templateUrl: './package-administration.component.html',
    styleUrl: './package-administration.component.scss',
    animations: [elasticInOut]
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
    countries: string[] = [];
    options: string[] = [];
    // i know they can be grouped, but im tired and this is a test exercise.
    countryFormControl = new FormControl();
    descFormControl = new FormControl();
    filteredControlOptions$!: Observable<string[]>;

    constructor(private router: Router, private parcelService: ParcelService) {
    }

    ngOnInit() {
        this.filteredControlOptions$ = of(this.options);
        this.parcelService.getParcels().pipe(untilDestroyed(this)).subscribe((parcels) => {
                this.setData(parcels)

                this.filteredControlOptions$ = this.countryFormControl.valueChanges.pipe(
                    startWith(''),
                    debounceTime(200),
                    distinctUntilChanged(),
                    map(val => this.filterCountries(val))
                );
            }
        );
    }

    private filterCountries(val: string): string[] {
        if (!val) return this.countries;
        return this.countries?.filter(country =>
            country.toLowerCase().includes(val.toLowerCase())
        );
    }

    private setData(parcels: Parcel[]) {
        this.data = parcels
        const countries = parcels.map(parcel => parcel.country);
        this.countries = Array.from(new Set(countries));
    }

    getFilteredParcels() {
        const description = this.descFormControl.value;
        const country = this.countryFormControl.value;
        this.parcelService.getParcels(description, country).pipe(untilDestroyed(this)).subscribe((parcels) => {
            console.log(parcels);
            this.setData(parcels);
            this.countryFormControl.setValue('');
        });
    }

    navigateToCreation() {
        this.router.navigateByUrl('administration/insert-package');
    }
}
