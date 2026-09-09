import { Link } from "react-router-dom";

const Register = () => (
  <section className="mx-auto max-w-md px-4 py-16 lg:px-6">
    <h1 className="text-3xl font-black text-gray-900">Create your account</h1>
    <form className="mt-8 space-y-5">
      <label className="block text-sm font-semibold text-gray-700">Name<input className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" type="text" /></label>
      <label className="block text-sm font-semibold text-gray-700">Email<input className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" type="email" /></label>
      <label className="block text-sm font-semibold text-gray-700">Password<input className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" type="password" /></label>
      <button className="w-full rounded-lg bg-green-600 px-4 py-3 font-semibold text-white" type="submit">Sign up</button>
    </form>
    <p className="mt-6 text-sm text-gray-500">Already registered? <Link className="font-semibold text-green-600" to="/login">Log in</Link></p>
  </section>
);

export default Register;