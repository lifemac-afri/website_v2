import { 
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
  } from '@/components/ui/accordion';
  
  export default function FAQVolunteerSection() {
    return (
      <div className="w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about volunteering with LIFE-MAC Africa.
            </p>
          </div>
  
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl  mb-4">General Questions</h3>
            <Accordion type="single" collapsible className="mb-8">
              <AccordionItem value="what-does-lifemac-do">
                <AccordionTrigger>What does LIFE-MAC Africa do?</AccordionTrigger>
                <AccordionContent>
                  LIFE-MAC Africa is a social enterprise dedicated to empowering individuals and communities with a
                  special focus on women and girls, youth and people with disabilities and underserved populations.
                  We run various programs including Nyornuvi, STEMize, Paradigm Shift Project, and
                  #YouthLearningTogether.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="special-qualifications">
                <AccordionTrigger>Do I need special qualifications to volunteer?</AccordionTrigger>
                <AccordionContent>
                  While specific roles may require certain skills or experience, our volunteer opportunities are
                  open to anyone with passion and commitment. We provide training and support to help you succeed in
                  your volunteer role.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="remote-volunteering">
                <AccordionTrigger>Can I volunteer remotely?</AccordionTrigger>
                <AccordionContent>
                  Yes! We offer both in-person and remote volunteer opportunities.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
  
            <h3 className="text-xl  mb-4">Application Process</h3>
            <Accordion type="single" collapsible className="mb-8">
              <AccordionItem value="after-application">
                <AccordionTrigger>What happens after I submit my application?</AccordionTrigger>
                <AccordionContent>
                  After submitting your application, our volunteer coordinator will review it and contact you within
                  7-14 days. You may be invited for an interview or orientation session depending on the
                  role you're interested in.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="orientation">
                <AccordionTrigger>Is there an orientation for new volunteers?</AccordionTrigger>
                <AccordionContent>
                  Yes, all new volunteers participate in an orientation session to learn about our organization,
                  programs, and policies. Role-specific training is also provided to ensure you have the knowledge
                  and resources needed for your volunteer position.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="multiple-programs">
                <AccordionTrigger>Can I volunteer for multiple programs?</AccordionTrigger>
                <AccordionContent>
                  Many of our volunteers contribute to multiple programs based on their interests and availability.
                  We encourage you to explore different opportunities within our organization.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
  
            <h3 className="text-xl  mb-4">Commitment</h3>
            <Accordion type="single" collapsible className="mb-8">
              <AccordionItem value="time-commitment">
                <AccordionTrigger>How much time do I need to commit?</AccordionTrigger>
                <AccordionContent>
                  Time commitments vary by role. Some positions require as little as 2-4 hours per month, while
                  others may involve more regular engagement. We work with you to find a volunteer opportunity that
                  fits your schedule and availability.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="minimum-period">
                <AccordionTrigger>Is there a minimum commitment period?</AccordionTrigger>
                <AccordionContent>
                  For most roles, we ask for a minimum commitment of 3-6 months to ensure continuity for our
                  programs and the communities we serve. However, we also offer one-time volunteer opportunities for
                  specific events.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="break-volunteering">
                <AccordionTrigger>Can I take a break from volunteering?</AccordionTrigger>
                <AccordionContent>
                  Yes, we understand that life circumstances change. If you need to take a break or adjust your
                  volunteer commitment, please communicate with your volunteer coordinator, and we'll work with you
                  to accommodate your needs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
      </div>
    );
  }