import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    text: "Absolutely incredible experience! The attention to detail and personalized service made our honeymoon in Bali unforgettable. Every moment was perfectly planned.",
    avatar: "SJ",
    trip: "Bali Honeymoon Package"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Toronto, Canada",
    rating: 5,
    text: "The Swiss Alps adventure exceeded all expectations. The local guides were knowledgeable, and the accommodations were top-notch. Will definitely book again!",
    avatar: "MC",
    trip: "Swiss Alps Adventure"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "Madrid, Spain",
    rating: 5,
    text: "Our family safari in Kenya was the trip of a lifetime. The kids still talk about seeing the lions and elephants up close. Professional service throughout.",
    avatar: "ER",
    trip: "Kenya Family Safari"
  },
  {
    id: 4,
    name: "David Thompson",
    location: "London, UK",
    rating: 5,
    text: "Tokyo was amazing! From the cultural experiences to the modern attractions, everything was seamlessly organized. The local recommendations were spot on.",
    avatar: "DT",
    trip: "Tokyo Culture Tour"
  },
  {
    id: 5,
    name: "Lisa Wang",
    location: "Singapore",
    rating: 5,
    text: "The Maldives resort was pure luxury. Crystal clear waters, perfect weather, and exceptional service. It felt like a dream that I never wanted to end.",
    avatar: "LW",
    trip: "Maldives Luxury Escape"
  },
  {
    id: 6,
    name: "James Miller",
    location: "Sydney, Australia",
    rating: 5,
    text: "Exploring Angkor Wat was breathtaking. The historical insights from our guide brought the ancient temples to life. A truly enriching cultural experience.",
    avatar: "JM",
    trip: "Cambodia Heritage Tour"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from thousands of happy travelers who've created unforgettable memories with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 flex-grow italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <Avatar>
                    <AvatarImage src="" alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <p className="text-xs text-primary mt-1">{testimonial.trip}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}