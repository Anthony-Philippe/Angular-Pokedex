# Projet Angular M1

### Installation
- Décomprésser le fichier zip
- Ouvrir un terminal dans le dossier du projet à la racine
- `npm install` pour installer les dépendances.
- `ng serve` pour lancer le serveur de développement.
- Ouvrir un navigateur et aller à l'adresse `http://localhost:4200/`.

*Le serveur de développement se relance automatiquement à chaque modification du code source.
Il faut avoir nodejs et npm installé pour lancer le projet*

### Auteurs

- Anthony Philippe

### API

Nous avons choisi une API publique: **PokéAPI**

Il s'agit d'une API REST qui permet de récupérer des informations sur les pokémons.

Elle permet de récupérer des informations sur les pokémons notamment les attaques, les types, les capacités, les évolutions, les statistiques etc...

On récupère les données en JSON via des requêtes HTTP en méthode GET.

Lien de l'API: https://pokeapi.co/

### Application

Nous avons créé une application Angular qui permet de récupérer des informations sur les pokémons.

Elle est divisé en 4 pages:

- La page d'accueil qui sert principalement de vitrine, mais il y a aussi un affichage de 3 pokemons aléatoires.
- La page de recherche qui permet de rechercher un pokemon par son nom.
- La page de catégorie qui contient un sélecteur de catégorie et qui affiche ensuite les pokemons de cette catégorie.
- La page About Us qui contient des informations sur nous.

Il y a également une fonction de détails qui permet d'afficher les détails de chaque pokémon en cliquant sur sa carte.

L'application utilise les fonctionnalités d'angular vu en cours tels que les composants, les services, les routes, interfaces...

Nous avons également choisit d'utiliser seulement du css pour le style de l'application.
