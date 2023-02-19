import React from 'react';
import Questions from "./Questions"
const QuestionsList = ({questionsList}) => {
    return (
        <div>
            {questionsList.map((question)=>(
                <Questions question={question} key={question.id}/>
            ))}
        </div>
    );
};

export default QuestionsList;