import { useState } from "react";
import { StatsDisplay } from "./StatsDisplay";

const sampleText =
    "great plan present govern problem there would not own many change might may there day never large hand just do life number should say head these order person during real house again any there group up he develop year early begin";

export function TypingArea() {
    const [input, setInput] = useState("");
    const [startTime, setStartTime] = useState<number | null>(null);
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!startTime) setStartTime(Date.now());
        setInput(e.target.value);
    };

    return (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-72px)] bg-gray-900 text-gray-400 font-mono px-4">
            <div className="text-center mb-6 px-6">
                <p className="mb-4 text-2xl leading-relaxed">
                    {sampleText.split("").map((char, index) => {
                        const isCorrect = input[index] === char;
                        const isActive = index === input.length;
                        const isTyped = index < input.length;

                        return (
                            <span
                                key={index}
                                className={
                                    isActive
                                        ? "text-yellow-500 underline"
                                        : isTyped
                                            ? isCorrect
                                                ? "text-gray-300"
                                                : "text-red-500"
                                            : "text-gray-500"
                                }
                            >
                                {char}
                            </span>
                        );
                    })}
                </p>
            </div>
            <input
                type="text"
                value={input}
                onChange={handleInput}
                className="w-full max-w-4xl p-3 text-xl text-gray-200 bg-gray-800 border-none rounded-md shadow focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Start typing here..."
                autoFocus
            />
            <StatsDisplay input={input} targetText={sampleText} startTime={startTime} />
        </div>
    );
}