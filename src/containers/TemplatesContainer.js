import * as Actions from '../Actions'

import Templates from '../components/Templates'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {templates: state.templates}
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTemplate: () => {
            dispatch(Actions.addTemplate())
        },
        updateTemplate: (template) => {
            dispatch(Actions.updateTemplate(template))
        },
        deleteTemplate: (index) => {
            dispatch(Actions.deleteTemplate(index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Templates)