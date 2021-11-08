import React from 'react';
import PropTypes from 'prop-types';
import './Hobbylist.css';

HobbyList.propTypes = {
    hobbylists: PropTypes.array,
    selectedId :PropTypes.string,
    onHobbyClick : PropTypes.func,
};
HobbyList.defaultProps = {
    hobbylists : [],
    selectedId : null,
    onHobbyClick : null
}

function HobbyList(props) {
    const {hobbylists,selectedId,onHobbyClick} = props;
    function handleClick(hobby) {
        if(!onHobbyClick) return;
        onHobbyClick(hobby);
    }
    return (
        <div>
            <ul className="hobby-list">
                {hobbylists.map((hobbylist,index) =>(
                    <li 
                        key={hobbylist.id}
                        className = {hobbylist.id === selectedId ? 'active' : ''}
                        onClick = {() => handleClick(hobbylist)}
                    >
                        {hobbylist.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HobbyList;