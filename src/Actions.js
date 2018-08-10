export const ADD_RECIPIENT = "addRecipient";
export const UPDATE_RECIPIENT = "updateRecipient";
export const DELETE_RECIPIENT = "deleteRecipient";
export const ADD_VARIABLE = "addVariable";
export const UPDATE_VARIABLE = "updateVariable";

export function addRecipient() {
  return { type: ADD_RECIPIENT, email: "email@domain.com" };
}

export function updateRecipient(recipient) {
  return { type: UPDATE_RECIPIENT, recipient };
}

export function deleteRecipient(index) {
  return { type: DELETE_RECIPIENT, index };
}
