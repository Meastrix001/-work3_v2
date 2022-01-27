import { type } from 'os';
import React, { useState } from 'react'
import eye from '../../assets/images/eye.png'
import textFieldStyles from './textField.module.scss'

export interface TextFieldProps {
  type: string
  value?: string
  fieldValue: string
  placeholder?: string
  label: string
  name: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextField = ({ type, fieldValue, placeholder, label, name = "", onChange }: TextFieldProps) => {

  const [ptype, setPtype] = useState(true)
  const [pvalue, setPvalue] = useState("password")
  const viewPassword = () => {
    !ptype ? setPtype(true) : setPtype(false);
    if (ptype) {
      setPvalue('text')
    } else if (!ptype) {
      setPvalue('password')
    }
  }

  if (type === "password") {
    type = pvalue
  }

  const [currentValue, setCurrentValue] = useState(fieldValue);

  return (
    <div className={textFieldStyles.fieldContainer}>
      <section>
        <label>{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          value={currentValue}
          name={name}
          onChange={(e) => {
            if (onChange) onChange(e);
            setCurrentValue(e.currentTarget.value)
          }}
        />
      </section>

      {name === "password" ? <div className={textFieldStyles.eyeContainer}> <img src={eye} onClick={viewPassword} /> </div> : ""}
      {name === "passwordCheck" ? <div className={textFieldStyles.eyeContainer}> <img src={eye} onClick={viewPassword} /> </div> : ""}

    </div>
  )
}