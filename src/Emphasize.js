import React, {PropTypes} from 'react';

const Emphasize = props => {
    return (
        <span className="emphasize">
            <em>{props.text[0]}</em>{props
                .text
                .substring(1, props.text.length)}</span>

    );
};

Emphasize.propTypes = {
    text: PropTypes.string
};

export default Emphasize;