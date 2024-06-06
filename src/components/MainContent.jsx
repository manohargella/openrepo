import React from 'react';
import grab from '../assets/grab.png';
import swift from '../assets/swift.png';
import img5 from '../assets/5.png';
import img4 from '../assets/4.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';

const cards = [
  {
    img: grab,
    title: 'Free resources to learn C++',
    description: 'Language, DSA, Game Dev etc.',
    link: 'https://stupendous-hubcap-0d8.notion.site/C-Free-Learning-Resources-79f333e89cd64eb1bbcfc464ba38ad34?pvs=4',
  },
  {
    img: swift,
    title: 'Free resources to learn Swift',
    description: 'IOS Development',
    link: 'under.html',
  },
  {
    img: img5,
    title: 'Free resources to learn C',
    description: 'Language basics and DSA.',
    link: 'under.html',
  },
  {
    img: img4,
    title: 'Free resources to learn C#',
    description: 'Servers and Game development',
    link: 'under.html',
  },
  {
    img: img2,
    title: 'Free resources to learn Python',
    description: 'AI, ML, DL, Web Dev .. etc',
    link: 'under.html',
  },
  {
    img: img3,
    title: 'Free resources to learn JavaScript',
    description: 'Language, front-end development',
    link: 'under.html',
  },
];

const MainContent = () => {
  return (
    <div className="container mx-auto mt-16 md:mt-24 my-8 grid gap-8 md:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 card-container">
      {cards.map((card, index) => (
        <div key={index} className="card shadow-md rounded-lg overflow-hidden flex flex-col border border-solid border-white">
          <img src={card.img} alt="Placeholder Image" className="w-full h-32 object-cover" />
          <div className="p-4 flex flex-col justify-between flex-grow">
            <div>
              <h2 className="font-bold text-lg text-gray-100">{card.title}</h2>
              <p className="mt-2 text-gray-400">{card.description}</p>
            </div>
            <a href={card.link}>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Start Learning</button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainContent;
