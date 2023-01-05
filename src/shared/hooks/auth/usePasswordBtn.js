import { useState } from 'react';

export const usePasswordBtn = () => {
    const [passwordBtnType, setPasswordBtnType] = useState('password')

        const handlePasswordBtn = () => {
        setPasswordBtnType(prevState=>  prevState === 'password'? 'text': 'password')
    }

    return {passwordBtnType, handlePasswordBtn}
}