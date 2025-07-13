function AuthLogin() {
  return (
    <div className="w-full max-w-md bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="new-password"
          className="w-full p-3 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full py-3 bg-violet-500 text-white rounded hover:bg-violet-700"
        >
          Login
        </button>
      </form>
      <div className="mt-4 text-center">
        <button className="flex items-center justify-center gap-2 w-full py-2 border border-gray-300 rounded">
          <img
            src="https://img.icons8.com/color/16/google-logo.png"
            alt="Google"
          />
          Sign in with Google
        </button>
        <p className="mt-4 text-sm">
          Don't have an account?{' '}
          <a href="/auth/register" className="text-violet-500 underline">Register</a>
        </p>
      </div>
    </div>
  );
}
export default AuthLogin;