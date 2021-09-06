import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Quest } from './models/quest.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor() { }

    public getAllQuests(): Observable<Quest[]> {
        return of(require('../assets/test-data.json'));
    }

    public getMainQuests(): Observable<Quest[]> {
        return of(require('../assets/test-data-main.json'));
    }

    public getSideQuests(): Observable<Quest[]> {
        return of(require('../assets/test-data-side.json'));
    }

    public getCompletedQuests(): Observable<Quest[]> {
        return of(require('../assets/test-data-complete.json'));
    }
}
