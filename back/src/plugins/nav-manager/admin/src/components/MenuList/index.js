import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  IconButton,
  Link,
  Flex,
} from "@strapi/design-system";
import { Pencil, Trash } from "@strapi/icons";
import axios from "axios";
import pluginId from "../../pluginId";

const MenuList = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState(null);

  const onEdit = () => {};

  const onDelete = async (id) => {
    try {
      const response = await axios.delete("/nav-manager/menus/" + id);
      fetchMenus();
    } catch (error) {
      console.error("Erreur lors de la suppression du menu :", error);
      setError("Impossible de supprimer le menu.");
    }
  };

  const fetchMenus = async () => {
    try {
      const response = await axios.get("/nav-manager/menus", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMenuItems(response.data.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des menus :", error);
      setError("Impossible de charger les menus.");
    }
  };

  useEffect(() => {
    fetchMenus();
  }, []);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <Table colCount={3} footer={undefined}>
      <Thead>
        <Tr>
          <Th action={undefined}>ID</Th>
          <Th action={undefined}>Nom du menu</Th>
          <Th action={undefined}>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {menuItems.length === 0 ? (
          <Tr>
            <Td colSpan={3} style={{ textAlign: "center" }}>
              Aucun menu trouvé.
            </Td>
          </Tr>
        ) : (
          menuItems.map((menu) => (
            <Tr key={menu.id}>
              <Td>{menu.id}</Td>
              <Td>{menu.name}</Td>
              <Td>
                <Flex>
                  <Link to={`/plugins/${pluginId}/menu/${menu.id}`}>
                    <IconButton
                      label="Modifier"
                      icon={<Pencil />}
                      onClick={() => onEdit()}
                    />
                  </Link>
                  
                  <IconButton
                    label="Supprimer"
                    icon={<Trash />}
                    onClick={() => onDelete(menu.id)}
                  />  
                </Flex>
              </Td>
            </Tr>
          ))
        )}
      </Tbody>
    </Table>
  );
};

export default MenuList;
