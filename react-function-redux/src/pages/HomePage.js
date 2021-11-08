import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import HobbyList from '../components/Home/HobbyList/index';
import casual from 'casual-browserify'
import {addNewHobby,setActiveHobby} from '../action/hobby';

HomePage.propTypes = {
    
};

function HomePage(props) {
    const hobbylists = useSelector(state => state.hobby.list);
    const selectedId = useSelector(state => state.hobby.selectedId);
    const dispatch = useDispatch();
    console.log(hobbylists);
    function handelRandom(e) {
        e.preventDefault();
        const newHobbylist = { 
            id : casual.uuid,
            title : casual.title
        };
       
        const action = addNewHobby(newHobbylist);
        dispatch(action);
    }
    function handelHobbyClick(hobby) {
        console.log(hobby);
        const action = setActiveHobby(hobby);
        dispatch(action);
    }
    return (
        <div>
            <h1>Redux-Hook Home Page</h1>
            <button onClick={handelRandom}>Random List</button>
            <HobbyList hobbylists={hobbylists} selectedId={selectedId} onHobbyClick = {handelHobbyClick} />
        </div>
    );
}

export default HomePage;