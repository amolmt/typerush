import { useEffect, useState } from "react";

interface LeaderboardEntry {
    username: string;
    wpm: number;
    accuracy: number;
}

export function Leaderboard() {
    const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);
    useEffect(() => {
        const mockData: LeaderboardEntry[] = [
            { username: "Anant", wpm: 85, accuracy: 96 },
            { username: "Bahadur", wpm: 78, accuracy: 92 },
            { username: "Chinmay", wpm: 72, accuracy: 88 },
            { username: "Drona", wpm: 67, accuracy: 85 },
        ];
        setLeaderboardData(mockData);
    }, []);

    return (
        <div className="p-6 bg-gray-900 text-gray-200 h-[calc(100vh-72px)]">
            <h2 className="mb-6 text-3xl font-bold text-center text-yellow-500">
                Leaderboard
            </h2>
            <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse shadow-lg rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-gray-800 text-gray-200">
                            <th className="p-3 border-b border-gray-700">#</th>
                            <th className="p-3 border-b border-gray-700">Username</th>
                            <th className="p-3 border-b border-gray-700">WPM</th>
                            <th className="p-3 border-b border-gray-700">Accuracy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboardData.map((entry, index) => (
                            <tr
                                key={index}
                                className={`text-center ${index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
                                    } hover:bg-gray-600`}
                            >
                                <td className="p-3 border-b border-gray-700">{index + 1}</td>
                                <td className="p-3 border-b border-gray-700">{entry.username}</td>
                                <td className="p-3 border-b border-gray-700">{entry.wpm}</td>
                                <td className="p-3 border-b border-gray-700">{entry.accuracy}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}