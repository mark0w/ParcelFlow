import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ParcelService} from "../../services/parcel.service";
import {Parcel} from "../../classes/parcel";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {NbToastrService} from "@nebular/theme";
import {elasticInOut} from "../../shared/animations";
import {Router} from "@angular/router";

@UntilDestroy()
@Component({
    selector: 'app-insert-package',
    templateUrl: './insert-package.component.html',
    styleUrl: './insert-package.component.scss',
    animations: [elasticInOut],
})
export class InsertPackageComponent implements OnInit {
    parcelForm!: FormGroup;

    constructor(private fb: FormBuilder, private parcelService: ParcelService, private toastrService: NbToastrService, private router: Router) {
    }

    ngOnInit(): void {
        this.parcelForm = this.fb.group({
            sku: ['', Validators.required],
            description: [''],
            address: ['', Validators.required],
            town: ['', Validators.required],
            country: ['', Validators.required],
            deliveryDate: ['', Validators.required]
        });
    }

    submit() {
        if (this.parcelForm.valid) {
            const formValues = this.parcelForm.value;

            const parcel = new Parcel(
                formValues.sku,
                formValues.description,
                formValues.address,
                formValues.town,
                formValues.country,
                new Date(formValues.deliveryDate)
            );

            this.parcelService.createParcel(parcel).pipe(untilDestroyed(this)).subscribe(() => {
                    this.toastrService.success('Success', `Parcel created`);
                    this.router.navigateByUrl('/administration/manage-packages');
                },
                () => {
                    this.toastrService.danger('Duplicate SKU, try again :)', `Parcel creation failed`);
                })
        }
    }
}
