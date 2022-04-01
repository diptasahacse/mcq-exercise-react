import React from 'react';
import { Card } from 'react-bootstrap';
import Option from '../Option/Option';

const QuestionCard = ({ question, index }) => {
    const { questionName, options , answer} = question;
    return (
        <Card className='m-3'>
            <Card.Body>
                <Card.Title>{index + 1}. {questionName}</Card.Title>
                <div>
                    {
                        options.map((option, index) => <Option key={index} answer={answer} option={option}></Option>)
                    }
                </div>

            </Card.Body>
        </Card>
    );
};

export default QuestionCard;