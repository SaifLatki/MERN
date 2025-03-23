//learing about conditional rendering in react
//conditional rendering is used to render different components based on different conditions

function Login_Signup(props) {
    // const stylingLogin={
    //     color:"green",
    //     backgroundColor:"lightgreen",
    //     padding:"10px",
    //     border:"1px solid green",
    //     borderRadius:"5px"
    // }
    // const stylingSignup={
    //     color:"red",
    //     backgroundColor:"lightcoral",
    //     padding:"10px",
    //     border:"1px solid red",
    //     borderRadius:"5px"
    // }
    // const login=<h1 style={stylingLogin}>Welcome {props.name} you are logged in!</h1>
    // const signup= <h2 style={stylingSignup}>For Sign Up Fill the Form and Then login</h2>

    // return props.clicked ? login : signup;// using ternary operator to render different components based on different conditions
   const std=[
    {id:1,name:'student1',age:23,cgpa:3.5},
    {id:2,name:'student2',age:24,cgpa:1.6},
    {id:3,name:'student3',age:25,cgpa:3.7},
    {id:4,name:'student4',age:26,cgpa:2.0},
    {id:5,name:'student5',age:27,cgpa:3.9},
    {id:6,name:'student6',age:28,cgpa:1.0},
   ]

   const studentList=std.map((student)=>{
         return(
              <div key={student.id}>
                <li>Name: {student.name}</li>
                Age: {student.age}<br/>
                CGPA: {student.cgpa}
              </div>
         )
    })
    const dropedStudent=std.filter((student)=>{
        return student.cgpa<2.0
    })
    const stdlist2=dropedStudent.map((student)=>{
        return(
            <div key={student.id}>
                <h1>{student.name}</h1>
                <p>dropped by {student.cgpa}</p>
            </div>
        )
    })
    const studentprop=std.filter((student)=>{
        return student.cgpa===2.0 || student.cgpa===2.1
    })
    const stdlist3=studentprop.map((student)=>{
        return(
            <div key={student.id}>
                <h1>{student.name}</h1>
                <p>On prop {student.cgpa}</p>
            </div>
        )
    })
    return(
       
        <ol>{studentList}</ol>
        // <div>
        //     {studentList}
        //     {stdlist2} 
        //     {stdlist3}
        // </div>
    )
}
export default Login_Signup