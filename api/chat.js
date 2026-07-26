export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Méthode non autorisée"
    });
  }

  try {

    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "Message manquant"
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Tu es MKAI, un assistant IA intelligent spécialisé dans l'entrepreneuriat, la création de contenu, le digital et l'intelligence artificielle en Afrique francophone.

Réponds de manière claire, simple et utile.

Question de l'utilisateur :
${message}`
                }
              ]
            }
          ]
        })
      }
    );


    const data = await response.json();


    if (data.error) {
      return res.status(500).json({
        error: data.error.message
      });
    }


    const answer =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Je n'ai pas trouvé de réponse.";


    res.status(200).json({
      reply: answer
    });


  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

}
