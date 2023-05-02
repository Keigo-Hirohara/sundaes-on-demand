import { Button, Checkbox, Popover, Typography } from '@mui/material';
import { useState } from 'react';

const SummaryForm = () => {
  const [checked, setChecked] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  return (
    <div>
      <Checkbox
        checked={checked}
        onClick={(e) => {
          setChecked(e.target.checked);
        }}
      />
      <Typography
        id="termsAndConditions"
        aria-owns={open ? 'termsAndConditions' : undefined}
        aria-haspopup="true"
        onMouseEnter={(e) => setAnchorEl(e.currentTarget)}
        onMouseLeave={() => setAnchorEl(null)}
      >
        利用規約
      </Typography>
      <Popover
        open={open}
        id="termsAndConditions"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        disableAutoFocus
      >
        <Typography>注文内容を確認してください</Typography>
      </Popover>
      <Button variant="contained" disabled={!checked}>
        注文する
      </Button>
    </div>
  );
};

export default SummaryForm;
