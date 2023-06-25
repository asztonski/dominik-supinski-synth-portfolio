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
  const { setIsFocused } = useContext(AppContext);

  const [inputArr, setArrValue] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorArr, setErrorArr] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const [msgCharacters, setMsgCharacters] = useState(0);

  let isValid;

  const onBlurHandler = (e, input) => {
    // Check validation for name input, add error if its invalid
    if (input.name === "name") {
      if (!validateName(e.target.value)) {
        setErrorArr((current) => [input.name, ...current]);
      } else {
        setErrorArr((current) => current.filter((item) => item !== input.name));
      }
    }

    // Check validation for email input, add error if its invalid
    if (input.name === "email") {
      if (!validateEmail(e.target.value)) {
        setErrorArr((current) => [input.name, ...current]);
      } else {
        setErrorArr((current) => current.filter((item) => item !== input.name));
      }
    }

    // Check validation for message input, add error if its invalid
    if (input.name === "message") {
      if (!validateMessage(e.target.value)) {
        setErrorArr((current) => [input.name, ...current]);
      } else {
        setErrorArr((current) => current.filter((item) => item !== input.name));
      }
    }
  };

  const handleInputChange = (e, input) => {
    const { name, value } = e.target;

    if (value.length <= 100) {
      setMsgCharacters(value.length);
    }

    if (name === "name") {
      isValid = validateName(value);
    } else if (name === "email") {
      isValid = validateEmail(value);
    } else if (name === "message") {
      isValid = validateMessage(value);
    }

    setArrValue((prevInputValue) => ({
      ...prevInputValue,
      [name]: value,
    }));

    onBlurHandler(e, input);
  };

  const validateForm = () => {
    const isAllInputsValid =
      validateName(inputArr.name) &&
      validateEmail(inputArr.email) &&
      validateMessage(inputArr.message);
    setIsFormValid(isAllInputsValid);
  };

  useEffect(() => {
    validateForm();
  }, [inputArr]);

  const handleSubmit = (e) => {
    const { name, email, message } = inputArr;
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
          className={errorArr.includes(input.name) ? "error" : ""}
          key={input.id}
          onChange={(e) => handleInputChange(e, input)}
          type={input.type}
          label={input.label}
          name={input.id}
          id={input.id}
          value={inputArr[input.id]}
          multiline={input.isMultiline}
          rows={input.rows}
          onClick={() => setIsFocused(true)}
          onBlur={(e) => (setIsFocused(false), onBlurHandler(e, input))}
          helperText={
            input.name !== "message"
              ? input.helperText
              : `Characters ${msgCharacters} / 100`
          }
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
  gap: 2.5rem;
  width: 100%;
  div {
    position: relative;
    background: transparent !important;
    /* padding-top: 10px; */
    label {
      text-transform: uppercase;
    }
    input {
      text-transform: none;
    }
    p {
      position: absolute;
      bottom: -1.75rem;
      color: ${theme.colors.extra};
      opacity: 0;
      transition: 0.24s ease-in;
      pointer-events: none;
      font-weight: bold;
    }
    /* svg {
      position: absolute;
      right: 3%;
      top: 0;
    } */
  }
  .error {
    p {
      opacity: 1;
    }
  }
  button {
    align-self: flex-start;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    width: 95%;
    margin: auto;
    .error {
      white-space: nowrap;
    }
  }
`;
