import Select from "react-select";

interface DropdownProps {
  choices: string[];
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  choices,
  placeholder = "Select...",
}): JSX.Element => {
  const options: {}[] = choices.map((choice) => ({
    value: choice,
    label: choice,
  }));
  return (
    <div className="min-w-[150px]">
      <Select options={options} isClearable isMulti placeholder={placeholder} />
    </div>
  );
};

export default Dropdown;
