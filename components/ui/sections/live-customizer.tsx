"use client";
import { useState, useEffect } from "react";
import { Badge } from "../badge";
import Image, { StaticImageData } from "next/image";
import DresserImage from "@/public/images/render-d-min.png";
import BedImage from "@/public/images/render-b-min.png";
import MirrorImage from "@/public/images/render-m-min.png";
import ChairImage from "@/public/images/render-c-min.png";
import MainDecorImage from "@/public/images/render-main-0-min.png";

// Import room combination images - same room with different single furniture pieces
import RoomBedImage from "@/public/images/render-main-b-min.png";
import RoomDresserImage from "@/public/images/render-main-d-min.png";
import RoomMirrorImage from "@/public/images/render-main-m-min.png";
import RoomChairImage from "@/public/images/render-main-c-min.png";

interface FurnitureItem {
  id: string;
  name: string;
  thumbnail: StaticImageData;
}

interface RoomCombinations {
  [key: string]: StaticImageData;
}

const RoomCustomizer: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
   const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);

  // Mock furniture items
  const furnitureItems: FurnitureItem[] = [
    {
      id: "bed",
      name: "Modern Bed",
      thumbnail: BedImage,
    },
    {
      id: "dresser",
      name: "Wooden Dresser",
      thumbnail: DresserImage,
    },
    {
      id: "mirror",
      name: "Wall Mirror",
      thumbnail: MirrorImage,
    },
    {
      id: "chair",
      name: "Accent Chair",
      thumbnail: ChairImage,
    },
  ];

  // Room images for single item selection
  const roomCombinations: RoomCombinations = {
    bed: RoomBedImage,
    chair: RoomChairImage,
    dresser: RoomDresserImage,
    mirror: RoomMirrorImage,
  };

    // Preload all images on component mount
  useEffect(() => {
    const preloadImages = async () => {
      const allImages = [
        MainDecorImage,
        ...furnitureItems.map(item => item.thumbnail),
        ...Object.values(roomCombinations)
      ];

      const imagePromises = allImages.map((imageSrc) => {
        return new Promise<void>((resolve) => {
          const img = new window.Image();
          img.onload = () => resolve();
          img.onerror = () => resolve(); // Still resolve on error to not block
          img.src = imageSrc.src;
        });
      });

      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };

    preloadImages();
  }, []);

  // Get room image based on selected item
  const getRoomImage = (): StaticImageData => {
    if (!selectedItem) {
      return MainDecorImage;
    }

    return roomCombinations[selectedItem] || MainDecorImage;
  };

  const toggleItem = async (itemId: string): Promise<void> => {
    setIsGenerating(true);

    // Simulate 2 second generation time
    setTimeout(() => {
      setSelectedItem((prev) => {
        // If clicking the same item, deselect it
        if (prev === itemId) {
          return null;
        } else {
          // Otherwise select the new item
          return itemId;
        }
      });
      setIsGenerating(false);
    }, 1750);
  };

  const isSelected = (itemId: string): boolean => selectedItem === itemId;

  return (
    <section id="studio" className="container mx-auto max-w-4xl py-8 md:py-16 p-6 ">
      <header className="text-center space-y-4 mb-8">
        <Badge variant="secondary" className="w-fit">
          Premium Interior Design
        </Badge>
        <h1 className="text-5xl font-bold  text-foreground">
          Remodeling Studio
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
          Transform your space with AI-powered design. Select furniture pieces
          below to instantly visualize how they&apos;ll look in your room. Mix and
          match items to create the perfect interior that reflects your style.
        </p>
      </header>

      {/* Main Image Display */}
      <div className="relative mb-8 rounded-lg overflow-hidden shadow-lg bg-muted/20">
        {/* Progress Bar - appears at top of image when generating */}
        {isGenerating && (
          <div className="absolute top-0 left-0 right-0 z-30 ">
            <div className="w-full h-0.5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"
                style={{
                  width: "0%",
                  animation: "progress-fill 1.75s linear forwards",
                }}
              ></div>
            </div>
            <style jsx>{`
              @keyframes progress-fill {
                from {
                  width: 0%;
                }
                to {
                  width: 100%;
                }
              }
            `}</style>
          </div>
        )}

        {isGenerating && (
          <div className="absolute inset-0 backdrop-blur-sm flex items-center justify-center z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-purple-400/10 to-amber-400/20 animate-pulse"></div>
            <div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-amber-500/30 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute inset-0 bg-gradient-to-bl from-transparent via-purple-300/20 to-transparent animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div className="flex flex-col items-center space-y-4 relative z-20">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-full"
              >
                <source src="/videos/splash-screen.webm" type="video/webm" />
              </video>
              <span className="text-foreground font-medium text-center">
                Anna is designing your space...
              </span>
            </div>
          </div>
        )}

        <Image
          src={getRoomImage()}
          alt="Room preview"
          className="w-full h-auto object-cover"
          width={600}
          height={400}
          priority
          placeholder="blur"
        />
      </div>

      {/* Selection Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {furnitureItems.map((item) => (
          <div
            key={item.id}
            onClick={() => !isGenerating && toggleItem(item.id)}
            className={`
              relative cursor-pointer rounded-lg overflow-hidden shadow-md transition-all duration-200 gap-8
              ${
                isSelected(item.id)
                  ? "ring-4 ring-primary ring-opacity-75 scale-105"
                  : "hover:shadow-lg hover:scale-102"
              }
              ${isGenerating ? "opacity-50 cursor-wait" : ""}
            `}
          >
            <Image
              src={item.thumbnail}
              alt={item.name}
              className="w-full h-32 object-cover"
              width={200}
              height={128}
              priority
              placeholder="blur"
            />

            {/* Selection overlay */}
            {isSelected(item.id) && (
              <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                <div className="bg-primary rounded-full p-1">
                  <svg
                    className="w-4 h-4 text-primary-foreground"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm text-foreground p-2">
              <h3 className="text-xs font-medium truncate">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Instructions */}
      <div className="mt-8 text-center">
        <p className="text-muted-foreground">
          Click on a furniture item to see it in the room design
        </p>
      </div>
    </section>
  );
};

export default RoomCustomizer;
