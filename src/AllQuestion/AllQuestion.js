import axios from 'axios';
import React, { useEffect, useState } from 'react';
import QuestionCard from '../QuestionCard/QuestionCard';

const AllQuestion = () => {
    const [allQuestion, setAllQuestion] = useState([])
    useEffect(() => {
        axios.get('allQuestion.json')
            .then(data => setAllQuestion(data.data))
    }, [])
    
    
    return (
        <div>
            <h1>All Questions</h1>
            <div>
                {
                    allQuestion.map((question, index) => <QuestionCard index={index} question={question} key={index}></QuestionCard>)
                }
            </div>
            <div>
                <h4 className='text-center'>Total Questions : {allQuestion.length}</h4>
            </div>

        </div>
    );
};

export default AllQuestion;