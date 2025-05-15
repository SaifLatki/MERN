import {useFormik} from 'formik';

function SimpleForm() {
    const formik=useFormik({
        initialValues:{
            name:'',
            email:'',
            channel:''
        },
        onSubmit:values =>{
            console.log(values);
            alert('Form submitted successfully');
        }
    });
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
              value={formik.values.name}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
               onChange={formik.handleChange}
              value={formik.values.email}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="channel" className="block text-sm font-medium text-gray-700 mb-1">Channel</label>
            <input
              type="text"
              id="channel"
              name="channel"
               onChange={formik.handleChange}
              value={formik.values.channel}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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
