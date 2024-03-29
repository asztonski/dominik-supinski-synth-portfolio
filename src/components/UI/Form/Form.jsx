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
  const { setIsFocused, stage } = useContext(AppContext);

  const [inputArr, setArrValue] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorArr, setErrorArr] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [timer, setTimer] = useState(null);

  const checkUserTyping = (input) => {
    if (!isTyping) {
      setIsTyping(input);
    }

    clearTimeout(timer);

    setTimer(
      setTimeout(() => {
        setIsTyping(false);
      }, 5000)
    );
  };

  const errorHandler = (e, input) => {
    if (input.name === "name") {
      if (!validateName(e.target.value)) {
        setErrorArr((current) => [input.name, ...current]);
      } else {
        setErrorArr((current) => current.filter((item) => item !== input.name));
      }
    }

    if (input.name === "email") {
      if (!validateEmail(e.target.value)) {
        setErrorArr((current) => [input.name, ...current]);
      } else {
        setErrorArr((current) => current.filter((item) => item !== input.name));
      }
    }

    if (input.name === "message") {
      if (!validateMessage(e.target.value)) {
        setErrorArr((current) => [input.name, ...current]);
      } else {
        setErrorArr((current) => current.filter((item) => item !== input.name));
      }
    }
  };

  // This function is for submit button only, to show errors under the inputs if validation is not correct
  const errorHandlerForAllInputs = () => {
    formItems.forEach((input) => {
      errorHandler({ target: { value: inputArr[input.id] } }, input);
    });
  };

  const handleInputChange = (e, input) => {
    checkUserTyping();
    const { name, value } = e.target;

    if (name === "name") {
      validateName(value);
    } else if (name === "email") {
      validateEmail(value);
    } else if (name === "message") {
      validateMessage(value);
    }

    setArrValue((prevInputValue) => ({
      ...prevInputValue,
      [name]: value,
    }));

    errorHandler(e, input);
  };

  const validateForm = () => {
    const isAllInputsValid =
      validateName(inputArr.name) &&
      validateEmail(inputArr.email) &&
      validateMessage(inputArr.message);

    setIsFormValid(isAllInputsValid);
  };

  const generateMail = () => {
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

  const handleFormSubmit = () => {
    errorHandlerForAllInputs();
    if (isFormValid) {
      generateMail();
    }
  };

  return (
    <FormContainer>
      {formItems.map((input) => (
        <TextField
          className={
            errorArr.includes(input.name) && isTyping !== input.name
              ? "error"
              : ""
          }
          key={input.id}
          onChange={(e) => (handleInputChange(e, input), validateForm())}
          type={input.type}
          label={input.label}
          name={input.id}
          id={input.id}
          value={inputArr[input.id]}
          multiline={input.isMultiline}
          rows={input.rows}
          onClick={() => (setIsFocused(true), checkUserTyping(input.name))}
          onBlur={(e) => (
            setIsFocused(false),
            setIsTyping(false),
            errorHandler(e, input),
          )}
          helperText={input.helperText}
          sx={{
            border: `1px solid ${theme.colors.squares}`,
          }}
          InputProps={{
            style: {
              color: `${theme.colors.primary}`,
              fontStyle: "italic",
            },
            inputProps: {
              tabIndex: stage !== 4 ? -1 : input.tabIndex,
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
        onClick={handleFormSubmit}
        content="Send message"
        tabIndex={stage !== 4 ? -1 : 17}
        isDisabled={!isFormValid}
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
