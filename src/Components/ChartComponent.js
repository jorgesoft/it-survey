import React from 'react';
import Container from 'react-bootstrap/Container';
import { RiQuestionnaireFill } from "react-icons/ri";

const ChartComponent = ({title, chartTitle, chartDescription, chart, question}) => {
   

    return (
        <>
    {/* Question 1 */}
            <Container className='primary-text'>
                <hr className="hr border border-white border-3" />
                <div className='row d-flex'>
                    <p className='title title-size'>{title}</p>
                        <h2 className='white chart-title-size'>{chartTitle}</h2>
                            <div className='col'>
                                <p>{chartDescription}</p>
                            </div>
                            <div className='col'></div>
                </div>
                <hr className="hr border border-white border-1" />
                <div className="d-flex row justify-content-center">
                   {chart}
                </div>
                <div className='y-5 question'><span><RiQuestionnaireFill /> {question}</span></div>
            </Container>

        </>
    )
}

export default ChartComponent;