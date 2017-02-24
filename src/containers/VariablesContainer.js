import * as Actions from '../Actions'

import Variables from '../components/Variables'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {variables: state.variables}
}

const mapDispatchToProps = (dispatch) => {
    return {
        addVariable: () => {
            dispatch(Actions.addVariable())
        },
        updateVariable: (variable) => {
            dispatch(Actions.updateVariable(variable))
        },
        deleteVariable:(index) => {
            dispatch(Actions.deleteVariable(index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Variables)