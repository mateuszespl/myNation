import React from "react";
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  MenuItem,
  TextField,
} from "@material-ui/core";

interface SelectInterface {
  checkbox?: boolean;
  data: { text: string; value: string }[];
  checked: string;
  name: string;
  handleChange: any;
}

export const Select: React.FC<SelectInterface> = ({
  checkbox,
  data,
  checked,
  name,
  handleChange,
}) => {
  return (
    <>
      {checkbox ? (
        <FormControl component="fieldset">
          <FormLabel component="legend">{name}</FormLabel>
          <FormGroup>
            {data.map(({ text, value }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked === value}
                    onChange={handleChange}
                    value={value}
                  />
                }
                label={text}
              />
            ))}
          </FormGroup>
        </FormControl>
      ) : (
        <TextField
          id="select"
          label={name}
          value={checked}
          onChange={handleChange}
          select
          variant="outlined"
          size="small"
        >
          {data.map(({ value, text }) => (
            <MenuItem key={value} value={value}>
              {text}
            </MenuItem>
          ))}
        </TextField>
      )}
    </>
  );
};
