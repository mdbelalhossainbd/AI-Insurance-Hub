
import { GoogleGenAI } from "@google/genai";

// This is a placeholder for the actual API key which should be set in the environment
const API_KEY = process.env.API_KEY;

// A real implementation would require the API key
// const ai = new GoogleGenAI({ apiKey: API_KEY });

export const getChatbotResponse = async (prompt: string): Promise<string> => {
  console.log('User prompt:', prompt);
  
  // Mock implementation
  return new Promise((resolve) => {
    setTimeout(() => {
      if (prompt.toLowerCase().includes('premium')) {
        resolve("An insurance premium is the amount of money an individual or business pays for an insurance policy. Premiums are typically paid in regular installments, such as monthly or annually.");
      } else if (prompt.toLowerCase().includes('deductible')) {
        resolve("A deductible is the amount of money you have to pay out-of-pocket for a covered claim before your insurance company starts to pay. For example, if you have a $500 deductible, you must pay the first $500 of a covered expense yourself.");
      } else {
        resolve("Thank you for your question. As an AI assistant, I can help with general insurance queries. For personalized advice, please consider connecting with one of our certified agents.");
      }
    }, 1500);
  });

  /*
  // Real Gemini API implementation
  if (!API_KEY) {
    return "API key is not configured. Please set the API_KEY environment variable.";
  }
  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `You are a professional and friendly insurance assistant. Answer the following question concisely and helpfully: "${prompt}"`,
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "I'm sorry, I'm having trouble connecting to my knowledge base. Please try again later.";
  }
  */
};
