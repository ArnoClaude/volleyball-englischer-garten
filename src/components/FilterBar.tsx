// FilterBar.tsx
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, CheckCircle2 } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils";
import {
    DateType,
    TimeOfDay,
    GameSize,
    GameCapacity,
    GameLabels
} from "@/types/gameEnums";

interface FilterSelection {
    dateTypes: DateType[];
    timeOfDay: TimeOfDay[];
    gameSizes: GameSize[];
    hasBall: boolean;
    hasNet: boolean;
    gameCapacities: GameCapacity[];
}

const timeLabels = {
    [TimeOfDay.MORNING]: { title: "Morning", subtitle: "6-12" },
    [TimeOfDay.AFTERNOON]: { title: "Afternoon", subtitle: "12-18" },
    [TimeOfDay.EVENING]: { title: "Evening", subtitle: "18-22" }
};

const sizeLabels = {
    [GameSize.SMALL]: { title: "Small", subtitle: "2-3" },
    [GameSize.MEDIUM]: { title: "Medium", subtitle: "4-6" },
    [GameSize.LARGE]: { title: "Large", subtitle: "7+" }
};

export function FilterBar() {
    const [filters, setFilters] = useState<FilterSelection>({
        dateTypes: [DateType.TODAY],
        timeOfDay: [],
        gameSizes: [],
        hasBall: false,
        hasNet: false,
        gameCapacities: []
    });

    const toggleTimeOfDay = (time: TimeOfDay) => {
        setFilters(prev => ({
            ...prev,
            timeOfDay: prev.timeOfDay.includes(time)
                ? prev.timeOfDay.filter(t => t !== time)
                : [...prev.timeOfDay, time]
        }));
    };

    const toggleGameSize = (size: GameSize) => {
        setFilters(prev => ({
            ...prev,
            gameSizes: prev.gameSizes.includes(size)
                ? prev.gameSizes.filter(s => s !== size)
                : [...prev.gameSizes, size]
        }));
    };

    const toggleDateType = (date: DateType) => {
        setFilters(prev => ({
            ...prev,
            dateTypes: prev.dateTypes.includes(date)
                ? prev.dateTypes.filter(d => d !== date)
                : [...prev.dateTypes, date]
        }));
    };

    const toggleGameCapacity = (capacity: GameCapacity) => {
        setFilters(prev => ({
            ...prev,
            gameCapacities: prev.gameCapacities.includes(capacity)
                ? prev.gameCapacities.filter(c => c !== capacity)
                : [...prev.gameCapacities, capacity]
        }));
    };

    const DateTypeArray = [DateType.TODAY, DateType.TOMORROW, DateType.WEEKEND, DateType.NEXT_WEEK] as const;
    const TimeOfDayArray = [TimeOfDay.MORNING, TimeOfDay.AFTERNOON, TimeOfDay.EVENING] as const;
    const GameSizeArray = [GameSize.SMALL, GameSize.MEDIUM, GameSize.LARGE] as const;
    const GameCapacityArray = [GameCapacity.OPEN, GameCapacity.ALMOST_FULL] as const;

    return (
        <div className="fixed top-0 left-0 right-0 bg-background z-50">
            <div className="border-b bg-white">
                <div className="py-3">
                    <div className="flex items-center gap-2 overflow-x-auto px-4 no-scrollbar">
                        <div className="flex gap-2 flex-1 min-w-max">
                            {[DateType.TODAY, DateType.TOMORROW, DateType.WEEKEND].map(date => (
                                <Button
                                    key={date}
                                    variant={filters.dateTypes.includes(date) ? "default" : "outline"}
                                    size="sm"
                                    className="rounded-full whitespace-nowrap"
                                    onClick={() => toggleDateType(date)}
                                >
                                    {GameLabels.DateType[date]}
                                </Button>
                            ))}
                        </div>

                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="rounded-full w-10 px-0 shrink-0"
                                >
                                    <SlidersHorizontal className="h-4 w-4" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="bottom" className="h-[85vh] overflow-hidden flex flex-col">
                                <SheetHeader>
                                    <SheetTitle>Filters</SheetTitle>
                                </SheetHeader>

                                <div className="flex-1 overflow-y-auto py-6 space-y-6">
                                    {/* Date Type */}
                                    <div className="space-y-4">
                                        <label className="text-base font-medium">Date</label>
                                        <div className="grid grid-cols-2 gap-2">
                                            {DateTypeArray.map(date => (
                                                <button
                                                    key={date}
                                                    onClick={() => toggleDateType(date)}
                                                    className={cn(
                                                        "p-3 rounded-xl border text-center relative hover:border-primary/50 transition-colors",
                                                        filters.dateTypes.includes(date)
                                                            ? "border-primary bg-primary/5"
                                                            : "border-gray-200"
                                                    )}
                                                >
                                                    <div className="text-sm font-medium">
                                                        {GameLabels.DateType[date]}
                                                    </div>
                                                    {filters.dateTypes.includes(date) && (
                                                        <CheckCircle2
                                                            className="h-4 w-4 text-primary absolute top-2 right-2"/>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Time of Day */}
                                    <div className="space-y-4">
                                        <label className="text-base font-medium">Time of Day</label>
                                        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                                            {TimeOfDayArray.map(time => (
                                                <button
                                                    key={time}
                                                    onClick={() => toggleTimeOfDay(time)}
                                                    className={cn(
                                                        "flex-1 min-w-24 p-3 rounded-xl border relative hover:border-primary/50 transition-colors",
                                                        filters.timeOfDay.includes(time)
                                                            ? "border-primary bg-primary/5"
                                                            : "border-gray-200"
                                                    )}
                                                >
                                                    <div className="text-center">
                                                        <div className="font-medium text-sm">
                                                            {timeLabels[time].title}
                                                        </div>
                                                        <div className="text-xs text-muted-foreground">
                                                            {timeLabels[time].subtitle}
                                                        </div>
                                                    </div>
                                                    {filters.timeOfDay.includes(time) && (
                                                        <CheckCircle2
                                                            className="h-4 w-4 text-primary absolute top-2 right-2"/>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Game Size */}
                                    <div className="space-y-4">
                                        <label className="text-base font-medium">Game Size</label>
                                        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                                            {GameSizeArray.map(size => (
                                                <button
                                                    key={size}
                                                    onClick={() => toggleGameSize(size)}
                                                    className={cn(
                                                        "flex-1 min-w-24 p-3 rounded-xl border relative hover:border-primary/50 transition-colors",
                                                        filters.gameSizes.includes(size)
                                                            ? "border-primary bg-primary/5"
                                                            : "border-gray-200"
                                                    )}
                                                >
                                                    <div className="text-center">
                                                        <div className="font-medium text-sm">
                                                            {sizeLabels[size].title}
                                                        </div>
                                                        <div className="text-xs text-muted-foreground">
                                                            {sizeLabels[size].subtitle}
                                                        </div>
                                                    </div>
                                                    {filters.gameSizes.includes(size) && (
                                                        <CheckCircle2
                                                            className="h-4 w-4 text-primary absolute top-2 right-2"/>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Game Capacity */}
                                    <div className="space-y-4">
                                        <label className="text-base font-medium">Game Status</label>
                                        <div className="grid grid-cols-2 gap-2">
                                            {GameCapacityArray.map(capacity => (
                                                <button
                                                    key={capacity}
                                                    onClick={() => toggleGameCapacity(capacity)}
                                                    className={cn(
                                                        "p-3 rounded-xl border text-center relative hover:border-primary/50 transition-colors",
                                                        filters.gameCapacities.includes(capacity)
                                                            ? "border-primary bg-primary/5"
                                                            : "border-gray-200"
                                                    )}
                                                >
                                                    <div className="text-sm font-medium">
                                                        {GameLabels.GameCapacity[capacity]}
                                                    </div>
                                                    {filters.gameCapacities.includes(capacity) && (
                                                        <CheckCircle2 className="h-4 w-4 text-primary absolute top-2 right-2" />
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Equipment */}
                                    <div className="space-y-4">
                                        <label className="text-base font-medium">Equipment</label>
                                        <div className="grid grid-cols-2 gap-3">
                                            <button
                                                onClick={() => setFilters(prev => ({...prev, hasBall: !prev.hasBall}))}
                                                className={cn(
                                                    "p-2.5 rounded-xl border relative hover:border-primary/50 transition-colors",
                                                    filters.hasBall
                                                        ? "border-primary bg-primary/5"
                                                        : "border-gray-200"
                                                )}
                                            >
                                                <div className="flex items-center justify-center gap-2">
                                                    <span className="text-lg">🏐</span>
                                                    <div className="text-sm font-medium">Has Ball</div>
                                                </div>
                                                {filters.hasBall && (
                                                    <CheckCircle2
                                                        className="h-4 w-4 text-primary absolute top-2 right-2"/>
                                                )}
                                            </button>

                                            <button
                                                onClick={() => setFilters(prev => ({...prev, hasNet: !prev.hasNet}))}
                                                className={cn(
                                                    "p-2.5 rounded-xl border relative hover:border-primary/50 transition-colors",
                                                    filters.hasNet
                                                        ? "border-primary bg-primary/5"
                                                        : "border-gray-200"
                                                )}
                                            >
                                                <div className="flex items-center justify-center gap-2">
                                                    <span className="text-lg">🥅</span>
                                                    <div className="text-sm font-medium">Has Net</div>
                                                </div>
                                                {filters.hasNet && (
                                                    <CheckCircle2
                                                        className="h-4 w-4 text-primary absolute top-2 right-2"/>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t bg-white pt-4 mt-auto">
                                    <SheetClose asChild>
                                        <Button className="w-full">Show Results</Button>
                                    </SheetClose>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </div>
    );
}