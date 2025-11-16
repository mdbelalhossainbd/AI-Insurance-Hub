import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../constants';
import type { QuizQuestion } from '../types';
import Button from './ui/Button';
import Card from './ui/Card';

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answerStatus, setAnswerStatus] = useState<'correct' | 'incorrect' | null>(null);

  const currentQuestion: QuizQuestion = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleAnswerSelect = (option: string) => {
    if (answerStatus) return;
    setSelectedAnswer(option);
    if (option === currentQuestion.correctAnswer) {
      setAnswerStatus('correct');
      setScore(prev => prev + 10);
    } else {
      setAnswerStatus('incorrect');
    }
  };

  const handleNext = () => {
    setAnswerStatus(null);
    setSelectedAnswer(null);
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setAnswerStatus(null);
  };
  
  const getButtonClass = (option: string) => {
    if (!answerStatus) {
      return selectedAnswer === option ? 'bg-[#D2FF28] ring-2 ring-[#D2FF28]' : 'bg-gray-100 hover:bg-gray-200';
    }
    if (option === currentQuestion.correctAnswer) {
      return 'bg-green-500 text-white';
    }
    if (option === selectedAnswer) {
      return 'bg-red-500 text-white';
    }
    return 'bg-gray-100 cursor-not-allowed';
  };

  return (
    <section id="quiz" className="py-16 md:py-24 bg-[#F9F9F9] scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Test Your Insurance Knowledge!</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mt-4">Take our daily quiz to earn points and learn something new.</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card>
            {showResult ? (
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Quiz Complete!</h3>
                <p className="text-lg text-gray-700 mb-2">Your Final Score:</p>
                <p className="text-6xl font-extrabold text-[#D2FF28] mb-8">{score}</p>
                <Button onClick={restartQuiz}>Play Again</Button>
              </div>
            ) : (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-sm text-gray-500">Question {currentQuestionIndex + 1} of {QUIZ_QUESTIONS.length}</p>
                  <p className="text-lg font-bold">Score: {score}</p>
                </div>
                <h3 className="text-xl font-semibold mb-6">{currentQuestion.question}</h3>
                <div className="space-y-4">
                  {currentQuestion.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswerSelect(option)}
                      disabled={!!answerStatus}
                      className={`w-full text-left p-4 rounded-lg transition ${getButtonClass(option)}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                {answerStatus && (
                   <div className="mt-6 text-center">
                     <p className={`font-bold ${answerStatus === 'correct' ? 'text-green-600' : 'text-red-600'}`}>
                        {answerStatus === 'correct' ? 'Correct!' : 'Incorrect!'}
                    </p>
                    {currentQuestion.sponsored && currentQuestion.tip && (
                      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-700">
                        <strong>Sponsored Tip:</strong> {currentQuestion.tip}
                      </div>
                    )}
                    <Button onClick={handleNext} className="mt-4">
                      {currentQuestionIndex < QUIZ_QUESTIONS.length - 1 ? 'Next Question' : 'Finish Quiz'}
                    </Button>
                   </div>
                )}
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Quiz;