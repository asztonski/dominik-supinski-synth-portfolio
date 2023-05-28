export const validateName = (name) => {
  const nameRegex = /^[A-Z][-'a-zA-Z]+,?\s[A-Z][-'a-zA-Z]{0,19}$/;
  return nameRegex.test(name);
};

export const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return emailRegex.test(email);
};

export const validateMessage = (message) => {
  return message.length > 100;
};
