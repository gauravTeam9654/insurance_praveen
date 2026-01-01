
import { GoogleGenAI } from "@google/genai";

export const getInsuranceAdvice = async (query: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `You are an expert insurance advisor for "InsurePro". 
        Your goal is to provide helpful, concise, and professional advice about insurance. 
        Promote InsurePro's services (Life, Health, Vehicle, Home, Travel, Business).
        Keep responses under 3 sentences unless asked for details.`,
        temperature: 0.7,
      }
    });
    return response.text || "I'm sorry, I couldn't process that. Please contact our live agents for assistance.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our AI Advisor is currently busy. Please feel free to explore our services manually or call us!";
  }
};
