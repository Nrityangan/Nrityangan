import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Reviews = () => {
  const reviews = [
    {
      name: "Priya Sharma",
      role: "Student",
      rating: 5,
      text: "Nrityangan has been instrumental in shaping my dancing career. The attention to detail and personalized guidance from the guru is exceptional. I've learned so much about Bharatanatyam here!",
    },
    {
      name: "Rajesh Kumar",
      role: "Parent",
      rating: 5,
      text: "My daughter has been learning Kathak here for 3 years. The transformation in her confidence and grace has been remarkable. The school maintains high standards while keeping the learning environment warm and encouraging.",
    },
    {
      name: "Anjali Menon",
      role: "Student",
      rating: 5,
      text: "The best decision I made was joining Nrityangan for Odissi classes. The guru's expertise and passion for dance is truly inspiring. Every class is a journey into the rich cultural heritage of India.",
    },
    {
      name: "Vikram Reddy",
      role: "Parent",
      rating: 5,
      text: "Highly recommended! The teaching methodology is excellent, and the school organizes regular performances which boost students' confidence. My son loves attending his Kuchipudi classes here.",
    },
    {
      name: "Meera Iyer",
      role: "Student",
      rating: 5,
      text: "I've been part of Nrityangan family for over 5 years. The guru not only teaches dance but also instills discipline and cultural values. This place feels like a second home to me.",
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-background to-blue-light/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-royal mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from our community of passionate dancers
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2">
                    <Card className="p-6 glass border-2 border-accent/20 h-full hover:border-accent/50 transition-all">
                      <div className="flex items-center mb-3">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-foreground/90 mb-4 leading-relaxed italic">
                        "{review.text}"
                      </p>
                      <div className="border-t border-accent/20 pt-4">
                        <p className="font-semibold text-foreground">{review.name}</p>
                        <p className="text-sm text-muted-foreground">{review.role}</p>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <Card className="inline-block p-6 glass border-2 border-gold/30">
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <p className="text-4xl font-bold text-gradient-gold">500+</p>
                <p className="text-sm text-muted-foreground">Happy Students</p>
              </div>
              <div className="h-12 w-px bg-accent/30" />
              <div className="text-center">
                <p className="text-4xl font-bold text-gradient-gold">30+</p>
                <p className="text-sm text-muted-foreground">Years Legacy</p>
              </div>
              <div className="h-12 w-px bg-accent/30" />
              <div className="text-center">
                <p className="text-4xl font-bold text-gradient-gold">100+</p>
                <p className="text-sm text-muted-foreground">Performances</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
