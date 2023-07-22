/** Requête pour récupérer ses keys, le nombre de crédit restant... */

require('dotenv').config();

private_key = process.env.PRIVATE_KEY;
fetch(`https://besttime.app/api/v1/keys/${private_key}`, {
  method: 'GET'
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur lors de la requête API');
    }
    return response.json();
  })
  .then(data => {
    // Le traitement de la réponse de l'API se fait ici
    console.log(data); // Affiche les données renvoyées par l'API (réponse JSON)
  })
  .catch(error => {
    // En cas d'erreur lors de la requête
    console.error('Erreur lors de la requête API :', error);
  });
