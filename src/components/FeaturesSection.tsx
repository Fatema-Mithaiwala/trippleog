import { Card, CardContent } from "./ui/card";
import { Plane, Shield, Clock, Award, Users, MapPin } from "lucide-react";

const features = [
  {
    icon: <Plane className="h-8 w-8" />,
    title: "Flight Booking",
    description: "Book flights to anywhere in the world with our competitive prices and flexible booking options."
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Travel Insurance",
    description: "Travel with peace of mind knowing you're protected with our comprehensive travel insurance plans."
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "24/7 Support",
    description: "Our expert travel consultants are available around the clock to assist you with any needs."
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Best Price Guarantee",
    description: "We guarantee the best prices on all our travel packages. Find it cheaper elsewhere? We'll match it."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Group Discounts",
    description: "Planning a trip with friends or family? Enjoy special discounts for group bookings of 6 or more."
  },
  {
    icon: <MapPin className="h-8 w-8" />,
    title: "Local Expertise",
    description: "Our local guides and partners ensure you experience the authentic culture of every destination."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Wanderlust?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to making your travel dreams come true with our exceptional services and attention to detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-md transition-all duration-300 bg-background">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}