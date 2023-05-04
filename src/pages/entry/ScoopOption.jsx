import { ImageListItem } from '@mui/material';
import React from 'react';

const ScoopOption = ({ name, imagePath }) => {
  return (
    <ImageListItem>
      <img src={`http://localhost:3030/${imagePath}`} alt={`${name} scoop`} />
    </ImageListItem>
  );
};

export default ScoopOption;
