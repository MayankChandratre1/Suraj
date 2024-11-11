import React, { useState } from 'react'
import './Modal.css'
import { addUser } from '@/../../util/addUser.js';

const Modal = ({close}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [membership, setMembership] = useState('');
  const [error, setError] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, age, email, membership);
        if (!name || !age || !email || !membership) {
            setError('Fill all the fields');
            return;
        }
        addUser(name, age, email, membership);
        setName('');
        setAge('');
        setEmail('');
        setMembership('');
        close();   
    }

    const onChangeName = (e) => {
        const value = e.target.value;
        
        if (!value || !value.match(/^[a-zA-Z\s]*$/)) {
            setError('Enter name correctly');
        }
        setName(e.target.value);
    }
    const onChangeAge = (e) => {
        const value = e.target.value;
        if (!value || !value.match(/^[0-9]*$/)) {
            console.log(value);
            setError('Enter age correctly');
        }
        setAge(e.target.value);
    }
    const onChangeEmail = (e) => {
        const value = e.target.value;
        if (!value || !value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            setError('Enter Email correctly');
        }
        setEmail(e.target.value);
    }
    const onChangeMembership = (e) => {
        const value = e.target.value;
        if (!value || !value.match(/^[a-zA-Z\s]*$/) || value !== 'Basic' || value !== 'Premium' || value !== 'PremiumPlus') {
            setError('Enter membership correctly(Baisc, Premium, PremiumPlus)');
        }
        setMembership(e.target.value);
    }

  return (
    <div className='modal-container'>
        <button className='close-btn' onClick={close}>X</button>
        <h1>Fill Out Details</h1>
        {<p className='error-msg'>{error}</p>}
        <div className='input-container'>
        <input type="text" placeholder="Name" onChange={onChangeName} />
        <input type="number" placeholder="Age" onChange={onChangeAge} />
        <input type="email" placeholder="Email" onChange={onChangeEmail} />
        <input type="text" placeholder="Membership" onChange={onChangeMembership} />
        </div>
        <button className='submit-btn' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Modal