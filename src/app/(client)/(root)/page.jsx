import HeroSection from "@/components/UI/Home/HeroSection";
import YoutubeChannelSection from "@/components/UI/Home/YoutubeChannelSection";
import YoutubeContentSection from "@/components/UI/Home/YoutubeContentSection";
import YoutubeSearchContent from "@/components/UI/Home/YoutubeSearchContent";
import Image from "next/image";

export default async function Home({searchParams}) {

  const query = (await searchParams).query || '';
  
  return (
    <div>

      <div className="hero-section">
        {/* import hero section */}
        <HeroSection />
      </div>

      {
        query ? (
          <>
            <YoutubeSearchContent query = {query} />
          </>
        ): (
          <>
            <div className="youtube-channel-section">
              {/* youtube channel section */}
              <YoutubeChannelSection />
            </div>

            <div className="youtube-content-section mt-16">
              {/* youtube content section */}
              <YoutubeContentSection />
            </div>
          </>
        )
      }
      


      
    </div>
  );
}
