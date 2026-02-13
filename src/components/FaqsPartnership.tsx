import { 
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
  } from '@/components/ui/accordion';
  
  export default function PartnershipFAQSection() {
    return (
      <section className="pb-16 md:px-12 px-4">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about partnering with LIFE-MAC Africa.
            </p>
          </div>
  
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl  mb-4">General</h3>
            <Accordion type="single" collapsible className="mb-8">
              <AccordionItem value="types-of-organizations">
                <AccordionTrigger>What types of organizations do you partner with?</AccordionTrigger>
                <AccordionContent>
                  We partner with a diverse range of organizations including NGOs, educational institutions,
                  government agencies, corporations, foundations, and community-based organizations that share our
                  vision for empowering communities and creating positive social change.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="minimum-requirements">
                <AccordionTrigger>Do you have minimum requirements for partnerships?</AccordionTrigger>
                <AccordionContent>
                  While we do not have strict minimum requirements, we prioritize partners who share our values and commitment to community empowerment. The scope and nature of each partnership are determined by mutual goals, available resources, and potential impact.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="international-organizations">
                <AccordionTrigger>Can international organizations partner with you?</AccordionTrigger>
                <AccordionContent>
                  Yes, we welcome partnerships with international organizations. We are actively engaged with global partners and are committed to implementing initiatives that drive sustainable impact in African communities.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
  
            <h3 className="text-xl  mb-4">Partnership Process</h3>
            <Accordion type="single" collapsible className="mb-8">
              <AccordionItem value="partnership-process">
                <AccordionTrigger>What is the partnership process?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">Our partnership process typically follows these steps:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Initial Inquiry:</strong> We start with an introductory discussion to understand your organization and objectives.</li>
                    <li><strong>Alignment Exploration:</strong> We explore mutual interests and identify shared goals.</li>
                    <li><strong>Proposal Development:</strong> We co-create a partnership proposal outlining the scope of work.</li>
                    <li><strong>Agreement & Terms:</strong> We finalize the terms, expectations, and deliverables in a formal agreement.</li>
                    <li><strong>Implementation:</strong> We launch the collaboration and execute the agreed-upon initiatives.</li>
                    <li><strong>Evaluation:</strong> We conduct regular reviews and reporting to ensure impact and accountability.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="establishment-timeline">
                <AccordionTrigger>How long does it take to establish a partnership?</AccordionTrigger>
                <AccordionContent>
                  The timeline varies based on the scope and complexity of the collaboration. Simple partnerships can be established within a few weeks, while comprehensive strategic agreements may take 2–3 months to finalize.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="formal-agreements">
                <AccordionTrigger>Do you have formal partnership agreements?</AccordionTrigger>
                <AccordionContent>
                  Yes, we formalize all collaborations through written agreements or Memorandums of Understanding (MoUs). This ensures clarity on roles, deliverables, and mutual expectations, fostering transparency and accountability for both parties.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
  
            <h3 className="text-xl  mb-4">Benefits & Impact</h3>
            <Accordion type="single" collapsible className="mb-8">
              <AccordionItem value="partner-benefits">
                <AccordionTrigger>What benefits do partners receive?</AccordionTrigger>
                <AccordionContent>
                  Partners leverage our established community presence, local expertise, and networks. Depending on the partnership, benefits include increased visibility, access to new audiences, measurable social impact, shared resources, collaborative learning, and formal recognition in our communications.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="measuring-impact">
                <AccordionTrigger>How do you measure partnership impact?</AccordionTrigger>
                <AccordionContent>
                  We collaborate with partners to establish clear metrics and evaluation frameworks at the outset of each engagement. We regularly monitor progress, analyze performance data, and report on outcomes to ensure transparency and drive continuous improvement.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="feature-in-communications">
                <AccordionTrigger>Can we feature our partnership in our communications?</AccordionTrigger>
                <AccordionContent>
                  Yes, we encourage partners to share our collaborative work in their communications. We provide
                  guidelines for using our logo and messaging to ensure consistency. Similarly, we feature our
                  partnerships in our own communications to highlight the impact of our collaborative efforts.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    );
  }