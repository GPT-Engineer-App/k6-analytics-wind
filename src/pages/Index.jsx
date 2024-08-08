import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cat, Heart, Info, Paw, Star, ArrowRight } from "lucide-react";

const CatBreed = ({ name, description, icon, rating }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card className="mb-4 hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            {icon}
            {name}
          </span>
          <div className="flex items-center">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
            ))}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
        <Button variant="outline" size="sm" className="mt-4">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  </motion.div>
);

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [funFact, setFunFact] = useState("");

  const catBreeds = [
    { name: "Siamese", description: "Known for their distinctive color points and blue eyes.", icon: <Cat className="h-5 w-5 text-blue-500" />, rating: 4 },
    { name: "Maine Coon", description: "One of the largest domestic cat breeds, known for their intelligence and playful personality.", icon: <Cat className="h-5 w-5 text-orange-500" />, rating: 5 },
    { name: "Persian", description: "Recognized for their long fur and flat faces.", icon: <Cat className="h-5 w-5 text-gray-500" />, rating: 3 },
  ];

  const catImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/1200px-Kittyply_edit1.jpg",
  ];

  const funFacts = [
    "Cats sleep for about 70% of their lives.",
    "A group of cats is called a clowder.",
    "Cats have over 20 vocalizations, including the purr, meow, and chirp.",
    "The first cat in space was a French cat named Felicette in 1963.",
    "Cats can jump up to six times their length.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFunFact(funFacts[Math.floor(Math.random() * funFacts.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-6xl font-bold mb-4 text-purple-800 inline-flex items-center">
            All About Cats <Cat className="ml-4 h-12 w-12 text-purple-600" />
          </h1>
          <p className="text-xl text-purple-600 italic">"Time spent with cats is never wasted." - Sigmund Freud</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Carousel className="mb-8">
            <CarouselContent>
              {catImages.map((src, index) => (
                <CarouselItem key={index}>
                  <img
                    src={src}
                    alt={`Cat ${index + 1}`}
                    className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={funFact}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-4 rounded-lg shadow-md mb-8 text-center"
          >
            <h3 className="text-lg font-semibold mb-2 text-purple-700">Cat Fun Fact:</h3>
            <p className="text-gray-700">{funFact}</p>
          </motion.div>
        </AnimatePresence>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="overview" className="text-lg">Overview</TabsTrigger>
            <TabsTrigger value="breeds" className="text-lg">Breeds</TabsTrigger>
            <TabsTrigger value="care" className="text-lg">Care Tips</TabsTrigger>
          </TabsList>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="overview">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-purple-700">Cat Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl text-gray-700 mb-6">
                      Cats are fascinating creatures that have been domesticated for thousands of years. They are known for their
                      independence, agility, and affectionate nature.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-lg py-2 px-4">
                        <Heart className="h-5 w-5 mr-2" /> Affectionate
                      </Badge>
                      <Badge variant="outline" className="text-lg py-2 px-4">
                        <Paw className="h-5 w-5 mr-2" /> Agile
                      </Badge>
                      <Badge variant="outline" className="text-lg py-2 px-4">
                        <Info className="h-5 w-5 mr-2" /> Independent
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="breeds">
                <h2 className="text-3xl font-semibold mb-6 text-purple-700">Popular Cat Breeds</h2>
                {catBreeds.map((breed, index) => (
                  <CatBreed key={index} {...breed} />
                ))}
              </TabsContent>
              <TabsContent value="care">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-purple-700">Cat Care Tips</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {[
                        "Provide a balanced diet suitable for your cat's age and health",
                        "Ensure fresh water is always available",
                        "Regular grooming to keep their coat healthy",
                        "Schedule regular vet check-ups",
                        "Offer plenty of playtime and mental stimulation"
                      ].map((tip, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <Paw className="h-6 w-6 mr-2 text-purple-500 flex-shrink-0 mt-1" />
                          <span className="text-lg">{tip}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
