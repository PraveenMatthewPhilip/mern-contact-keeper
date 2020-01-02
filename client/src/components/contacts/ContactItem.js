import React from 'react';

const ContactItem = ({contact}) =>{
    const {id, name, email, phone, type} = contact;
    return(
    <div className="card mt-3 p-1" style={{"minWidth": 150}}>
<h3 className="card-title text-left">{name}{' '}
<span className={'badge '+ (type === 'professional' ? 'badge-success' : 'badge-primary')}>{type}</span></h3>
    </div>);

}

export default ContactItem;