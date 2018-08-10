import * as ActionTypes from "./Actions";

const reducers = (state, action) => {
  let recipients = [];

  switch (action.type) {
    case ActionTypes.ADD_RECIPIENT:
      return Object.assign(
        {},
        {
          state
        },
        {
          recipients: state.recipients.concat({
            checked: true,
            email: "email@domain.com"
          })
        }
      );
    case ActionTypes.UPDATE_RECIPIENT:
      console.log(state);
      recipients = state.recipients.slice();
      recipients.splice(
        action.recipient.index,
        1,
        Object.assign({}, recipients[action.recipient.index], {
          ...action.recipient
        })
      );

      return Object.assign({}, state, { recipients });
    case ActionTypes.DELETE_RECIPIENT:
      recipients = state.recipients.slice();
      recipients.splice(action.index, 1);

      return Object.assign({}, state, { recipients });
    default:
      return state;
  }
};

export default reducers;
