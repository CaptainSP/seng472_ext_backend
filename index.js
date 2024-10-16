"use strict";
const OpenAI = require("openai");
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const openAi = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_API_BASE_URL,
});

const app = express();
app.use(express.json());

app.post("/chat", async (req, res) => {
  const { messages } = req.body;
  let aiResponse = await openAi.chat.completions.create({
    model: "gpt-4o",
    messages,
    temperature: 0.2,
    response_format: { type: "json_object" },
  });
  res.json(aiResponse);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
