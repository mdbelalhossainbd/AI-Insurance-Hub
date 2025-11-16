
import type { NavLink, QuizQuestion } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Get a Quote', href: '#quote' },
  { name: 'AI FAQ Chatbot', href: '#faq' },
  { name: 'Savings Calculator', href: '#calculator' },
  { name: 'Daily Quiz', href: '#quiz' },
  { name: 'Global Insights', href: 'insights' },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: 'What does "premium" mean in insurance terms?',
    options: ['The maximum amount an insurer will pay', 'The regular payment to keep a policy active', 'A bonus for no claims', 'The initial sign-up fee'],
    correctAnswer: 'The regular payment to keep a policy active',
  },
  {
    question: 'Which type of insurance is designed to cover your car?',
    options: ['Health Insurance', 'Life Insurance', 'Vehicle Insurance', 'Home Insurance'],
    correctAnswer: 'Vehicle Insurance',
  },
  {
    question: 'What is a "deductible"?',
    options: ['The amount you pay before your insurance plan starts to pay', 'A discount on your premium', 'The total coverage amount', 'A fee for late payments'],
    correctAnswer: 'The amount you pay before your insurance plan starts to pay',
  },
  {
    question: 'Which of these factors typically affects life insurance premiums the most?',
    options: ['Your favorite color', 'Your profession', 'Your age and health', 'Your car model'],
    correctAnswer: 'Your age and health',
    sponsored: true,
    tip: 'Tip: Maintaining a healthy lifestyle can significantly lower your life insurance premiums. Contact our agents to learn more!',
  },
];