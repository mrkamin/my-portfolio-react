import Img1 from './assets/todo.jpg';
import Img2 from './assets/htmlcsscapeston.jpg';
import Img3 from './assets/reactcapeston.jpg';
import Img4 from './assets/culculatorjs.jpg';
import Img5 from './assets/paifj.JPG';
import Img6 from './assets/mathmagican.JPG';
import Img7 from './assets/docterapp.JPG';
import Img8 from './assets/foodrecipe.JPG';
import Img9 from './assets/spacetravelers.JPG';
import Img10 from './assets/JustCold.JPG';
import Img11 from './assets/weatherappthemline.png';
import Img12 from './assets/Shoping cart.PNG';
import AVTR1 from './assets/isamudasir.jpeg';
import AVTR2 from './assets/ericumeohabike.jpeg';
import AVTR3 from './assets/jawadnazari.jpeg';

const data = [
  {
    id: 1,
    image: Img12,
    title: 'e-commerce website',
    description: 'enhancing the shopping cart experience for an e-commerce website. Users have provided feedback that the current shopping cart lacks intuitive features and is not user-friendly. They want an improved interface that allows for easier item management, visibility of the total cost, and a smooth checkout process.',
    tech: 'JavaScript | HTML | CSS | ReactJs',
    github: 'https://github.com/mrkamin/Aide-Academy-shopping-cart',
    demo: 'https://shopping-u6pn.onrender.com/',
  },
  {
    id: 2,
    image: Img7,
    title: 'Doctor Appointment',
    description: 'This project is made Reserve an appointment to a doctor. Doctor Reservation frontend is React frontend application for doctor book appointments. This application is responsive, and users can load, create, and delete doctors and reservations. Users need to sign up or sign in to access application. They can sign up or sign in using the sign up and login forms.',
    tech: 'JavaScript | React | Ruby on Rails | Postgresql | HTML | CSS',
    github: 'https://github.com/Iqbal-Elham/Doctor-Reservation-frontend',
    demo: 'https://reserv-appoinment.onrender.com/',
  },
  {
    id: 4,
    image: Img9,
    title: 'Space Travelers Hub',
    description: 'This is a React WebApp with real live data from the SpaceX API. The application will allow users to book rockets and join selected space missions. Built with JavaScript, ReactJS, Redux and CSS3',
    tech: 'JavaScript | React | HTML | CSS',
    github: 'https://github.com/anthonymr/react-redux-group-project',
    demo: 'https://sp-axbh.onrender.com/',
  },
  {
    id: 12,
    image: Img3,
    title: 'Stock Screener',
    description: 'This capstone project I am going to build is based on an online website for a Stock Screener.This App is a tool quickly find current stock prices in USA companies...In this Repo (Metrics-webapp) 😊 I made the two Components (The home Component. The Details Component).👌',
    tech: 'JavaScript | React | HTML | CSS',
    github: 'https://github.com/mrkamin/Metrics-webapp',
    demo: 'https://superb-puppy-322d9f.netlify.app/',
  },
  {
    id: 5,
    image: Img10,
    title: 'JustCold E-commerce App Product list',
    description: 'I developed JustCold, an E-commerce app, using React for the frontend and Ruby on Rails for the backend. It enables clients to browse and purchase products seamlessly. Explore the app at https://justcold.onrender.com/.',
    tech: 'JavaScript | React | Ruby on Rails | Postgresql | HTML | CSS',
    github: 'https://github.com/mrkamin/JustCold-Frontend',
    demo: 'https://justcold.onrender.com/',
  },
  {
    id: 14,
    image: Img5,
    title: 'PAIFJ',
    description: 'PAIFJ i an online news websit, Stay informed with our comprehensive news website. Explore breaking stories, in-depth articles, and diverse perspectives on global events, technology, culture, and more. Your go-to source for staying connected and up-to-date.',
    tech: 'JavaScript | React | HTML | CSS',
    github: 'https://github.com/mrkamin/Paifj-website',
    demo: 'https://paifj.netlify.app/',
  },
  {
    id: 15,
    image: Img6,
    title: 'Math-Magican',
    description: 'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote.',
    tech: 'JavaScript | React | HTML | CSS',
    github: 'https://github.com/mrkamin/math-magican',
    demo: 'https://musical-monstera-fb67ff.netlify.app/',
  },
  {
    id: 16,
    image: Img11,
    title: 'Weather Application',
    description: 'Create a weather application that retrieves and displays weather information for a specific location using a weather API. Users can enter a city name, and the app will fetch and display the current weather conditions. Use HTML for the user interface, CSS for styling, and JavaScript to fetch data from the API and dynamically update the weather information.',
    tech: 'JavaScript | HTML | CSS',
    github: 'https://github.com/mrkamin/TAIRP-weather-app',
    demo: 'https://mrkamin.github.io/TAIRP-weather-app/',
  },

  {
    id: 3,
    image: Img8,
    title: 'Food Recipe',
    description: 'The JavaScript capstone project is about building a web application based on an external API. The webapp will have 2 or 3 user interfaces. user can see the list of foods and is able to put comments and likes to the each food.',
    tech: 'JavaScript | Webpack | HTML | CSS',
    github: 'https://github.com/mrkamin/JavaScript-capstone-project',
    demo: 'https://mrkamin.github.io/JavaScript-capstone-project/dist/',
  },

  {
    id: 10,
    image: Img1,
    title: 'To-Do list',
    description: 'A todo list is a practical tool for organizing tasks. It allows users to input, prioritize, and track activities, enhancing productivity and goal management in various aspects of life.',
    tech: 'JavaScript | Webpack | HTML | CSS',
    github: 'https://github.com/mrkamin/ToDoList',
    demo: 'https://mrkamin.github.io/ToDoList/dist/',
  },
  {
    id: 11,
    image: Img2,
    title: 'CONFERENCE',
    description: 'Discover the UNICEF Annual Human Support Conference through our dedicated website. Stay informed about conference dates, program details, esteemed speakers, partners, and insights into UNICEF mission. Join us in advancing human support and global well-being.',
    tech: 'JavaScript | HTML | CSS',
    github: 'https://github.com/mrkamin/Capeston-Project',
    demo: 'https://mrkamin.github.io/Capeston-Project/',
  },

  {
    id: 13,
    image: Img4,
    title: ' Calculater',
    description: 'Calculater is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote.',
    tech: 'JavaScript | HTML | CSS',
    github: 'https://github.com/mrkamin/calculator-JavaScript/tree/Dev',
    demo: 'https://mrkamin.github.io/calculator-JavaScript/',
  },

];
export const avatardata = [
  {
    id: 1,
    image: AVTR1,
    name: 'Issah Mudasir',
    comment:
      'Mohammed is a great software developer any company would love to have and a very good team player. I have had the pleasure of working with him several times. He is very passionate to learn as well as share knowledge. I would be more than happy to meet him again, he is a great.',
  },
  {
    id: 2,
    image: AVTR2,
    name: 'Eric Umeohabike',
    comment:
      'Mohammad Rafi Amin is a very hard-working and intelligent developer who can easily tackle any Web development problem. We have worked on several projects, and I found him a highly skilled and dedicated coding partner. His expertise in the field of JavaScript, Ruby, and Redux has helped our team immensely and we finished projects before the deadlines all the time. I was impressed with his punctuality and responsibility. He’s also an all-around great guy to work with! I highly recommend him to anyone looking for help on their team or Web development project.',
  },
  {
    id: 3,
    image: AVTR3,
    name: 'Jawad Nazari',
    comment:
      "Mohammad Rafi Amin is a bright software developer. I worked alongside him at MOBY and in that time he proved his commitment and determination over and over again. Rafi is always challenging himself—He's the type of person who reads documentation for fun, and his attention to detail is evident in all of the few projects I've worked with him on. He’s also genuinely kind and encouraging, and I can recommend him without reservation.",
  },
];

export default data;
