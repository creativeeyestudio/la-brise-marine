# Utiliser une image légère de Node.js
FROM node:18-alpine

# Définir le dossier de travail dans le conteneur
WORKDIR /app

# Copier uniquement package.json et package-lock.json pour installer les dépendances
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier tout le projet dans le conteneur
COPY . .

# Exposer le port Next.js (3000)
EXPOSE 3000

# Activer le hot-reloading avec Chokidar
ENV CHOKIDAR_USEPOLLING=true

# Commande pour démarrer Next.js en mode développement
CMD ["npm", "run", "dev"]