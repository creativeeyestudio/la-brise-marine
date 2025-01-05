/*
 *
 * HomePage
 *
 */

import React, { useState } from "react";
import MenuList from "../../components/MenuList";
import {
  Button,
  ContentLayout,
  Dialog,
  DialogBody,
  DialogFooter,
  HeaderLayout,
  TextInput,
} from "@strapi/design-system";
import { Plus } from "@strapi/icons";
import axios from "axios";

const HomePage = () => {
  const [isDialogVisible, setDialogVisible] = useState(false);
  const handleOpenDialog = () => setDialogVisible(true);
  const handleCloseDialog = () => setDialogVisible(false);

  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async () => {
    console.log(name);
    try {
      const response = await axios.post('/nav-manager/menus', {
        name: name,
        items: [],
      });
      setSuccess("Le menu a bien été crée")
      setTimeout(() => handleCloseDialog(), 2000);
    } catch (error) {
      setError("Erreur lors de la création du menu");
      console.error(error);
    }
    
  }

  return (
    <>
      <HeaderLayout
        title="Menus du site"
        subtitle="Gérez les menus de navigation pour votre site."
        navigationAction={<Button variant="tertiary">Retour</Button>}
        primaryAction={
          <Button startIcon={<Plus />} onClick={handleOpenDialog}>
            Créer un menu
          </Button>
        }
      />
      <ContentLayout>
        <MenuList />

        <Dialog
          onClose={handleCloseDialog}
          title={"Créer un nouveau menu"}
          isOpen={isDialogVisible}
          id={undefined}
        >
          <DialogBody icon={undefined}>
            <TextInput 
              label="Nom du menu" 
              name="navName" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required />
              {error && <p style={{ color: 'red' }}>{error}</p>}
              {success && <p style={{ color: 'green' }}>{success}</p>}
          </DialogBody>
          <DialogFooter
            startAction={
              <Button onClick={handleSubmit} variant="success-light">Créer</Button>
            }
            endAction={
              <Button onClick={handleCloseDialog} variant="danger-light">
                Annuler
              </Button>
            }
          />
        </Dialog>
      </ContentLayout>
    </>
  );
};

export default HomePage;
