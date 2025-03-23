function ObjectInComponent() {
 const person={
    name:"Saif",
    age:21,

    them:{
        backgroundColor:"white",
        color:"black",
        padding:"10px",
    }
 };
 return(
    <div style={person.them}>
        {/* <h1>My Name is {person.name}</h1>{/*using default value like given in object that is Saif */}
       {/* <h2>My Age is {person.age}</h2>using default value like given in object that is 21 */}


        <h1>My Name is {'Ahmed'}</h1>{/*we can use our own desaire name */}
        <h2>My Age is {'23'}</h2>{/*we can also use our own age */}

    </div>
 )
}
export default ObjectInComponent;