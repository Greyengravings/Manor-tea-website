import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Leadership = () => {
  const team = [
    {
      name: "Prem Narayani",
      role: "Co-Founder, Managing Director & Chief Marketing Officer — MANOR",
      bio: "Prem Narayani is the Co-Founder and Managing Director of MANOR, where he also leads marketing and technology operations. With a strong passion for innovation and branding, Prem manages all digital, online, and promotional initiatives that have shaped MANOR's growing reputation as a premium yet affordable tea brand. Combining modern marketing strategies with traditional business values, he has played a key role in establishing MANOR's identity and expanding its presence across markets. Prem's leadership reflects a clear vision — to make MANOR a symbol of quality, trust, and everyday luxury in Indian tea.",
      expertise: ["Marketing Strategy", "Digital Innovation", "Brand Development"]
    },
    {
      name: "Mukesh Narayani",
      role: "Co-Founder, CEO & Chief Financial Officer — MANOR",
      bio: "Mukesh Narayani is the Co-Founder, Chief Executive Officer, and Chief Financial Officer of MANOR. As the principal force behind the brand, he oversees the company's strategic direction, operations, and financial planning. With a strong business acumen and commitment to excellence, Mukesh has been instrumental in shaping MANOR's identity as a trusted and fast-growing tea brand. His leadership focuses on maintaining uncompromised quality, operational efficiency, and long-term sustainability — ensuring that every cup of MANOR tea delivers the perfect blend of tradition and innovation.",
      expertise: ["Strategic Direction", "Financial Planning", "Operations"]
    },
    {
      name: "Bhavika Narayani",
      role: "Managing Director — MANOR",
      bio: "Bhavika Narayani is the Managing Director of MANOR, leading the company with a focus on innovation, quality, and customer satisfaction. Her leadership ensures that MANOR continues to grow as a trusted and beloved tea brand.",
      expertise: ["Innovation", "Quality Management", "Customer Relations"]
    },
    {
      name: "Garv Narayani",
      role: "Co-Founder & Chief Operating Officer — MANOR",
      bio: "Garv Narayani is the Co-Founder and Chief Operating Officer of MANOR, leading the company with a focus on innovation, quality, and customer satisfaction. His leadership ensures that MANOR continues to grow as a trusted and beloved tea brand.",
      expertise: ["Operations Management", "Process Innovation", "Team Leadership"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Our Leadership
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The visionary leaders behind MANOR, dedicated to bringing you the finest tea experience
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {team.map((member, index) => (
            <Card key={index} className="overflow-hidden manor-shadow manor-transition hover:scale-105 border-none">
              <div className="manor-gradient h-32"></div>
              <CardContent className="pt-6 pb-8">
                <h3 className="text-2xl font-serif font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-4 text-sm">{member.role}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm line-clamp-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Us Section */}
        <div className="max-w-4xl mx-auto text-center">
          <Card className="border-primary/20 p-12">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Join Our Team
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We're always looking for passionate individuals who share our love for exceptional tea. 
              If you'd like to be part of the Manor family, we'd love to hear from you.
            </p>
            <div className="text-primary font-semibold">
              Contact us at: careers@manortea.com
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Leadership;
