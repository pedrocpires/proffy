// eslint-disable-next-line no-unused-vars
import React, { SelectHTMLAttributes } from "react";

import "./styles.css";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    tag: string;
  }>;
}

const Select: React.FunctionComponent<SelectProps> = (props) => {
  const { name, label, options, ...rest } = props;
  return (
    <div className="select-block">
      <label htmlFor={name}>
        {label}
        <select defaultValue="" id={name} {...rest}>
          <option value="" disabled hidden>
            Selecione uma opção
          </option>
          {options.map((option) => {
            const { value, tag } = option;
            return (
              <option value={value} key={value}>
                {tag}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
};

export default Select;
