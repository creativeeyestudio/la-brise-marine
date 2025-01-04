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

const HomePage = () => {
  const [isDialogVisible, setDialogVisible] = useState(false);
  const handleOpenDialog = () => setDialogVisible(true);
  const handleCloseDialog = () => setDialogVisible(false);

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
            <TextInput label="Nom du menu" name="navName" />
          </DialogBody>
          <DialogFooter
            startAction={
              <Button variant="success-light">Créer</Button>
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
