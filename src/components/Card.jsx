const Card = ({ imgSrc, title, description, link }) => {
    return (
      <div className="card shadow-md rounded-lg overflow-hidden flex flex-col border border-solid border-white">
        <img src={imgSrc} alt="Placeholder Image" className="w-full h-32 object-cover" />
        <div className="p-4 flex flex-col justify-between flex-grow">
          <div>
            <h2 className="font-bold text-lg text-gray-100">{title}</h2>
            <p className="mt-2 text-gray-400">{description}</p>
          </div>
          <a href={link}>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Start Learning</button>
          </a>
        </div>
      </div>
    );
  };
  
  export default Card;
  