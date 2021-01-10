import React, { useState } from 'react'
import { FormContainer, InputField } from '../styles/styles'

interface InputFieldProps {
    type: string
    label: string
    name: string
    value: string
    onChange(name: string, value: string): void
}

const Input = ({ type, label, name, value, onChange}: InputFieldProps) => {

	return (
		<FormContainer>
			<label>{label}</label>
			<InputField
					type={type}
					value={value}
					onChange={e => onChange(name, e.target.value)}>
			</InputField>
		</FormContainer>
	)
}

export default Input