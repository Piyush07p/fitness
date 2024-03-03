// const { Configuration, OpenAIApi } = require('openai');

// // Create a Configuration object with your API key
// const config = new Configuration({
//   apiKey: process.env.API_KEY
// });

// // Initialize the OpenAIApi with the Configuration object
// const openai = new OpenAIApi(config);

// // Define an async function to run the prompt
// const runPrompt = async () => {
//   const prompt = 'how to treat stomach pain at home';

//   try {
//     // Make API call to generate completion
//     const response = await openai.createCompletion({
//       model: 'text-davinci-003',
//       prompt: prompt,
//       max_tokens: 65,
//       temperature: 1,
//     });

//     // Extract the generated text from the response
//     const aiData = response.data.choices[0].text;
//     console.log(aiData);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

//  module.exports = runPrompt;