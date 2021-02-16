import React from "react";

interface IRadioProps {
  onRadioGroupChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  index: string;
  disabled: boolean;
  id: string;
}
const Radio: React.FunctionComponent<IRadioProps> = ({
  onRadioGroupChange,
  value,
  index,
  disabled,
  id
}) => {
  return (
    <div onChange={onRadioGroupChange}>
      <input
        type="radio"
        value={value}
        name={index}
        disabled={disabled}
        id={id}
      />
      {`id: ${id} name: ${value}`}
    </div>
  );
};

export default Radio;
