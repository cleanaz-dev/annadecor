"use client";
import { useState } from "react";
import { Badge } from "../badge";

interface FurnitureItem {
  id: string;
  name: string;
  thumbnail: string;
}

interface RoomCombinations {
  [key: string]: string;
}

const RoomCustomizer: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  // Mock furniture items
  const furnitureItems: FurnitureItem[] = [
    {
      id: "bed",
      name: "Modern Bed",
      thumbnail:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=150&h=150&fit=crop&crop=center",
    },
    {
      id: "dresser",
      name: "Wooden Dresser",
      thumbnail:
        "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=150&h=150&fit=crop&crop=center",
    },
    {
      id: "mirror",
      name: "Wall Mirror",
      thumbnail:
        "https://images.unsplash.com/photo-1618220179428-22790b461013?w=150&h=150&fit=crop&crop=center",
    },
    {
      id: "chair",
      name: "Accent Chair",
      thumbnail:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=150&h=150&fit=crop&crop=center",
    },
  ];

  // Mock room images based on selected items
  const getRoomImage = (): string => {
    if (selectedItems.length === 0) {
      return "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&h=400&fit=crop&crop=center";
    }

    // In a real app, you'd have actual different room combinations
    const combinations: RoomCombinations = {
      bed: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=400&fit=crop&crop=center",
      "bed,dresser":
        "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=600&h=400&fit=crop&crop=center",
      "bed,mirror":
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=400&fit=crop&crop=center",
      "bed,dresser,mirror":
        "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=600&h=400&fit=crop&crop=center",
    };

    const key = selectedItems.sort().join(",");
    return (
      combinations[key] ||
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=400&fit=crop&crop=center"
    );
  };

  const toggleItem = async (itemId: string): Promise<void> => {
    setIsGenerating(true);

    // Simulate 2 second generation time
    setTimeout(() => {
      setSelectedItems((prev) => {
        if (prev.includes(itemId)) {
          return prev.filter((id) => id !== itemId);
        } else {
          return [...prev, itemId];
        }
      });
      setIsGenerating(false);
    }, 2000);
  };

  const isSelected = (itemId: string): boolean =>
    selectedItems.includes(itemId);

  return (
    <div className="container mx-auto max-w-4xl py-8 md:py-16 p-6 ">
      <header className="text-center space-y-4 mb-8">
        <Badge variant="secondary" className="w-fit">
          Premium Interior Design
        </Badge>
        <h1 className="text-5xl font-bold  text-foreground">
          AnnaDecor Remodeling Studio
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
          Transform your space with AI-powered design. Select furniture pieces
          below to instantly visualize how they'll look in your room. Mix and
          match items to create the perfect interior that reflects your style.
        </p>
      </header>

      {/* Main Image Display */}
      <div className="relative mb-8 rounded-lg overflow-hidden shadow-lg bg-muted/20">
        {isGenerating && (
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-10">
            <div className="bg-card px-6 py-4 rounded-lg shadow-lg border">
              <div className="flex items-center space-x-3">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                <span className="text-foreground font-medium">
                  Generating your design...
                </span>
              </div>
            </div>
          </div>
        )}

        <img
          src={getRoomImage()}
          alt="Room preview"
          className="w-full h-96 object-cover"
        />

        {/* Selected items indicator */}
        {selectedItems.length > 0 && !isGenerating && (
          <div className="absolute top-4 left-4 bg-card/90 px-3 py-2 rounded-lg shadow border">
            <span className="text-sm font-medium text-muted-foreground">
              {selectedItems.length} item{selectedItems.length > 1 ? "s" : ""}{" "}
              added
            </span>
          </div>
        )}
      </div>

      {/* Selection Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
            <img
              src={item.thumbnail}
              alt={item.name}
              className="w-full h-32 object-cover"
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
              <h3 className="text-sm font-medium truncate">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Instructions */}
      <div className="mt-8 text-center">
        <p className="text-muted-foreground">
          Click on furniture items to add or remove them from your room design
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          Selected items:{" "}
          {selectedItems.length > 0 ? selectedItems.join(", ") : "None"}
        </p>
      </div>
    </div>
  );
};

export default RoomCustomizer;
