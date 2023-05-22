export const contactItems = [
  {
    name: "e-mail",
    link: '<a href="mailto:supinski.dev@gmail.com">supinski.dev@gmail.com</a>',
  },
  {
    name: "phone",
    link: "<span>07949694746</span>",
  },
  {
    name: "linkedin",
    link: '<a target="_blank" href="https://www.linkedin.com/in/dominik-supi%C5%84ski-094ba3210/">/dominik-supinski</a>',
  },
  {
    name: "github",
    link: '<a target="_blank" href="https://www.github.com/asztonski/">/asztonski</a>',
  },
];

export const formItems = [
  {
    label: "your name",
    type: "text",
    name: "name",
    id: "name",
    isMultiline: false,
    rows: "",
    maxRows: "",
    helperText: "",
  },
  {
    label: "e-mail",
    type: "email",
    name: "email",
    id: "email",
    isMultiline: false,
    rows: "",
    maxRows: "",
    helperText: "",
  },
  {
    label: "message",
    type: "text",
    name: "message",
    id: "message",
    isMultiline: true,
    rows: 4,
    maxRows: 16,
    helperText: "Message cannot be shorter than 100 characters.",
  },
];
