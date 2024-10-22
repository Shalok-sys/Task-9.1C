import React from "react";
import './Home.css'
import { FaFacebook, FaInstagram, FaTwitter, FaSearch } from "react-icons/fa";

const articles = [
    {
      id: 1,
      title: 'React Basics',
      description: 'An introduction to React.js',
      author: 'John Doe',
      rating: 4.2,
      img_url: "https://picsum.photos/460/160?random=1",
    },
    {
      id: 2,
      title: 'Advanced React',
      description: 'Diving deeper into React hooks and lifecycle methods',
      author: 'Jane Smith',
      rating: 3.5,
      img_url: "https://picsum.photos/460/160?random=2",
    },
    {
      id: 3,
      title: 'React with Redux',
      description: 'Managing global state in React using Redux',
      author: 'Alex Johnson',
      rating: 4.9,
      img_url: "https://picsum.photos/460/160?random=3",
    },
  ];
  
  const tutorials = [
    {
      id: 1,
      title: 'Introduction to JavaScript',
      description: 'Learn the basics of JavaScript.',
      username: 'coder123',
      rating: 4.8,
      img_url: "https://picsum.photos/460/160?random=4",
    },
    {
      id: 2,
      title: 'React Fundamentals',
      description: 'Master the basics of React.js.',
      username: 'devguru',
      rating: 5.0,
      img_url: "https://picsum.photos/460/160?random=5",
    },
    {
      id: 3,
      title: 'CSS Flexbox Tutorial',
      description: 'Get hands-on experience with Flexbox layout.',
      username: 'frontendqueen',
      rating: 4.7,
      img_url: "https://picsum.photos/460/160?random=6",
    },
  ];
  
  const Header = () => {
    return (
      <header className="header">
        <div className="ui-search">
        <FaSearch /> <input className="prompt" type="text" placeholder="Search"/>
          </div>
      </header>
    );
  };
  
  const FeaturedArticles = () => {
    return (
      <section className="featured-articles">
        <h2>Featured Articles</h2>
        <div className="articles">
          {articles.map((index) => (
            <div className="article" key={index.id}>
              <div className="article-image"><img src= {index.img_url} alt="image-des"></img></div>
              <h3>{index.title}</h3>
              <p>{index.description}</p>
              <p><span>&#11088;</span> {index.rating} {index.author}</p>
            </div>
          ))}
        </div><br></br>
        <center><button>See all articles</button></center>
        <br></br>
      </section>
    );
  };
  
  const FeaturedTutorials = () => {
    return (
      <section className="featured-tutorials">
        <h2>Featured Tutorials</h2>
        <div className="tutorials">
        {tutorials.map((index) => (
            <div className="article" key={index.id}>
              <div className="article-image"><img src= {index.img_url} alt="image-des"></img></div>
              <h3>{index.title}</h3>
              <p>{index.description}</p>
              <p><span>&#11088;</span> {index.rating} {index.username}</p>
            </div>
          ))}
        </div><br></br>
        <center><button>See all tutorials</button></center>
        <br></br>
      </section>
    );
  };
  
  const Newsletter = () => {
    return(
      <div className="newsletter">
      <label htmlFor="email">SIGN UP FOR OUR DAILY INSIDER  </label>
      <input type="email" placeholder="Enter your email"/>
      <button>Subscribe</button>
    </div>
    );
  };
  
  const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-obj">
          <div className="explore">
            <h4>Explore</h4>
            <ul>
              <li>Home</li>
              <li>Questions</li>
              <li>Articles</li>
              <li>Tutorials</li>
            </ul>
          </div>
          <div className="support">
            <h4>Support</h4>
            <ul>
              <li>FAQs</li>
              <li>Help</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="social">
            <h4>Stay Connected</h4>
            <ul>
              <li><FaFacebook style={{width:40, height:40}}/> </li>
              <li><FaTwitter style={{width:40, height:40}}/> </li>
              <li><FaInstagram style={{width:40, height:40}}/></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>DEV@Deakin 2024</p>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms</li>
            <li>Code of Conduct</li>
          </ul>
        </div>
      </footer>
    );
  };
  
const Home =()=> {
    return(
        <div>
        <h1>Dashboard</h1> 
        <Header/>
        <FeaturedArticles />
        <FeaturedTutorials />
      <Newsletter/>
      <Footer/>
        </div>
    );
}
export default Home;