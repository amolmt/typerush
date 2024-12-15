import { useEffect, useState } from "react";

interface StatsDisplayProps {
    input: string;
    targetText: string;
    startTime: number | null;
}

export function StatsDisplay({ input, targetText, startTime }: StatsDisplayProps) {
    const [wpm, setWpm] = useState(0);
    const [accuracy, setAccuracy] = useState(100);

    useEffect(() => {
        if (!startTime) return;

        const elapsedTime = (Date.now() - startTime) / 60000;
        const correctChars = input.split("").filter((char, i) => char === targetText[i]).length;
        const wordsTyped = input.length / 5;

        setWpm(Math.round(wordsTyped / elapsedTime) || 0);

        const accuracyValue = (correctChars / targetText.length) * 100;
        setAccuracy(Number(accuracyValue.toFixed(2)));
    }, [input, startTime, targetText]);

    return (
        <div className="flex justify-around w-full max-w-3xl p-4 mt-6 bg-gray-800 rounded-lg shadow-md text-gray-200">
            <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold text-yellow-400">Words Per Minute</h3>
                <p className="text-4xl font-bold text-gray-300">{wpm}</p>
            </div>
            <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold text-yellow-400">Accuracy</h3>
                <p className="text-4xl font-bold text-gray-300">{accuracy}%</p>
            </div>
        </div>
    );
}