import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Header() {
    return (
        <header className="flex items-center justify-between p-4 bg-gray-800 text-gray-200 shadow-md">
            <Link to="/">
                <h1 className="text-2xl font-bold text-yellow-500">Type Rush</h1>
            </Link>
            <nav>
                <Link to="/">
                    <Button
                        variant="ghost"
                        className="mr-2 text-gray-300 hover:text-yellow-500 hover:bg-gray-700"
                    >
                        Home
                    </Button>
                </Link>
                <Link to="/leaderboard">
                    <Button className="text-gray-300 bg-gray-700 hover:bg-gray-600 hover:text-yellow-500">
                        Leaderboard
                    </Button>
                </Link>
            </nav>
        </header>
    );
}