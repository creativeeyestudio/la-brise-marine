# Utilise une image Node officielle pour Strapi
FROM node:18-alpine

# Définit le répertoire de travail
WORKDIR /app

# Copie les fichiers package.json et yarn.lock pour installer les dépendances
COPY package.json yarn.lock ./

# Installe les dépendances
RUN yarn install

# Copie tous les fichiers du projet Strapi dans le conteneur
COPY . .

# Expose le port par défaut de Strapi
EXPOSE 1337

# Démarre Strapi
CMD ["yarn", "develop", "--debug"]
