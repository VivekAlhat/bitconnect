const Hero = () => {
  return (
    <div className="mt-10 p-5 flex flex-col items-center justify-center max-w-2xl gap-5">
      <h1 className="text-4xl sm:text-5xl font-black font-martel text-center capitalize">
        Let us help you <br />
        land your dream job
      </h1>
      <p className="text-center text-gray-500">
        Precise web platform to help you land your dream job by connecting you
        with the network of professionals. You can choose from variety of
        categories, titles, and companies. Take our personalized tests and
        become interview-ready.
        <em>We also offer personal assistance.</em>
      </p>
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Search job, titles, companies ..."
          className="w-full border border-gray-600 p-5 rounded-full"
        />
        <button className="bg-sky-800 text-white rounded-full px-10 mt-5 sm:mt-0 w-full sm:w-fit py-3 sm:absolute right-3 bottom-2 hover:bg-sky-700">
          Search
        </button>
      </div>
    </div>
  );
};

export default Hero;
