const Navbar = () => {
  return (
    <nav className="flex items-center justify-center sm:justify-between min-w-full px-10 py-5">
      <p className="text-2xl sm:text-lg font-bold uppercase">BitConnect.</p>
      <div className="hidden sm:flex gap-10">
        <button className="font-semibold text-gray-700">Login</button>
        <button className="bg-green-700 font-semibold text-gray-100 px-5 py-3 rounded-full hover:bg-green-800">
          Register Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
