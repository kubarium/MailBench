const changeEncryption = (state, encryption) => {
  state.settings.mail.encryption = encryption;
  state.settings.mail.port = encryption;
};

const addPattern = (state, pattern) => {
  state.settings.patterns.push(pattern);
  state.settings.pattern = "";
};

const removePattern = (state, index) => {
  state.settings.patterns.splice(index, 1);
};

const updateSettings = (state, payload) => {
  console.log(payload);
};

export default {
  changeEncryption,
  addPattern,
  removePattern,
  updateSettings
};
