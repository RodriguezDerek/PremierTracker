import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative w-full h-screen">
      <img src="/website_bg.webp" alt="Home Background" className="w-full h-full object-cover" />

      <div className="absolute top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center px-4 md:left-40 md:translate-x-0 md:text-left">
        <img src="/logo.png" alt="Logo" className="w-40 h-auto mb-4 fadeInUp mx-auto md:mx-0" />
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-2 fadeInUp">Welcome to PremierTracker</h1>
        <p className="text-white text-sm md:text-base mb-4 max-w-md fadeInUp">Your ultimate one-stop destination for everything Premier League. From the latest match stats to team updates, player performances.</p>
        <button className="mt-4 px-6 py-2 text-white btn-border fadeInUp"><Link to="/team">Get Started</Link></button>
      </div>
    </div>
  );
}

export default Home;
