// src/app/page.js
import Navbar from '@/components/Navbar';
import Slideshow from '@/components/Slideshow';
import FlightBookingEngine from '@/components/FlightBookingEngine';
import HotelBookingEngine from '@/components/HotelBookingEngine';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Slideshow />
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Book Your Next Trip</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FlightBookingEngine />
          <HotelBookingEngine />
        </div>
      </div>
    </div>
  );
}