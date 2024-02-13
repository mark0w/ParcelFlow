import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Parcel} from "../classes/parcel";
import {mapTo, Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ParcelService {
    private static BASE_API_URL = '/api/parcels'

    constructor(private httpClient: HttpClient) {
    }

    getParcels(): Observable<Parcel[]> {
        return this.httpClient.get<Parcel[]>(ParcelService.BASE_API_URL)
    }

    createParcel(parcel: Parcel): Observable<boolean> {
        return this.httpClient.post(ParcelService.BASE_API_URL, parcel).pipe(mapTo(true));
    }
}
