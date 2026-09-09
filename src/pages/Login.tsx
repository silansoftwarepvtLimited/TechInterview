import { Link } from "react-router-dom";

const Login = () => (
  <section className="mx-auto max-w-md px-4 py-16 lg:px-6">
    <h1 className="text-3xl font-black text-gray-900">Welcome back</h1>
    <form className="mt-8 space-y-5">
      <label className="block text-sm font-semibold text-gray-700">Email<input className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" type="email" /></label>
      <label className="block text-sm font-semibold text-gray-700">Password<input className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3" type="password" /></label>
      <button className="w-full rounded-lg bg-green-600 px-4 py-3 font-semibold text-white" type="submit">Log in</button>
    </form>
    <p className="mt-6 text-sm text-gray-500">New to LearnHub? <Link className="font-semibold text-green-600" to="/register">Create an account</Link></p>
  </section>
);

export default Login;