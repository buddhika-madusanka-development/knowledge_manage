import HeroSection from "@/components/UI/Home/HeroSection";
import YoutubeChannelSection from "@/components/UI/Home/YoutubeChannelSection";
import YoutubeContentSection from "@/components/UI/Home/YoutubeContentSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>

      <div className="hero-section">
        {/* import hero section */}
        <HeroSection />
      </div>

      <div className="youtube-channel-section">
        {/* youtube channel section */}
        <YoutubeChannelSection />
      </div>

      <div className="youtube-content-section mt-16">
        {/* youtube content section */}
        <YoutubeContentSection />
      </div>

      
    </div>
  );
}
