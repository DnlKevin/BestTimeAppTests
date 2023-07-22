/** Requête pour créer une nouvelle prévision */
require('dotenv').config();
const private_key = process.env.PRIVATE_KEY;

 const params = new URLSearchParams({ 
    'api_key_private': private_key,
    'venue_name': 'Starbucks',
    'venue_address': '107 Av. de France 75013 Paris France'
  });
  
  fetch(`https://besttime.app/api/v1/forecasts?${params}`, {
    method: 'POST'
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de la requête API');
      }
      return response.json(); // Récupérer les données JSON de la réponse
    })
    .then(data => {
      // Le traitement de la réponse de l'API se fait ici
      console.log(data.analysis[0].day_info); // Affiche les données renvoyées par l'API (réponse JSON)
    })
    .catch(error => {
      // En cas d'erreur lors de la requête
      console.error('Erreur lors de la requête API :', error);
    });
  