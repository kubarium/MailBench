import * as Actions from "../Actions";

import Recipients from "../components/Recipients";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { recipients: state.recipients };
};

const mapDispatchToProps = dispatch => {
  return {
    addRecipient: () => {
      dispatch(Actions.addRecipient());
    },
    updateRecipient: recipient => {
      dispatch(Actions.updateRecipient(recipient));
    },
    deleteRecipient: index => {
      dispatch(Actions.deleteRecipient(index));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipients);
