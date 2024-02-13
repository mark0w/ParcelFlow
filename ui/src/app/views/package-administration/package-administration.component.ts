import {Component} from '@angular/core';
import {Router} from "@angular/router";

// interface Parcel {
//     id?: string;
//     sku?: string;
//     description?: string;
//     address?: string;
//     town?: string;
//     country: string;
//     deliveryDate?: string;
// }

interface TreeNode<T> {
    data: T;
    children?: TreeNode<T>[];
    expanded?: boolean;
}

@Component({
    selector: 'app-package-administration',
    templateUrl: './package-administration.component.html',
    styleUrl: './package-administration.component.scss'
})
export class PackageAdministrationComponent {
    rows = [
        { country: 'estonia', address: 'viru 12', sku: 'sku001' },
    ];
    columns = [{ prop: 'country' }, { name: 'address' }, { name: 'sku' }];

    constructor(private router: Router) {
    }

    navigateToCreation() {
        this.router.navigateByUrl('administration/insert-package');
    }
}
