#!/bin/bash

# Variables
BACKUP_DIR="/backup"
DATE=$(date +%F)
DB_USER="utilisateur"
DB_NAME="nom_base_de_données"
HOST="localhost"
BACKUP_FILE="$BACKUP_DIR/$DB_NAME_$DATE.dump.gz"

# Création du fichier de sauvegarde compressé
pg_dump -U $DB_USER -h $HOST -F c $DB_NAME | gzip > $BACKUP_FILE

# Suppression des sauvegardes de plus de 30 jours
find $BACKUP_DIR -type f -name "*.dump.gz" -mtime +30 -exec rm {} \;
