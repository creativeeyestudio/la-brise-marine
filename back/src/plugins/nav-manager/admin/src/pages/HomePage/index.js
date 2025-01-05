/*
 *
 * HomePage
 *
 */

import React, { useState } from "react";
import MenuList from "../../components/MenuList/index.js";
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
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleOpenDialog = () => {
    setName("");
    setError("");
    setSuccess("");
    setDialogVisible(true);
  };

  const handleCloseDialog = () => {
    setDialogVisible(false);
    setError("");
    setSuccess("");
  };

  const handleSubmit = async () => {
    try {
      if (!name.trim()) {
        setError("Le nom du menu est obligatoire.");
        return;
      }

      const response = await axios.post(
        "/nav-manager/menus",
        {
          name: name.trim(),
          items: [],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setSuccess("Le menu a bien été créé.");
      setError("");
      setTimeout(() => handleCloseDialog(), 1500);
    } catch (error) {
      console.error("Erreur lors de la création du menu :", error);

      if (error.response?.status === 400) {
        setError(
          error.response.data.error.message || "Une erreur est survenue."
        );
      } else {
        setError("Erreur lors de la création du menu.");
      }

      setSuccess("");
    }
  };

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
              required
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
          </DialogBody>
          <DialogFooter
            startAction={
              <Button onClick={handleSubmit} variant="success-light">
                Créer
              </Button>
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
