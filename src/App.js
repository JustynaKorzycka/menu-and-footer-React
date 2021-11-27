import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

function App() {

  const menu =  [
    {
      link: "/faktury",
      name: "faktury",
    },
    {
      link: "/dokumenty",
      name: "dokumenty",
    },
    {
      link: "/odczyty",
      name: "odczyty",
    },
    {
      link: "/kontakt",
      name: "kontakt",
    },
  ];
  const footer = {
    company: {
      addressLine1: "Brzozowa 23",
      addressLine2: "Katowice 40-000",
      phone: "+48123456977",
      mail: "mail@example.com",
      name: "ABGF Sp. z o. o.",
      logo: "https://cdn.pixabay.com/photo/2018/03/28/04/02/logo-3268177_960_720.png"
    },
    socials: {
      fb: "www.facebook.com",
      instagram: "instagram.com",
      twitter: "twitter.com"
    },
    links: {
      help: "/help",
      pay: "/pay",
      agreement: '/agreement',
      dashboard: '/dashboard',
      reading: '/reading',
      reports: '/reports',
    }
  };



  return (
    <>
      
      <Header menu={menu} />
      <div className="content"><h2>Content</h2></div>
      <Footer footerData={footer }/>
      </>
  );
}

export default App;
