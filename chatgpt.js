const OpenAI = require("openai");

async function createChat(){
    const openai = new OpenAI({
        apiKey: process.env.API_KEY,
      });
      
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            "role": "user",
            "content": "which is the toughest programming language"
          }
        ],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      return response;
      
}
module.exports=createChat