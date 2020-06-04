import React from "react"

interface InputRowProps {
  label: string
}

export const InputRow: React.FC<InputRowProps> = ({ label, children }) => (
  <div className="pb-4">
    <label htmlFor={label} className="mr-3">
      {label}
    </label>
    {children}
  </div>
)

export default InputRow
