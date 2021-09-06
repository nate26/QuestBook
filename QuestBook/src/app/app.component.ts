import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { Quest, SubQuest } from './models/quest.model';
import { QuestStatus } from './models/types.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Quest Book';

    mainQuests$!: Observable<Quest[]>;
    sideQuests$!: Observable<Quest[]>;
    completedQuests$!: Observable<Quest[]>;

    constructor(private dataService: DataService) {
        this.mainQuests$ = dataService.getMainQuests();
        this.sideQuests$ = dataService.getSideQuests();
        this.completedQuests$ = dataService.getCompletedQuests();
    }
}
