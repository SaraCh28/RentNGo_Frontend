"use client";
import { motion } from "framer-motion";
import { Buttons } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CARS } from "@/data/cars";

export default function BookingPage() {
  const searchParams = useSearchParams();
  const carId = Number(searchParams.get("id"));
  const selectedCar = CARS.find((c) => c.id === carId);
  const car = selectedCar ?? null;

  const dailyRateNumber = car
    ? Number(String(car.price).replace(/[^0-9.]/g, "")) || 0
    : 0;
  const days = 7;
  const estimatedTotal = dailyRateNumber ? dailyRateNumber * days : 0;

  return (
    <main className="min-h-screen bg-black text-black px-6 py-20"
    id="bookingPage">
      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-semibold text-white">
          Book Your <span className="text-[#6438c2]">Luxury Ride</span>
        </h1>
        <p className="text-gray-300 mt-3 max-w-xl mx-auto">
          Choose your dates, location, and car — experience premium travel with RentNGo.
        </p>
      </motion.div>

      {/* MAIN CONTENT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        
        {/* CAR SUMMARY + ESTIMATE */}
        <div className="space-y-6">
          
          {/* SELECTED CAR (dynamic later) */}
          <Card className="bg-neutral-200 border border-neutral-100">
            <CardContent className="p-6">
              <h2 className="text-xl font-medium text-[#6438c2] mb-4">Selected Car</h2>
              {car ? (
                <div className="flex items-center gap-4">
                  <div className="h-20 w-36 bg-neutral-100 rounded-xl overflow-hidden flex items-center justify-center">
                    <img
                      src={car.img.startsWith("http") ? car.img : `/${car.img}`}
                      alt={car.name}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">{car.name}</p>
                    <p className="text-gray-400 text-sm">
                      {car.specs?.year ? `${car.specs.year} • ` : ""}
                      {car.specs?.power ? `${car.specs.power}` : "Premium"}
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-gray-400 text-sm">No car selected. Please choose a car from the fleet.</p>
              )}
            </CardContent>
          </Card>

          {/* PRICE BOX */}
          <Card className="bg-neutral-200 border border-neutral-100">
            <CardContent className="p-6">
              <h2 className="text-xl font-medium text-[#6438c2] mb-4">Estimated Cost</h2>
              <div className="flex justify-between text-lg font-medium">
                <span>Daily Rate:</span>
                <span>{car ? car.price : "—"}</span>
              </div>
              <div className="flex justify-between text-lg font-medium">
                <span>7 Days:</span>
                <span>{estimatedTotal ? `${estimatedTotal}` : "—"}</span>
              </div>

              <hr className="my-4 border-neutral-700" />

              <div className="flex justify-between text-2xl font-semibold text-[#6438c2]">
                <span>Total:</span>
                <span>{estimatedTotal ? `${estimatedTotal}` : "—"}</span>
              </div>
            </CardContent>
          </Card>

        </div>


        {/* BOOKING FORM */}
        <Card className="bg-neutral-100 border border-neutral-100">
          <CardContent className="p-6 space-y-6">
            <h2 className="text-xl font-medium text-[#6438c2]">Booking Details</h2>

            {/* Pickup Location */}
            <div>
              <Label>Pickup Location</Label>
              <Input
                placeholder="e.g., Lahore Airport"
                className="bg-neutral-100 border-neutral-700 text-black"
              />
            </div>

            {/* Dropoff Location */}
            <div>
              <Label>Dropoff Location</Label>
              <Input
                placeholder="e.g., Gulberg"
                className="bg-neutral-100 border-neutral-700 text-black"
              />
            </div>

            {/* Dates */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Pickup Date</Label>
                <Input type="date" className="bg-neutral-100 border-neutral-700 text-black" />
              </div>
              <div>
                <Label>Return Date</Label>
                <Input type="date" className="bg-neutral-100 border-neutral-700 text-black" />
              </div>
            </div>

            {/* Car Type */}
            <div>
              <Label>Car Category</Label>
              <select className="w-full bg-neutral-100 border border-neutral-700 rounded-md p-2 text-black">
                <option>Luxury Sedan</option>
                <option>Sport / Exotic</option>
                <option>Premium SUV</option>
                <option>Business Class</option>
              </select>
            </div>

            {/* CTA */}
            <Link href="/LogIn">
            <Buttons  className="w-full bg-[#6438c2] hover:bg-[#4f28a0] text-black text-md py-5">
              Proceed to Payment
            </Buttons>
            </Link>
          </CardContent>
        </Card>

        
      </div>
    </main>
  );
}



