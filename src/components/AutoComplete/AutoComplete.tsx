import React, { useState, ChangeEvent, ReactElement } from "react";
import Input, { InputProps } from "../Input/Input";
import Icon from '../Icon'

interface DataSourceObject {
  value: string;
}

export type DataSourceType<T = {}> = T & DataSourceObject;

export interface AutoCompleteProps extends Omit<InputProps, "onSelect"> {
  fetchSuggestions: (
    keyword: string
  ) => DataSourceType[] | Promise<DataSourceType[]>;
  onSelect: (item: DataSourceType) => void;
  renderOption?: (item: DataSourceType) => ReactElement;
}

export const AutoComplete: React.FC<AutoCompleteProps> = ({
  fetchSuggestions,
  onSelect,
  renderOption,
  value,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([]);
  const [loading, setLoading] = useState(false);
  const handlechange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setInputValue(value);
    if (value) {
      const res = fetchSuggestions(value);
      if (res instanceof Promise) {
        setLoading(true);
        res.then((data) => {
          setLoading(false);
          setSuggestions(data);
        });
      } else {
        setSuggestions(res);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value);
    setSuggestions([]);
    if (onSelect) {
      onSelect(item);
    }
  };
  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value;
  };
  const generateDropdown = () => {
    return (
      <ul>
        {suggestions.map((item, index) => {
          return (
            <li key={index} onClick={() => handleSelect(item)}>
              {renderTemplate(item)}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="lv-auto-complete">
      <Input value={inputValue} onChange={handlechange} {...props} />
      { loading && <Icon icon='spinner' spin/> }
      {suggestions.length > 0 && generateDropdown()}
    </div>
  );
};

export default AutoComplete;
