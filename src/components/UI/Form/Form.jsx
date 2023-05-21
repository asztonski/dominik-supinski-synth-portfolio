import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { useState } from "react";
import CustomButton from "../Button/Button";
import { formItems } from "@/api/contact";
import { theme } from "@/api/theme";

const Form = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    const { name, email, message } = inputValue;
    const dataArr = [
      `Message from:\n\nName: ${name}\n\n\nEmail: ${email}\n\n\nMessage: ${message}\n\n\n\n\n\n`,
    ];
    const subject = encodeURIComponent(
      "Contact Form Submission from Portfolio"
    );
    const body = encodeURIComponent(dataArr);
    const mailtoLink = `mailto:supinski.dev@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  const isDisabled = Object.values(inputValue).some(
    (value) => value.trim() === ""
  );

  return (
    <FormContainer>
      {formItems.map((input) => (
        <TextField
          className="text-field"
          key={input.id}
          onChange={handleInputChange}
          type={input.type}
          label={input.label}
          name={input.id}
          id={input.id}
          value={inputValue[input.id]}
          multiline={input.isMultiline}
          rows={input.rows}
          maxRows={input.maxRows}
          sx={{
            border: `1px solid ${theme.colors.squares}`,
            textTransform: "uppercase",
          }}
          InputProps={{
            style: {
              color: `${theme.colors.primary}`,
              fontStyle: "italic",
            },
          }}
          InputLabelProps={{
            style: {
              color: `${theme.colors.primary}`,
            },
          }}
        />
      ))}
      <CustomButton disabled onClick={handleSubmit} content="Send message" />
    </FormContainer>
  );
};

export default Form;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  div {
    background: transparent !important;
    &:last-of-type {
      input {
        text-transform: none !important;
      }
    }
  }
  button {
    align-self: flex-start;
  }
`;
