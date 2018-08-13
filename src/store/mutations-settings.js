const changeEncryption = (state, encryption) => {
    state.settings.mail.encryption = encryption
    state.settings.mail.port = encryption
}

export default {
    changeEncryption
}