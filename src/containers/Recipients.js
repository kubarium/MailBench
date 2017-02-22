import * as ActionTypes from '../Actions'

import Recipients from '../components/Recipients'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {recipients: state.recipients}
}

const mapDispatchToProps = (dispatch) => {
    return {
        addRecipient: () => {
            dispatch(ActionTypes.addRecipient())
        },
        updateRecipient: (recipient) => {
            dispatch(ActionTypes.updateRecipient(recipient))
        },
        deleteRecipient: (index) => {
            dispatch(ActionTypes.deleteRecipient(index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipients)