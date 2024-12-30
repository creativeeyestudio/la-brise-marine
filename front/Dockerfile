# Dockerfile

FROM node:18-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /src/app

# Copier uniquement les fichiers nécessaires pour installer les dépendances
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source de l'application (important pour npm run dev)
COPY . .

# Exposer le port utilisé par Next.js
EXPOSE 3000

# Commande par défaut pour démarrer l'application en mode développement
CMD ["npm", "run", "dev"]
