import React, { useState } from 'react';

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
    console.log(optionStyle)
    
    return (
        <div onClick={answerListener} className={'m-2 border border-2 p-1 '+optionStyle}>
            {
                option
            }
        </div>
    );
};

export default Option;