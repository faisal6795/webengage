import React, { useRef } from 'react';
import { Wrapper, Text, Selection } from './Card.styles';
import PropTypes from 'prop-types';

function Card(props) {

    const { text, bgColor, dontSelected } = props;
    const inputRef = useRef();

    function changeSelection(event) {
        if (dontSelected) event.stopPropagation();
        else inputRef.current.querySelector('input').checked = true;
    }

    return (
        <Wrapper ref={inputRef} bgColor={bgColor} onClick={changeSelection}>
            <Text>{text}</Text>
            <Selection className={dontSelected ? 'dont-select' : ''} name='points' type='radio' onChange={changeSelection} />
        </Wrapper>
    )
}

Card.propTypes = {
    text: PropTypes.number,
    bgColor: PropTypes.string,
    dontSelected: PropTypes.bool,
}

export default Card;