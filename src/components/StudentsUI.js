import React from 'react'

export default function StudentsUI(props) {

    const list = props.students.map((student, index) => {
        return(
            <div className="student">
                <p>The student n. {index + 1} is {student.name} from {student.country}.</p>
                <button className="btn btn-outline-danger">Remove student</button>
            </div>
        )
    })

    return (
        <div className="studentsUI">
            {list}
        </div>
    )
}
