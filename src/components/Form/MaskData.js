import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import React from "react";
import MaskedInput from "react-text-mask";

import { useEffect, useRef } from "react";
import { useField } from "@unform/core";


function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired
};

export default function FormattedInputs({ name, label, variant,...rest }) {
    const inputRef = useRef(null);
    const materialInputRef = useRef(null);
    const { fieldName, registerField, error } = useField(name);

    useEffect(() => {
        registerField({
          name: fieldName,
          ref: inputRef.current,
          path: "value",
          setValue(ref, value) {
            ref.value = value;
    
            materialInputRef.current
              .querySelector("label")
              .classList.add("MuiFormLabel-filled", "MuiInputLabel-shrink");
          }
        })
        
      }, [fieldName, registerField]);


  const [values, setValues] = React.useState({
    textmask: null
  });

  const handleChange = name => event => {
    setValues({
      ...values,
      [name]: event.target.value
    });
  };

  return (
    
      <TextField
        inputRef={inputRef} 
        error={!!error}
        ref={materialInputRef}
        helperText={error || null}
        name={fieldName}
        variant={variant}
        label={label}
        

        onChange={handleChange("textmask")}

        InputProps={{
          inputComponent: TextMaskCustom
        }}
        fullWidth
        
      />
    
  );
}
