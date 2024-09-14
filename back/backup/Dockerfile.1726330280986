# Étape 1 : Utiliser une image Node.js officielle
FROM node:20-alpine

# Définir le répertoire de travail à l'intérieur du conteneur
WORKDIR /srv/app

# Copier les fichiers package.json et yarn.lock (ou package-lock.json si tu utilises npm)
COPY package.json yarn.lock ./

# Installer les dépendances
RUN yarn install --production

# Copier tout le reste du projet Strapi dans le conteneur
COPY . .

# Construire l'application Strapi (cela prend en compte les plugins, etc.)
RUN yarn build

# Exposer le port par défaut de Strapi
EXPOSE 1337

# Démarrer Strapi
CMD ["yarn", "start"]
