import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Parcel} from "../classes/parcel";
import {mapTo, Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ParcelService {
    private static BASE_API_URL = '/api/parcels'

    constructor(private httpClient: HttpClient) {
    }

    getParcels(description?: string, country?: string): Observable<Parcel[]> {
        let params = new HttpParams();

        if (description) {
            params = params.append('description', description);
        }

        if (country) {
            params = params.append('country', country);
        }

        return this.httpClient.get<Parcel[]>(ParcelService.BASE_API_URL, {params}
        )
    }

    createParcel(parcel: Parcel): Observable<boolean> {
        return this.httpClient.post(ParcelService.BASE_API_URL, parcel).pipe(mapTo(true));
    }

    createMockData(): Observable<boolean> {
        return this.httpClient.post(`${ParcelService.BASE_API_URL}/mock-data`, null).pipe(mapTo(true));
    }
}
