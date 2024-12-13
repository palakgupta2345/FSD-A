import React from 'react'
import Marks from './Marks';

const DisplayMarks = () => {
    const students = [
        {m1:85, m2:86, m3:84},
        {m1:87, m2:81, m3:82},
        {m1:88, m2:83, m3:83},
        {m1:82, m2:89, m3:83},
        {m1:83, m2:80, m3:89},
    ];
    return (
    <>
        {students.map((student, index) => (
            <Marks key={index} m1={students.m1} m2={students.m2} m3={students.m3} />
        ))}
    </>
    )
}

export default DisplayMarks;