import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Quest, SubQuest } from '../models/quest.model';
import { QuestStatus } from '../models/types.model';

@Component({
  selector: 'app-quest-list',
  templateUrl: './quest-list.component.html',
  styleUrls: ['./quest-list.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class QuestListComponent implements OnInit {

  @Input()
  quests!: Quest[] | null;

  constructor() { }

  ngOnInit(): void {
  }

  questStarted(quest: SubQuest | Quest): boolean {
      return quest.status !== QuestStatus.TO_DO;
  }

  questCompleted(quest: SubQuest): boolean {
      return quest.status === QuestStatus.COMPLETE;
  }

}
