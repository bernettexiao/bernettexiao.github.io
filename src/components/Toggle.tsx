import React from 'react';
import { Form } from 'react-bootstrap';

interface ToggleSwitchProps {
  onToggle: (sortByYear: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ onToggle }) => {
  return (
    <Form.Check 
      type="switch"
      id="sort-toggle"
      label="Sort by Year"
      onChange={(e) => onToggle(e.target.checked)}
    />
  );
};

export default ToggleSwitch;
