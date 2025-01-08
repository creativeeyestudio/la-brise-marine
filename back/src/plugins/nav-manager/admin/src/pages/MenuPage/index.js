import {
  Button,
  ContentLayout,
  Dialog,
  DialogBody,
  DialogFooter,
  HeaderLayout,
  IconButton,
  Link,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@strapi/design-system";
import { Plus, Trash } from "@strapi/icons";
// @ts-ignore
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pluginId from "../../pluginId";
import MenuLinks from "../../components/MenuLinks";



const MenuPage = () => {
  const { menuId } = useParams();
  const [menu, setMenu] = useState(null);
  const [error, setError] = useState(null);
  const [isDialogVisible, setDialogVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState({ pages: [], posts: [] });

  const handleOpenDialog = () => setDialogVisible(true);
  const handleCloseDialog = () => setDialogVisible(false);

  const handlePostForm = async () => {
    const dataToSend = {
      pages: selectedItems.pages,
      posts: selectedItems.posts,
    };

    console.log(dataToSend);

    handleCloseDialog();
  };

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get(`/nav-manager/menus/${menuId}`);

        if (!response.data?.data)
          throw new Error("Aucune donnée valide reçue de l'API.");

        setMenu(response.data.data);
      } catch (error) {
        setError("Impossible de charger le menu.");
      }
    };

    fetchMenu();
  }, [menuId]);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <>
      <HeaderLayout
        title={`${menu?.name}`}
        subtitle={`Personnalisez le contenu de ce menu`}
        navigationAction={
          <Link to={`/plugins/${pluginId}`}>
            <Button variant="tertiary">Retour</Button>
          </Link>
        }
        primaryAction={
          <Button startIcon={<Plus />} onClick={handleOpenDialog}>
            Ajouter un lien
          </Button>
        }
      />

      <ContentLayout>
        {menu ? (
          <Table colCount={4} footer={undefined}>
            <Thead>
              <Tr>
                <Th action={null}>ID</Th>
                <Th action={null}>Nom</Th>
                <Th action={null}>Type</Th>
                <Th action={null}>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>0</Td>
                <Td>Nom du lien</Td>
                <Td>Page / Post</Td>
                <Td>
                  <IconButton label="Supprimer" icon={<Trash />} />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        ) : (
          <p>Chargement en cours</p>
        )}

        <Dialog
          onClose={undefined}
          title={"Ajouter des liens au menu"}
          isOpen={isDialogVisible}
          id={undefined}
        >
          <DialogBody icon={undefined}>
            <MenuLinks setSelectedItems={setSelectedItems} />
          </DialogBody>
          <DialogFooter
            startAction={
              <Button onClick={handlePostForm} variant="success-light">
                Enregistrer
              </Button>
            }
            endAction={
              <Button onClick={handleCloseDialog} variant="danger-light">
                Fermer
              </Button>
            }
          />
        </Dialog>
      </ContentLayout>
    </>
  );
};

export default MenuPage;
