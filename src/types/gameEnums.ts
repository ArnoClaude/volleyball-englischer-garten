// gameEnums.ts
export enum DateType {
    STARTING_SOON,
    TODAY,
    TOMORROW,
    WEEKEND,
    NEXT_WEEK,
    NEXT_WEEKEND
}

export enum TimeOfDay {
    MORNING,
    AFTERNOON,
    EVENING
}

export enum GameSize {
    SMALL,
    MEDIUM,
    LARGE
}

export enum GameCapacity {
    OPEN,
    ALMOST_FULL,
    FULL
}

export const GameLabels = {
    TimeOfDay: {
        [TimeOfDay.MORNING]: "Morning (6-11)",
        [TimeOfDay.AFTERNOON]: "Afternoon (12-17)",
        [TimeOfDay.EVENING]: "Evening (18-22)"
    },
    DateType: {
        [DateType.STARTING_SOON]: "Starting Soon",
        [DateType.TODAY]: "Today",
        [DateType.TOMORROW]: "Tomorrow",
        [DateType.WEEKEND]: "This Weekend",
        [DateType.NEXT_WEEK]: "Next Week",
        [DateType.NEXT_WEEKEND]: "Next Weekend"
    },
    GameSize: {
        [GameSize.SMALL]: "Small (2-3)",
        [GameSize.MEDIUM]: "Medium (4-6)",
        [GameSize.LARGE]: "Large (7+)"
    },
    GameCapacity: {
        [GameCapacity.OPEN]: "Open",
        [GameCapacity.ALMOST_FULL]: "Almost Full",
        [GameCapacity.FULL]: "Full"
    }
}