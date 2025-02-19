import {ExperienceLevel} from "@/types/experienceLevel.ts";
import {WeatherType} from "@/types/weather.ts";

export type Game = {
    id: string;
    date: string;
    time: string;
    experienceLevel: ExperienceLevel;
    hasBall: boolean;
    hasNet: boolean;
    maxPlayers: number;
    currentPlayers: number;
    weather: WeatherType;
    temperature: number;
}