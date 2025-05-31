import {useFormik} from 'formik';

const initialValues = {
            name:'',
            age:0,
            email:'',
            // channel:''
        }
const onSubmit = async values => {
  try {
    const response = await fetch('http://localhost:3001/api/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    });

    if (response.ok) {
      const data = await response.json();
      alert('Form submitted successfully!');
      console.log('Server response:', data);
    } else {
      alert('Failed to submit form');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong!');
  }
};

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required';
    }
    if(!values.age){
      errors.age = 'Required'
    }
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    // if (!values.channel) {
    //     errors.channel = 'Required';
    // }
    return errors;
}

function SimpleForm() {
    const formik=useFormik({
        initialValues,
        onSubmit,
        validate
    });

  console.log('Touched fields:', formik.touched);

  function PutData(){


  }
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Simple Form</h1>
        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.name && formik.errors.name ? <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div> : null}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.email && formik.errors.email ? <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div> : null}
          </div>

          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.age}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.age && formik.errors.age ? <div className="text-red-500 text-sm mt-1">{formik.errors.age}</div> : null}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SimpleForm;
