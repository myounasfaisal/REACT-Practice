import React, { useState } from "react";
import Button from "../Button/Button";

export function ControlledForm({ children, onSubmit }) {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {React.Children.map(children, (child) => {
        // Only pass `value` and `onChange` to elements that have a `name` prop
        if (child.props.name) {
          return React.cloneElement(child, {
            value: formData[child.props.name] || "",
            onChange: handleChange,
          });
        }
        return child; // Return the child as-is if it doesn't have a `name` prop
      })}
      <Button type="submit" bgColor="blue" color="white">
        Submit
      </Button>
    </form>
  );
}