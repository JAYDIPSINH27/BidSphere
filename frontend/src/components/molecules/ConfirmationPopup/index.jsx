// Author: Vraj Sunilkumar Shah

import BaseButton from '@atoms/BaseButton';
import React from 'react';

const ConfirmationPopup = ({
  message,
  onConfirm,
  onCancel,
}) => (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <p className="text-lg text-gray-800 mb-4">{message}</p>
      <div className="flex justify-center space-x-4">
        <BaseButton className="bg-green-500 hover:bg-green-700 text-white font-bold" onClick={onConfirm}>
          Confirm
        </BaseButton>
        <BaseButton className="bg-red-500 hover:bg-red-700 text-white font-bold" onClick={onCancel}>
          Cancel
        </BaseButton>
      </div>
    </div>
  </div>
);

export default ConfirmationPopup;
