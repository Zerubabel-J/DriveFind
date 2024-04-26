"use client";
import { useState,Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { SearchManufacturerProps } from "@/Types";
import { manufacturers } from "@/constants";
import Image from "next/image";
const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [query, setquery] = useState("");
  const filteredManufacturers = manufacturers.filter((manufacturer) =>
    manufacturer.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image src='/car-logo.svg' alt="Car-logo" width={20} height={20} className="ml-4"/>
          </Combobox.Button>
          <Combobox.Input 
            className="search-manufacturer__input"
            placeholder="Vokswagen..."
            displayValue={(manufacturer: string) =>manufacturer}
            onChange={(e) => setquery(e.target.value)}
          />
          <Transition as={Fragment} leave="transition ease-in duration-100" 
          leaveFrom="opacity-100" 
          leaveTo="opacity-0" 
          afterLeave={()=>setquery('')}>
            <Combobox.Options>

            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
