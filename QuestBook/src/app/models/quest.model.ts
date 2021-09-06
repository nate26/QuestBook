import { QuestStatus, QuestType } from "./types.model";

export class Quest {
    index!: number;
    name!: string;
    xp!: number;
    description!: string;
    quest_type!: QuestType;
    status!: QuestStatus;
    sub_quests!: SubQuest[];
}

export class SubQuest {
    index!: number;
    name!: string;
    description?: string;
    notes?: string;
    status!: QuestStatus;
}