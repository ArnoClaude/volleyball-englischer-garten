import { Game } from "@/types/game";
import { ExperienceLevel } from "@/types/experienceLevel";
import { WeatherType } from "@/types/weather";
import { GameCard } from "@/components/GameCard";
import { FilterBar } from "@/components/FilterBar";

export function AllGames() {
    const mockGames: Game[] = [
        {
            id: "1",
            date: "2024-02-19",
            time: "18:00",
            experienceLevel: ExperienceLevel.INTERMEDIATE,
            hasBall: true,
            hasNet: false,
            maxPlayers: 12,
            currentPlayers: 8,
            weather: WeatherType.SUNNY,
            temperature: 24,
        },
        {
            id: "2",
            date: "2024-02-20",
            time: "16:30",
            experienceLevel: ExperienceLevel.BEGINNER,
            hasBall: true,
            hasNet: true,
            maxPlayers: 8,
            currentPlayers: 4,
            weather: WeatherType.CLOUDY,
            temperature: 18,
        },
        {
            id: "3",
            date: "2024-02-20",
            time: "19:00",
            experienceLevel: ExperienceLevel.ADVANCED,
            hasBall: false,
            hasNet: true,
            maxPlayers: 10,
            currentPlayers: 10,
            weather: WeatherType.LIGHT_RAIN,
            temperature: 16,
        },
        {
            id: "4",
            date: "2024-02-21",
            time: "17:00",
            experienceLevel: ExperienceLevel.INTERMEDIATE,
            hasBall: true,
            hasNet: true,
            maxPlayers: 12,
            currentPlayers: 6,
            weather: WeatherType.HEAVY_RAIN,
            temperature: 22,
        },
        {
            id: "5",
            date: "2024-02-21",
            time: "20:00",
            experienceLevel: ExperienceLevel.ADVANCED,
            hasBall: true,
            hasNet: true,
            maxPlayers: 8,
            currentPlayers: 7,
            weather: WeatherType.THUNDERSTORM,
            temperature: 15,
        },
        // Additional mock games
        {
            id: "6",
            date: "2024-02-19",
            time: "20:30",
            experienceLevel: ExperienceLevel.BEGINNER,
            hasBall: false,
            hasNet: false,
            maxPlayers: 6,
            currentPlayers: 2,
            weather: WeatherType.SUNNY,
            temperature: 22,
        },
        {
            id: "7",
            date: "2024-02-20",
            time: "14:00",
            experienceLevel: ExperienceLevel.INTERMEDIATE,
            hasBall: true,
            hasNet: true,
            maxPlayers: 14,
            currentPlayers: 8,
            weather: WeatherType.SUNNY,
            temperature: 25,
        },
        {
            id: "8",
            date: "2024-02-22",
            time: "17:30",
            experienceLevel: ExperienceLevel.ADVANCED,
            hasBall: true,
            hasNet: false,
            maxPlayers: 10,
            currentPlayers: 3,
            weather: WeatherType.CLOUDY,
            temperature: 19,
        },
        {
            id: "9",
            date: "2024-02-23",
            time: "16:00",
            experienceLevel: ExperienceLevel.BEGINNER,
            hasBall: true,
            hasNet: true,
            maxPlayers: 8,
            currentPlayers: 8,
            weather: WeatherType.SUNNY,
            temperature: 23,
        },
        {
            id: "10",
            date: "2024-02-23",
            time: "19:30",
            experienceLevel: ExperienceLevel.INTERMEDIATE,
            hasBall: false,
            hasNet: true,
            maxPlayers: 12,
            currentPlayers: 5,
            weather: WeatherType.LIGHT_RAIN,
            temperature: 17,
        }
    ];

    return (
        <>
            <FilterBar />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-12">
                {mockGames.map(game => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </>
    );
}