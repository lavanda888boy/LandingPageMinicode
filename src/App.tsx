import Footer from "./components/footer/Footer";
import Consultation from "./components/consultation/Consultation";
import Offers from "./components/offers/Offers";
import Reviews from "./components/reviews/Reviews";
import "./App.css";
import Header from "./components/home/Header";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Consultation />
      <Offers />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
