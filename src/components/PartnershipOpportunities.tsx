import React from 'react';
import { Quote, Handshake, Coins, Building2, Globe2 } from 'lucide-react';

const opportunities = [
  {
    title: "Program Partners",
    description: "Collaborate to co-create new programs or support existing initiatives within either organization that align with our shared mission.",
    examples: "Joint workshops, co-created educational materials, shared events",
    icon: Handshake
  },
  {
    title: "Funding Partners",
    description: "Support our work through financial contributions, grants, or sponsorships to help sustain and expand our impact.",
    examples: "Program funding, operational support, event sponsorship",
    icon: Coins
  },
  {
    title: "Resource Partners",
    description: "Share resources such as facilities, equipment, expertise, or services to enhance our program delivery.",
    examples: "Venue provision, technical equipment, professional services",
    icon: Building2
  },
  {
    title: "Strategic Partners",
    description: "Engage in long-term collaboration to address systemic issues and create sustainable change in communities.",
    examples: "Multi-year initiatives, policy advocacy, research collaborations",
    icon: Globe2
  }
];

const PartnershipOpportunities = () => {
  return (
    <section className="py-24 bg-[#0B1C3E] text-white px-4 md:px-16 overflow-hidden relative">
       {/* Background Pattern */}
       <div className="absolute inset-0 pointer-events-none opacity-5">
           {/* You can add a background image here if needed, similar to other sections */}
        </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnership Opportunities</h2>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            We offer various ways to partner with us based on your organization's goals, resources, and interests.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {opportunities.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 pt-12 h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 group relative ${
                  index % 2 === 0 
                    ? 'rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-none rounded-bl-none' 
                    : 'rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-none rounded-br-none'
                }`}
            >
              <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors">
                 <item.icon className="w-8 h-8 text-teal-600" />
              </div>

              <div className="">
                <h3 className="text-2xl font-bold text-[#0B1C3E] mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipOpportunities;
