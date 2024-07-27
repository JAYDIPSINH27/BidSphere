/* Author: Ashish Bhasin */
/* eslint-disable react/prop-types */
import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

export const DateSelector = ({ date = null, onChange = () => {}, label = '' }) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
      className="text-sm bg-white"
      maxDate={dayjs()}
      label={label}
      value={date}
      onChange={onChange}
      sx={{
        width: {
          xs: '100%', // Full width on extra small screens
          sm: '100%',
          md: '300px',
        },
        '& .MuiInputBase-root': {
          height: '40px',
        },
        '& .MuiInputBase-input': {
          padding: '10px 14px',
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: 'rgba(0, 0, 0, 0.23)',
        },
      }}
      slotProps={{
        textField: {
          size: 'small',
          fullWidth: true,
        },
      }}
    />
  </LocalizationProvider>
);
