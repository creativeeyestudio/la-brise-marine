import { Button, ContentLayout, HeaderLayout, IconButton, Table, Tbody, Td, Th, Thead, Tr } from "@strapi/design-system"
import { Plus, Trash } from "@strapi/icons";
import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const MenuPage = () => {
    const { menuId } = useParams();
    const [menu, setMenu] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await axios.get(`/nav-manager/menus/${menuId}`);

                if (!response.data?.data) throw new Error("Aucune donnée valide reçue de l'API.");

                setMenu(response.data.data);
            } catch (error) {
                console.error("Erreur lors de la récupération du menu :", error);
                setError("Impossible de charger le menu.");
            }
        }

        fetchMenu();
    }, [menuId]);

    if (error) {
        return <p style={{ color: 'red' }}>{error}</p>
    }

    console.log(menu);

    return(
        <>
            <HeaderLayout 
                title={`${menu?.name}`}
                subtitle={`Personnalisez le contenu de ce menu`}
                navigationAction={<Button variant="tertiary">Retour</Button>}
                primaryAction={<Button startIcon={<Plus />}>Ajouter un lien</Button>}
            />
            
            <ContentLayout>
                {menu ? (
                    <Table colCount={4} footer={undefined}>
                        <Thead>
                            <Tr>
                                <Th>ID</Th>
                                <Th>Nom</Th>
                                <Th>Type</Th>
                                <Th>Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>0</Td>
                                <Td>Nom du lien</Td>
                                <Td>Page / Post</Td>
                                <Td>
                                    <IconButton
                                        label="Supprimer"
                                        icon={<Trash />}
                                    />
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                ) : (<p>Chargement en cours</p>)}
            </ContentLayout>
        </>
    )
}

export default MenuPage;