/*
 *
 * HomePage
 *
 */

import React from "react";
import MenuList from "../../components/MenuList";
import { Button, ContentLayout, HeaderLayout } from "@strapi/design-system";
import { Plus } from "@strapi/icons";

const HomePage = () => {
  return (
    <>
      <HeaderLayout
        title="Menus du site"
        subtitle="Gérez les menus de navigation pour votre site."
        navigationAction={<Button variant="tertiary">Retour</Button>}
        primaryAction={<Button startIcon={<Plus />}>Créer un menu</Button>}
      />
      <ContentLayout>
        <MenuList />
      </ContentLayout>
    </>
  );
};

export default HomePage;
