import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectInput({
  label,
  title,
  options,
  value,
  setValue,
}: {
  label: string;
  title: string;
  options: string[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  function handleChange(e: string) {
    setValue(e);
  }

  return (
    <Select value={value} onValueChange={handleChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{title}</SelectLabel>
          {options.map((el, i) => (
            <SelectItem key={i} value={`${el}`}>
              {el}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
