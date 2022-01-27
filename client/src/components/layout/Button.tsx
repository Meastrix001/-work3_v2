import { ValueNode } from 'graphql'
import React, { useState, MouseEvent, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import Styles from './button.module.scss'
export interface ButtonProps {
  type: "submit" | "button" | "reset" | undefined;
  disabled: boolean;
  content: string;
  linkTo: string;
  onClick?: (e: MouseEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>) => void | void[];
  formAction?: string;
}

export const Button = ({ type, content, linkTo, formAction, disabled = false, onClick }: ButtonProps) => {

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={Styles.button}
      formAction={formAction}
    >
      {linkTo ?
        <a href={linkTo}> <p>{content}</p> </a> : <p>{content}</p>}

    </button>
  )
}