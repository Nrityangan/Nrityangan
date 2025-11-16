import { Card } from "@/components/ui/card";
import { Award, BookOpen, Music, Star } from "lucide-react";

const Teacher = () => {
  return (
    <section id="teacher" className="py-20 bg-gradient-to-b from-blue-light/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-royal mb-4">Our Guru</h2>
          <p className="text-lg text-muted-foreground">
            Learn from a master of classical dance
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="glass border-2 border-accent/30 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Teacher Image/Placeholder */}
              <div className="flex items-center justify-center">
                <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-primary via-accent to-gold-dark p-1">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <div className="text-center">
                      <Music className="h-20 w-20 text-accent mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Guru Photo</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Teacher Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gradient-gold mb-2">
                    [Teacher Name]
                  </h3>
                  <p className="text-xl text-primary font-semibold">Founder & Principal</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Award className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Master's Degree in Classical Dance</h4>
                      <p className="text-muted-foreground text-sm">
                        Advanced training from renowned institutions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <BookOpen className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">30+ Years Teaching Experience</h4>
                      <p className="text-muted-foreground text-sm">
                        Trained hundreds of students in multiple classical forms
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Star className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">National & International Performances</h4>
                      <p className="text-muted-foreground text-sm">
                        Performed at prestigious venues across the globe
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Award className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Multiple Awards & Recognitions</h4>
                      <p className="text-muted-foreground text-sm">
                        Honored for contributions to classical dance
                      </p>
                    </div>
                  </div>
                </div>

                <Card className="p-4 bg-gradient-to-r from-primary/5 to-accent/5 border-accent/20">
                  <p className="text-foreground/90 italic">
                    "Dance is not just an art form, it's a way of life. Through dance, we connect with our 
                    heritage, express our deepest emotions, and find inner peace."
                  </p>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Teacher;
