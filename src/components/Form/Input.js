import { useEffect, useRef } from "react";
import { useField } from "@unform/core";

import { TextField } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";


const CustomInput = styled(TextField)({
  marginBottom: "12px",
 
});

export default function Input({ name, label, variant,...rest }) {
  const inputRef = useRef(null);
  const materialInputRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);

 

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
      setValue(ref, value) {
        if(value === undefined){
          ref.value = "";
        }else{
          ref.value = value;
        }
        
        console.log(value)
        materialInputRef.current
          .querySelector("label")
          .classList.add("MuiFormLabel-filled", "MuiInputLabel-shrink");
      }
    })
    
  }, [fieldName, registerField]);


  return (
    
    <CustomInput
    
      inputRef={inputRef} 
      error={!!error}
      ref={materialInputRef}
      helperText={error || null}
      name={fieldName}
      variant={variant}
      label={label}
      InputLabelProps={{ shrink: true }} 
      {...rest}
      
      
    />
    
  );
}