import React, {useReducer} from'react';

import uuid from 'uuid';

import contactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = { contacts : [
        {id: 1,
        name: 'Jonh',
    email: 'mail@mail',
phone: '222-222-22-2',
type: 'personal'},
{id: 2,
    name: 'Jon',
email: 'mail@',
phone: '222-222',
type: 'personal'},
{id: 3,
    name: 'Jo',
email: 'mail',
phone: '222',
type: 'professional'}
    ]
}

const [state, dispatch] = useReducer(contactReducer, initialState)


//Add Contact

//Delete Contact

//Set Current COLntacty

//Clear current Contact

//update the contact

//Filter contacts

//Clear Filter



return(
    <contactContext.Provider value={{
        contacts: state.contacts
    }}>
        {props.children}
    </contactContext.Provider>
)

}


export default ContactState;