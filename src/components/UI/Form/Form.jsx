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
import FormHelperText from "@mui/material";
import CheckIcon from "@/assets/svg/check";
import { Keyframes } from "@emotion/react";

const Form = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { setIsFocused } = useContext(AppContext);

  const [isNameValid, setIsNameValid] = useState(null);
  const [isMailValid, setIsMailValid] = useState(null);
  const [isMessageValid, setIsMessageValid] = useState(null);
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

  // useEffect(() => {
  //   validateName(inputValue.name)
  //     ? setIsNameValid(true)
  //     : setIsNameValid(false);
  //   validateName(inputValue.email)
  //     ? setIsMailValid(true)
  //     : setIsMailValid(false);
  //   validateName(inputValue.message)
  //     ? setIsMessageValid(true)
  //     : setIsMessageValid(false);
  // }, []);

  // useEffect(() => {
  //   validateForm();
  // }, [inputValue]);

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

  // const errorHandler = (element) => {
  //   if (element.helperText && validateMessage(element.target.value)) {
  //     return true;
  //   } else return false;
  // };

  const errorHandler = (input) => {
    if (input.name === "name") {
      if (validateName(inputValue.name)) {
        setIsNameValid(true);
      } else setIsNameValid(false);
    }

    if (input.name === "email") {
      if (validateName(inputValue.email)) {
        setIsMailValid(true);
      } else setIsMailValid(false);
    }

    if (input.name === "message") {
      if (validateName(inputValue.message)) {
        setIsMessageValid(true);
      } else setIsMessageValid(false);
    }
  };

  const errorTextHandler = (input) => {
    const text = "Please provide correct ";
    const result = text + input.name;

    if (input.name === "name" && isNameValid === false) {
      return result;
    }

    if (input.name === "email" && isMailValid === false) {
      return result;
    }

    if (input.name === "message" && isMessageValid === false) {
      return result + " that has minimum 100 characters";
    }

    return false;
  };

  useEffect(() => {
    console.log(isNameValid);
  }, [isNameValid]);

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
          onBlur={() => (setIsFocused(false), errorHandler(input))}
          helperText={errorTextHandler(input)}
          sx={{
            border: `1px solid ${theme.colors.squares}`,
          }}
          InputProps={{
            style: {
              color: `${theme.colors.primary}`,
              fontStyle: "italic",
            },
            // endAdornment: (
            //   <CheckIcon
            //     color={theme.colors.hover}
            //     height="20px"
            //     width="20px"
            //   />
            // ),
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
      bottom: -2rem;
      color: ${theme.colors.extra};
    }
    /* svg {
      position: absolute;
      right: 3%;
      top: 0;
    } */
  }
  button {
    align-self: flex-start;
  }
`;
