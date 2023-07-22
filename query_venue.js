/** Requête pour lire une prévision sur un lieu */
require('dotenv').config();
const { Client } = require('pg');
const db_pass = process.env.DB_PASSWORD;
const client = new Client({
    user: '',
    host: 'localhost', // ou l'adresse de votre serveur PostgreSQL
    database: 'api_best_time_app',
    password: db_pass,
    port: 5432 // ou le port de votre serveur PostgreSQL
  });
client.connect();

const public_key = process.env.PUBLIC_KEY;

const params = new URLSearchParams({ 
    'api_key_public': public_key,
     'venue_id': 'ven_4d6d48544e707658444b5052636b3579747a5738575f6c4a496843'
 });
 
 fetch(`https://besttime.app/api/v1/forecasts/now?${params}`, {
   method: 'GET'
 }).then(response => {
    if (!response.ok) {
        throw new Error('Erreur lors de la requête API');
      }
      return response.json(); // Récupérer les données JSON de la réponse
    })
    .then(data => {
      // Le traitement de la réponse de l'API se fait ici
      console.log(data); // Affiche les données renvoyées par l'API (réponse JSON)
    })
    .catch(error => {
      // En cas d'erreur lors de la requête
      console.error('Erreur lors de la requête API :', error);
    });
 