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

    if (!apiKey) {
      return res.status(500).json({
        error: "Clé GEMINI_API_KEY introuvable dans Vercel"
      });
    }


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
                  text: message
                }
              ]
            }
          ]
        })
      }
    );


    const data = await response.json();


    console.log(data);


    if (!response.ok) {
      return res.status(500).json({
        error: JSON.stringify(data)
      });
    }


    res.status(200).json({
      reply:
        data.candidates[0].content.parts[0].text
    });


  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

        }
