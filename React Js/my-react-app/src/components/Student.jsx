// learning props , propTypes and defaultProps

import propTypes from 'prop-types';

function Student(props) {
    const styling = {
        backgroundColor: 'lightblue',
        color: 'black',
        padding: '10px',
        margin: '10px',
        borderRadius: '10px',
    }
    return(
        <div style={styling}>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>CGPA: {props.cgpa}</p>
            <p>Additional Info: {props.info}</p>
        </div>
    );
}
Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    cgpa: propTypes.number,
    info: propTypes.string,
}
Student.defaultProps={
    name: "Guest",
    age: 0,
    cgpa:0,
    info: "None"
}
export default Student;