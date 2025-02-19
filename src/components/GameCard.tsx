import { JSX } from "react";
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { Game } from "@/types/game";
import {Cloud, Sun, CloudRain, CloudLightning, Users, Clock, CloudHail} from "lucide-react";
import { ExperienceLevel } from "@/types/experienceLevel.ts";
import { WeatherType } from "@/types/weather.ts";
import { Button } from "@/components/ui/button";

interface GameCardProps {
    game: Game;
}

export function GameCard({ game }: GameCardProps): JSX.Element {
    const formatDate = (dateStr: string) => {
        return new Date(dateStr).toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });
    };

    const getWeatherIcon = () => {
        switch (game.weather) {
            case WeatherType.SUNNY:
                return <Sun className="h-5 w-5 text-yellow-500" />;
            case WeatherType.CLOUDY:
                return <Cloud className="h-5 w-5 text-gray-500" />;
            case WeatherType.LIGHT_RAIN:
                return <CloudHail className="h-5 w-5 text-blue-400" />;
            case WeatherType.HEAVY_RAIN:
                return <CloudRain className="h-5 w-5 text-blue-600" />;
            case WeatherType.THUNDERSTORM:
                return <CloudLightning className="h-5 w-5 text-purple-500" />;
        }
    };

    const getExperienceLevelLabel = () => {
        switch (game.experienceLevel) {
            case ExperienceLevel.BEGINNER:
                return "Beginner";
            case ExperienceLevel.INTERMEDIATE:
                return "Intermediate";
            case ExperienceLevel.ADVANCED:
                return "Advanced";
        }
    };

    const getExperienceLevelColor = () => {
        switch (game.experienceLevel) {
            case ExperienceLevel.BEGINNER:
                return "bg-green-100 text-green-800";
            case ExperienceLevel.INTERMEDIATE:
                return "bg-blue-100 text-blue-800";
            case ExperienceLevel.ADVANCED:
                return "bg-purple-100 text-purple-800";
        }
    };

    return (
        <Card>
            <CardContent className="p-4">
                <div className="flex flex-col gap-3">
                    {/* Top row with date, time, and weather */}
                    <div className="flex justify-between items-start">
                        <div className="flex gap-4">
                            <div className="font-medium">{formatDate(game.date)}</div>
                            <div className="flex items-center gap-1 text-gray-500">
                                <Clock className="h-4 w-4" />
                                <span>{game.time}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            {getWeatherIcon()}
                            <span className="text-sm">{game.temperature}°C</span>
                        </div>
                    </div>

                    {/* Middle row with experience and equipment */}
                    <div className="flex justify-between items-center">
                        <div className={`px-2 py-0.5 rounded-full text-xs ${getExperienceLevelColor()}`}>
                            {getExperienceLevelLabel()}
                        </div>
                        <div className="flex gap-2">
                            {game.hasBall && <span className="text-lg">🏐</span>}
                            {game.hasNet && <span className="text-lg">🥅</span>}
                        </div>
                    </div>

                    {/* Bottom row with players and join button */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1.5">
                            <Users className="h-4 w-4 text-gray-500" />
                            <span className="text-sm text-gray-500">
                                {game.currentPlayers}/{game.maxPlayers}
                            </span>
                        </div>
                        <Button
                            className="w-32"
                            variant={game.currentPlayers >= game.maxPlayers ? "outline" : "default"}
                            disabled={game.currentPlayers >= game.maxPlayers}
                            size="sm"
                        >
                            {game.currentPlayers >= game.maxPlayers ? 'Full' : 'Join'}
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}