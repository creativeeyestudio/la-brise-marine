import { Box, Checkbox, Tab, TabGroup, Table, TabPanel, TabPanels, Tabs, Tbody, Td, Th, Thead, Tr, Typography } from "@strapi/design-system"
import React, { useState } from "react"

const MenuLinks = () => {
    const [activeTab, setActiveTab] = useState(0);

    return(
        <>
            <TabGroup label="Liste des liens du site" id="menu-links" onTabChange={(selected) => setActiveTab(selected)}>
                <Tabs>
                    <Tab id={undefined} variant={'simple'} index={0} selectedTabIndex={undefined} onTabClick={undefined}>Pages</Tab>
                    <Tab id={undefined} variant={'simple'} index={1} selectedTabIndex={undefined} onTabClick={undefined}>Posts</Tab>
                </Tabs>
                <TabPanels>
                    <TabPanel id='pages'>
                        <Box padding={4}>
                            <Table colCount={1} footer={undefined}>
                                <Tbody>
                                    <Tr>
                                        <Td>
                                            <Box padding={2}>
                                                <Checkbox>Nom de la page</Checkbox>
                                            </Box>
                                        </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </Box>
                    </TabPanel>
                    <TabPanel id='posts'>
                        <Box padding={4}>
                            <Table colCount={1} footer={undefined}>
                                <Tbody>
                                    <Tr>
                                        <Td>
                                            <Box padding={2}>
                                                <Checkbox>Nom du post</Checkbox>
                                            </Box>
                                        </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </Box>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </>
    )
}

export default MenuLinks;