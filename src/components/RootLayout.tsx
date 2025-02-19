import { CalendarDays, User, Volleyball } from "lucide-react";
import { Outlet, useNavigate, useLocation } from 'react-router';

export function RootLayout() {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <div className="min-h-screen bg-background px-6 pt-6">
            {/* Main content */}
            <main className="container">
                <Outlet />
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 border-t bg-background flex justify-between text-gray-600 px-8 py-4">
                <button
                    className={`flex flex-col items-center gap-y-0.5 ${
                        isActive('/') ? 'text-orange-600' : 'text-gray-600'
                    }`}
                    onClick={() => navigate('/')}
                >
                    <Volleyball className="h-5 w-5" />
                    <p className="text-sm">All Games</p>
                </button>
                <button
                    className={`flex flex-col items-center gap-y-0.5 ${
                        isActive('/my-games') ? 'text-primary' : 'text-gray-600'
                    }`}
                    onClick={() => navigate('/my-games')}
                >
                    <CalendarDays className="h-5 w-5" />
                    <p className="text-sm">My Games</p>
                </button>
                <button
                    className={`flex flex-col items-center gap-y-0.5 ${
                        isActive('/profile') ? 'text-primary' : 'text-gray-600'
                    }`}
                    onClick={() => navigate('/profile')}
                >
                    <User className="h-5 w-5" />
                    <p className="text-sm">Profile</p>
                </button>
            </nav>
        </div>
    );
}