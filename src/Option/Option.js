import React, { useState } from 'react';
import './Option.css'
const Option = ({ option, answer }) => {
    const [optionStyle,setOptionStyle] =  useState('')
    
    const answerListener = (event)=>{
        const inputAns = event.target.innerText;
        const correctAns = answer;
        if(inputAns === correctAns){
            setOptionStyle('border-primary');
        }
        else{
            setOptionStyle('border-danger');

        }

    }
    
    
    return (
        <div onClick={answerListener} className={'m-2 border border-2 p-1 single-option '+optionStyle}>
            {
                option
            }
        </div>
    );
};

export default Option;