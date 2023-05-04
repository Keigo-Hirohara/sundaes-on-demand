import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ScoopOption from './ScoopOption';
import { ImageList } from '@mui/material';

const Options = ({ OptionType }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${OptionType}`)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [OptionType]);
  const ItemComponent = OptionType === 'scoops' ? ScoopOption : null;
  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <ImageList>{optionItems}</ImageList>;
};

export default Options;
