import validator from "email-validator";

const changeEncryption = (state, encryption) => {
  state.settings.mail.encryption = encryption;
  state.settings.mail.port = encryption;
};

const addPattern = (state, pattern) => {
  state
    .settings
    .patterns
    .push(pattern);
  state.settings.pattern = "";
};

const removePattern = (state, index) => {
  state
    .settings
    .patterns
    .splice(index, 1);
};

const addRecipient = (state, recipient) => {
  if (validator.validate(recipient)) {
    state
      .settings
      .recipients
      .push(recipient);
    state.settings.recipient = "";
  }
};

const removeRecipient = (state, index) => {
  state
    .settings
    .recipients
    .splice(index, 1);
};

const updateSettings = (state, payload) => {
  console.log(payload);
};

export default {
  changeEncryption,
  addPattern,
  removePattern,
  addRecipient,
  removeRecipient,
  updateSettings
};
