// app.tsx
import { CustomFilter, Hero, SearchBar, CarCard } from "@/components";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const allCars = await fetchCars();

  const isDataEmpity =
    !Array.isArray(allCars) || allCars.length < 0 || !allCars;
  console.log(allCars);
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width " id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold"> Car Catalog</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" value="" />
            <CustomFilter title="fuel" value="" />
          </div>
        </div>
        {!isDataEmpity ? (
          <section>
            <div className="home__car-wrapper   ">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold ">Oops, no results</h2>
            <p>{allCars?.messages}</p>
          </div>
        )}
      </div>
    </main>
  );
}
