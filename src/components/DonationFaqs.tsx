
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

export default function DonationFAQs() {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Common questions about donating to LIFE-MAC Africa
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full mb-8">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl ">
              Are donations tax-deductible?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-2xl">
              Yes, LIFE-MAC Africa is a registered non-profit organization in Ghana. Donations are tax-deductible to
              the extent allowed by law. We provide receipts for all donations for tax purposes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl ">
              How is my donation used?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600  text-2xl">
              Your donation directly supports our programs in education, leadership development, and community
              initiatives. Approximately 85% of all donations go directly to program costs, with 15% supporting
              essential administrative and fundraising activities.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl ">
              Can I specify how my donation is used?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600  text-2xl">
                  If you have any questions or need assistance with your donation, please contact our support team at
                  info@lifemac.org or call us at +233 55 472 0190.    </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl ">
              Is my donation secure?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600  text-2xl">
              Absolutely. We use industry-standard encryption and secure payment processors to ensure your financial
              information is protected. We never store your complete credit card information on our servers.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-8 text-center">
          <p className="mb-4">Have other questions about donating?</p>
          <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50">
            Contact Our Donor Support Team : +233 24 260 1203
          </Button>
        </div>
      </div>
    </section>
  );
}