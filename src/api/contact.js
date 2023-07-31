export const contactItems = [
  {
    name: "e-mail",
    link: '<a href="mailto:supinski.dev@gmail.com">supinski.dev@gmail.com</a>',
  },
  {
    name: "phone",
    link: "<span>(+44) 07949694746</span>",
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
    label: "name lastname",
    type: "text",
    name: "name",
    id: "name",
    isMultiline: false,
    rows: "",
    maxRows: "",
    helperText: "Please provide correct name and surname",
  },
  {
    label: "e-mail",
    type: "email",
    name: "email",
    id: "email",
    isMultiline: false,
    rows: "",
    maxRows: "",
    helperText: "Please provide correct e-mail address",
  },
  {
    label: "message",
    type: "text",
    name: "message",
    id: "message",
    isMultiline: true,
    rows: 4,
    maxRows: 16,
    helperText: "Ohh C'mon! Message is way too short.",
  },
];
