import React from 'react';
import {
  List,
  Datagrid,
  TextField,
} from 'react-admin';

export const LandingBlockList = props => (
  <List {...props} sort={{field: 'name', order: 'ASC'}}>
    <Datagrid rowClick="edit">
      <TextField source="id"/>
    </Datagrid>
  </List>
);