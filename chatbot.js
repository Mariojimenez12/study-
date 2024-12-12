const { OpenAIApi } = require("openai");
require("dotenv").config(); // Carga variables del archivo .env

// Configuración de OpenAI
const openai = new OpenAIApi({
  apiKey: process.env.OPENAI_API_KEY, // Asegúrate de que el archivo .env tiene la clave correcta
});

// Función principal del chatbot
async function askChatGPT() {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo", // Cambia a gpt-4 si tienes acceso
      messages: [{ role: "user", content: "Hola, ¿cómo estás?" }],
    });

    console.log(response.data.choices[0].message.content); // Respuesta del chatbot
  } catch (error) {
    console.error("Error al interactuar con la API de OpenAI:", error.response?.data || error.message);
  }
}

askChatGPT();
