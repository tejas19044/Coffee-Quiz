"use client";

import { useState } from "react";
import { questions, personalities, PersonalityType } from "./quizData";

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<PersonalityType[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (personality: PersonalityType) => {
    const newAnswers = [...answers, personality];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateResult = (): PersonalityType => {
    const counts: Record<PersonalityType, number> = {
      adventurer: 0,
      classic: 0,
      creative: 0,
      cozy: 0,
      energizer: 0,
    };

    answers.forEach((answer) => {
      counts[answer]++;
    });

    let maxCount = 0;
    let result: PersonalityType = "classic";

    (Object.keys(counts) as PersonalityType[]).forEach((key) => {
      if (counts[key] > maxCount) {
        maxCount = counts[key];
        result = key;
      }
    });

    return result;
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const question = questions[currentQuestion];
  const result = showResults ? personalities[calculateResult()] : null;

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-center mb-8 text-gray-800">
          Coffee Quiz ☕
        </h1>

        <div className="quiz-card p-8">
          {!showResults ? (
            <>
              {/* Progress Dots */}
              <div className="flex justify-center gap-2 mb-8">
                {questions.map((_, index) => (
                  <div
                    key={index}
                    className={`progress-dot w-3 h-3 rounded-full ${
                      index === currentQuestion
                        ? "bg-purple-600 scale-125"
                        : index < currentQuestion
                        ? "bg-purple-400"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Question */}
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                {question.question}
              </h2>

              {/* Answer Buttons */}
              <div className="flex flex-col gap-3">
                {question.answers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(answer.personality)}
                    className="answer-btn flex items-center gap-4 w-full p-4 text-left rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 border-2 border-transparent hover:border-purple-300"
                  >
                    <span className="text-2xl">{answer.emoji}</span>
                    <span className="text-gray-700 font-semibold">{answer.text}</span>
                  </button>
                ))}
              </div>
            </>
          ) : (
            /* Results Screen */
            <div className="text-center">
              <div className="text-6xl mb-4">{result?.emoji}</div>
              <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
                {result?.title}
              </h2>
              <p className="text-gray-600 mb-6">{result?.description}</p>

              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 mb-6">
                <p className="text-sm text-purple-600 font-semibold uppercase tracking-wide mb-2">
                  Your Perfect Coffee
                </p>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {result?.coffee}
                </h3>
                <p className="text-gray-600 italic">"{result?.tagline}"</p>
              </div>

              <button
                onClick={restartQuiz}
                className="answer-btn px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:from-purple-700 hover:to-pink-700"
              >
                Take Quiz Again
              </button>
            </div>
          )}
        </div>

        {/* Footer Note */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-xs text-gray-600 text-center">
            Built with Claude Code using prompt-based development.
          </p>
        </div>
      </div>
    </div>
  );
}
