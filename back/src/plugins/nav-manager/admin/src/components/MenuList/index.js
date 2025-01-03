import React from 'react';
import PropTypes from 'prop-types';
import { Table, Thead, Tbody, Tr, Td, Th, IconButton } from '@strapi/design-system';
import { Pencil, Trash } from '@strapi/icons';

const MenuList = ({menuItems, onEdit, onDelete}) => {
    return(
        <Table colCount={2} footer={undefined} class="table">
            <Thead>
                <Tr>
                    <Th>Nom du menu</Th>
                    <Th>Actions</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>
                        Label du menu
                    </Td>
                    <Td>
                        <IconButton label="Modifier" icon={<Pencil />} onClick={() => onEdit()}></IconButton>
                        <IconButton label="Supprimer" icon={<Trash />} onClick={() => onDelete()}></IconButton>
                    </Td>
                </Tr>
            </Tbody>
        </Table>
    );
}

export default MenuList;