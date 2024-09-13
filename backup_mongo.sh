#!/bin/bash

# Variables
BACKUP_DIR="/backup"
DATE=$(date +%F)
DB_URI="mongodb://utilisateur:mot_de_passe@localhost"
DB_NAME="nom_base_de_données"
BACKUP_FILE="$BACKUP_DIR/$DB_NAME_$DATE.tar.gz"

# Création du fichier de sauvegarde compressé
mongodump --uri=$DB_URI --db=$DB_NAME --archive=$BACKUP_FILE --gzip

# Suppression des sauvegardes de plus de 30 jours
find $BACKUP_DIR -type f -name "*.tar.gz" -mtime +30 -exec rm {} \;
