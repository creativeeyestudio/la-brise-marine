import {
    Box,
    Checkbox,
    Tab,
    TabGroup,
    Table,
    TabPanel,
    TabPanels,
    Tabs,
    Tbody,
    Td,
    Tr,
} from "@strapi/design-system";
import axios from "axios";
import React, { useEffect, useState } from "react";

const MenuLinks = ({ setSelectedItems }) => {
    const [pages, setPages] = useState([]);
    const [pagesItems, setPagesItems] = useState([]);
    const [activeTab, setActiveTab] = useState(0);

    const token = '979d0b2a6ed133b83344bb83a700a0b7816feb2f739e9a24882154ee7d9c4bde537055ee19aa6c7b157cf1ebfdc3ba18f1cf98dd041ae831d2a53ccb144c540a1de8a9a9ec47247156dab0051ab578a85b8d7c6956ac3040705279fb9f7496e54f07ecfda3e54613fc9943c1e277d67d866c11db5e5e2dd321998806c815930f'; // Remplacez par une variable d'environnement ou une source sécurisée

    const getPagesList = async () => {
        try {
            const response = await axios.get('/api/pages', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setPages(response.data.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des pages :', error);
        }
    };

    const handlePageCheckboxChange = (id) => {
        setPagesItems((prev) =>
            prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
        );
    };

    useEffect(() => {
        const fetchData = async () => {
            await getPagesList();
        };
        fetchData();
    }, []);

    // Appeler la fonction externe avec les items cochés
    useEffect(() => {
        if (setSelectedItems) {
            setSelectedItems({ pages: pagesItems });
        }
    }, [pagesItems, setSelectedItems]);

    return (
        <TabGroup
            label="Liste des liens du site"
            id="menu-links"
            onTabChange={(selected) => setActiveTab(selected)}
        >
            <Tabs>
                <Tab id={undefined} variant={undefined} index={undefined} selectedTabIndex={undefined} onTabClick={undefined}>Pages</Tab>
            </Tabs>

            <TabPanels>
                <TabPanel id={undefined}>
                    <Box padding={4}>
                        <Table colCount={1} footer={undefined}>
                            <Tbody>
                                {pages.map((page) => (
                                    <Tr key={page.id}>
                                        <Td>
                                            <Box padding={2}>
                                                <Checkbox 
                                                    value={pagesItems.includes(page.id)} 
                                                    onValueChange={() => handlePageCheckboxChange(page.id)}
                                                    children={page.attributes.title}></Checkbox>
                                            </Box>
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </Box>
                </TabPanel>
            </TabPanels>
        </TabGroup>
    );
};

export default MenuLinks;
