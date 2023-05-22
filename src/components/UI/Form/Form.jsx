import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import CustomButton from "../Button/Button";
import { formItems } from "@/api/contact";
import { theme } from "@/api/theme";
import {
  validateName,
  validateEmail,
  validateMessage,
} from "@/helpers/checkValidation";
import { useContext } from "react";
import { AppContext } from "@/api/AppContext";

const Form = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { isFocused, setIsFocused } = useContext(AppContext);

  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    let isValid;

    if (name === "name") {
      isValid = validateName(value);
    } else if (name === "email") {
      isValid = validateEmail(value);
    } else if (name === "message") {
      isValid = validateMessage(value);
    }

    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const isAllInputsValid =
      validateName(inputValue.name) &&
      validateEmail(inputValue.email) &&
      validateMessage(inputValue.message);
    setIsFormValid(isAllInputsValid);
  };

  useEffect(() => {
    validateForm();
  }, [inputValue]);

  useEffect(() => {
    console.log(isFocused);
  }, [isFocused]);

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
          onClick={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          sx={{
            border: `1px solid ${theme.colors.squares}`,
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
      <CustomButton
        disabled={!isFormValid}
        onClick={handleSubmit}
        content="Send message"
      />
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
    label {
      text-transform: uppercase;
    }
    input {
      text-transform: none;
    }
  }
  button {
    align-self: flex-start;
  }
`;
