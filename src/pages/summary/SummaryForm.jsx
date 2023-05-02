import { Button, Checkbox } from '@mui/material';
import { useState } from 'react';

const SummaryForm = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <Checkbox
        checked={checked}
        onClick={(e) => {
          setChecked(e.target.checked);
        }}
      />
      <Button variant="contained" disabled={!checked}>
        注文する
      </Button>
    </div>
  );
};

export default SummaryForm;
