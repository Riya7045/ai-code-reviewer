require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
 // Ensure dotenv is loaded

async function generateContent(prompt) {
    try {
        const apiKey = process.env.GOOGLE_GEMINI_KEY;
        if (!apiKey) {
            throw new Error("API key is missing in environment variables.");
        }
        console.log("Using API Key:", apiKey); // Debugging

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            systemInstruction:`
            
            you are an code reviewer,who have an experties in development.
            you look for the code and find the problems and suggest the solution to
            the developer.   
            
            you always try to find the best solution for the developer and also try
            to make the code more efficient and clean.
            `


            }); // Ensure correct model

        const result = await model.generateContent(prompt);
        if (!result || !result.response) {
            throw new Error("Invalid API response format.");
        }

        return result.response.text();
    } catch (error) {
        console.error("Error in generateContent:", error.message);
        return `Error: ${error.message}`;
    }
}

module.exports = generateContent;
