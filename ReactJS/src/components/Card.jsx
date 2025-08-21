export const Card = ({ data }) => {
  const { img_url, name, description, genre, cast, watch_url } = data;
  let isAble = true;
  const AGE = 20;
  if (AGE < 18) {
    isAble = false;
  }
  const handleLinkClick = (e) => {
    if (!isAble) {
      e.preventDefault();
    }
  };
  return (
    <li className="bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row max-w-2xl mx-auto my-6 border border-gray-800 hover:shadow-2xl transition-shadow">
      <div className="md:w-1/3 flex items-center justify-center bg-gray-800 p-4">
        <img
          src={img_url}
          alt={name}
          className="object-cover rounded-lg w-full h-48 md:h-40 border-2 border-gray-700"
        />
      </div>
      <div className="flex flex-col gap-4 py-8 px-6 md:w-2/3">
        <h2 className="text-2xl font-semibold text-white mb-1">{name}</h2>
        <p className="text-base text-gray-300">
          <span className="font-bold text-cyan-400">Summary:</span>{" "}
          {description}
        </p>
        <p className="text-sm text-gray-400">
          <span className="font-semibold text-cyan-300">Genre:</span>{" "}
          {genre.join(", ")}
        </p>
        <p className="text-sm text-gray-400">
          <span className="font-semibold text-cyan-300">Cast:</span>{" "}
          {cast.join(", ")}
        </p>
        <a
          href={isAble ? watch_url : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 self-start"
          onClick={handleLinkClick}
        >
          <button
            className={`bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-6 rounded-lg shadow transition-colors border border-cyan-700 ${
              isAble
                ? "cursor-pointer"
                : "cursor-not-allowed opacity-50 bg-yellow-600 hover:bg-yellow-500"
            } flex items-center gap-2`}
            disabled={!isAble}
          >
            {!isAble && (
              <i className="fa-regular fa-lock" aria-hidden="true"></i>
            )}
            {isAble ? "Watch Now" : "Unavailable"}
          </button>
        </a>
      </div>
    </li>
  );
};
