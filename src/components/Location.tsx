import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), { ssr: false });

export default function LocationSection({   officeLocation = {
    latitude: 6.598880,
    longitude: 0.461388,
  }
}) {
  return (
    <section className="py-10 md:py-20 px-4 md:px-8 bg-transparent">
      <div className="w-full max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 px-4">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#0B1C3E]">Our Location</h2>
            <p className="text-lg text-gray-600 max-w-xl">
              Visit us at our office in Ho, Volta Region, Ghana. We are always open to visitors and partners.
            </p>
          </div>
          
          <div className="hidden md:block mb-2">
             <Button className="bg-[#EAB308] hover:bg-[#CA8A04] text-blue-950 font-bold shadow-lg rounded-full px-8 h-12">
                <a
                  href={`https://maps.google.com/?q=${officeLocation.latitude},${officeLocation.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span>Get Directions</span>
                </a>
              </Button>
          </div>
        </div>
        
        <div className="w-full h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 relative group">
          {/* Interactive Map */}
          <Map
            latitude={officeLocation.latitude}
            longitude={officeLocation.longitude}
            zoom={15}
            className="h-full w-full"
          />
          
           {/* Mobile Get Directions button */}
           <div className="absolute bottom-6 right-6 md:hidden">
              <Button className="bg-[#EAB308] hover:bg-[#CA8A04] text-blue-950 font-bold shadow-lg rounded-full px-6">
                <a
                  href={`https://maps.google.com/?q=${officeLocation.latitude},${officeLocation.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span>Get Directions</span>
                </a>
              </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
