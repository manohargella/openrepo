// src/components/MainContent.jsx
const MainContent = () => {
    const resources = [
      {
        img: 'src/assets/grab.png',
        title: 'Free resources to learn C++',
        description: 'Language, DSA, Game Dev etc.',
        link: 'https://stupendous-hubcap-0d8.notion.site/C-Free-Learning-Resources-79f333e89cd64eb1bbcfc464ba38ad34?pvs=4'
      },
      {
        img: 'src/assets/swift.png',
        title: 'Free resources to learn Swift',
        description: 'IOS Development',
        link: 'under.html'
      },
      {
        img: 'src/assets/5.png',
        title: 'Free resources to learn C',
        description: 'Language basics and DSA.',
        link: 'under.html'
      },
      {
        img: 'src/assets/4.png',
        title: 'Free resources to learn C#',
        description: 'Servers and Game development',
        link: 'under.html'
      },
      {
        img: 'src/assets/2.png',
        title: 'Free resources to learn Python',
        description: 'AI, ML, DL, Web Dev .. etc',
        link: 'under.html'
      },
      {
        img: 'src/assets/3.png',
        title: 'Free resources to learn JavaScript',
        description: 'Language, front-end development',
        link: 'under.html'
      }
    ];
  
    return (
      <div className="container mx-auto mt-16 md:mt-24 my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 card-container">
        {resources.map((resource, index) => (
          <div key={index} className="card shadow-md rounded-lg overflow-hidden flex flex-col border border-solid border-white">
            <img src={resource.img} alt="Placeholder Image" className="w-full h-32 object-cover" />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h2 className="font-bold text-lg text-gray-100">{resource.title}</h2>
                <p className="mt-2 text-gray-400">{resource.description}</p>
              </div>
              <a href={resource.link}><button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Start Learning</button></a>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default MainContent;
  