"use client";

import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";

const popularInspirations = [
  {
    location: "Canmore",
    type: "Chalet rentals",
  },
  {
    location: "Benalmádena",
    type: "Vacation rentals",
  },
  {
    location: "Marbella",
    type: "Vacation rentals",
  },
  {
    location: "Mijas",
    type: "House rentals",
  },
  {
    location: "Prescott",
    type: "Pet-friendly rentals",
  },
  {
    location: "Scottsdale",
    type: "Apartment rentals",
  },
  {
    location: "Tucson",
    type: "Condo rentals",
  },
  {
    location: "Jasper",
    type: "Cabin rentals",
  },
  {
    location: "Mountain View",
    type: "Cabin rentals",
  },
  {
    location: "Devonport",
    type: "Cottage rentals",
  },
  {
    location: "Mallacoota",
    type: "Pet-friendly rentals",
  },
  {
    location: "Ibiza",
    type: "Apartment rentals",
  },
  {
    location: "Anaheim",
    type: "Vacation rentals",
  },
  {
    location: "Monterey",
    type: "House rentals",
  },
  {
    location: "Paso Robles",
    type: "House rentals",
  },
  {
    location: "Santa Barbara",
    type: "Condo rentals",
  },
  {
    location: "Sonoma",
    type: "Cottage rentals",
  },
  {
    location: "Show more",
    type: "",
  },
];

export default function InspirationTabs(): JSX.Element {
  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value: string) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

  return (
    <div className="custom">
      <TETabs className="border-b-2 border-gray-300 overflow-x-auto flex-nowrap whitespace-nowrap scrollbar scrollbar-h-1 scrollbar-track-gray-500 scrollbar-thumb-zinc-300">
        <TETabsItem
          onClick={() => handleBasicClick("tab1")}
          active={basicActive === "tab1"}
          className="px-0 mr-7"
          color="dark"
        >
          <span
            className={`text-[16px] capitalize ${
              basicActive === "tab1" ? "font-bold" : ""
            }`}
          >
            Popular
          </span>
        </TETabsItem>
        <TETabsItem
          onClick={() => handleBasicClick("tab2")}
          active={basicActive === "tab2"}
          className="px-0 mr-7"
          color="dark"
        >
          <span
            className={`text-[16px] capitalize ${
              basicActive === "tab2" ? "font-bold" : ""
            }`}
          >
            Arts & culture
          </span>
        </TETabsItem>
        <TETabsItem
          onClick={() => handleBasicClick("tab3")}
          active={basicActive === "tab3"}
          className="px-0 mr-7"
          color="dark"
        >
          <span
            className={`text-[16px] capitalize ${
              basicActive === "tab3" ? "font-bold" : ""
            }`}
          >
            Outdoors
          </span>
        </TETabsItem>
        <TETabsItem
          onClick={() => handleBasicClick("tab4")}
          active={basicActive === "tab4"}
          className="px-0 mr-7"
          color="dark"
        >
          <span
            className={`text-[16px] capitalize ${
              basicActive === "tab4" ? "font-bold" : ""
            }`}
          >
            Mountains
          </span>
        </TETabsItem>
        <TETabsItem
          onClick={() => handleBasicClick("tab5")}
          active={basicActive === "tab5"}
          className="px-0 mr-7"
          color="dark"
        >
          <span
            className={`text-[16px] capitalize ${
              basicActive === "tab5" ? "font-bold" : ""
            }`}
          >
            Beach
          </span>
        </TETabsItem>
        <TETabsItem
          onClick={() => handleBasicClick("tab6")}
          active={basicActive === "tab6"}
          className="px-0 mr-7"
          color="dark"
        >
          <span
            className={`text-[16px] capitalize ${
              basicActive === "tab6" ? "font-bold" : ""
            }`}
          >
            Unique stays
          </span>
        </TETabsItem>
        <TETabsItem
          onClick={() => handleBasicClick("tab7")}
          active={basicActive === "tab7"}
          className="px-0 mr-7"
          color="dark"
        >
          <span
            className={`text-[16px] capitalize ${
              basicActive === "tab7" ? "font-bold" : ""
            }`}
          >
            Categories
          </span>
        </TETabsItem>
        <TETabsItem
          onClick={() => handleBasicClick("tab8")}
          active={basicActive === "tab8"}
          className="px-0 mr-7"
          color="dark"
        >
          <span
            className={`text-[16px] capitalize ${
              basicActive === "tab8" ? "font-bold" : ""
            }`}
          >
            Things to do
          </span>
        </TETabsItem>
        <TETabsItem
          onClick={() => handleBasicClick("tab9")}
          active={basicActive === "tab9"}
          className="px-0"
          color="dark"
        >
          <span
            className={`text-[16px] capitalize ${
              basicActive === "tab9" ? "font-bold" : ""
            }`}
          >
            Condo rentals friendly apartments
          </span>
        </TETabsItem>
      </TETabs>

      <TETabsContent>
        <TETabsPane
          show={basicActive === "tab1"}
          className="h-[265px] lg:h-auto overflow-y-hidden"
        >
          <ul className="grid grid-cols-2 lg:grid-cols-6 grid-rows-2 gap-6 h-136">
            {popularInspirations.map((popular) => (
              <li key={popular.location} className="cursor-pointer">
                {popular.location === "Show more" ? (
                  <h6 className="font-bold flex items-center gap-1 hover:underline">
                    {popular.location} <FaAngleDown />
                  </h6>
                ) : (
                  <h6 className="font-bold">{popular.location}</h6>
                )}
                <p>{popular.type}</p>
              </li>
            ))}
          </ul>
        </TETabsPane>
        <TETabsPane
          show={basicActive === "tab2"}
          className="h-[265px] lg:h-auto overflow-y-hidden"
        >
          <ul className="grid grid-cols-2 lg:grid-cols-6 grid-rows-2 gap-6 h-136">
            {popularInspirations.map((popular) => (
              <li key={popular.location} className="cursor-pointer">
                {popular.location === "Show more" ? (
                  <h6 className="font-bold flex items-center gap-1 hover:underline">
                    {popular.location} <FaAngleDown />
                  </h6>
                ) : (
                  <h6 className="font-bold">{popular.location}</h6>
                )}
                <p>{popular.type}</p>
              </li>
            ))}
          </ul>
        </TETabsPane>
        <TETabsPane
          show={basicActive === "tab3"}
          className="h-[265px] lg:h-auto overflow-y-hidden"
        >
          <ul className="grid grid-cols-2 lg:grid-cols-6 grid-rows-2 gap-6 h-136">
            {popularInspirations.map((popular) => (
              <li key={popular.location} className="cursor-pointer">
                {popular.location === "Show more" ? (
                  <h6 className="font-bold flex items-center gap-1 hover:underline">
                    {popular.location} <FaAngleDown />
                  </h6>
                ) : (
                  <h6 className="font-bold">{popular.location}</h6>
                )}
                <p>{popular.type}</p>
              </li>
            ))}
          </ul>
        </TETabsPane>
        <TETabsPane
          show={basicActive === "tab4"}
          className="h-[265px] lg:h-auto overflow-y-hidden"
        >
          <ul className="grid grid-cols-2 lg:grid-cols-6 grid-rows-2 gap-6 h-136">
            {popularInspirations.map((popular) => (
              <li key={popular.location} className="cursor-pointer">
                {popular.location === "Show more" ? (
                  <h6 className="font-bold flex items-center gap-1 hover:underline">
                    {popular.location} <FaAngleDown />
                  </h6>
                ) : (
                  <h6 className="font-bold">{popular.location}</h6>
                )}
                <p>{popular.type}</p>
              </li>
            ))}
          </ul>
        </TETabsPane>
        <TETabsPane
          show={basicActive === "tab5"}
          className="h-[265px] lg:h-auto overflow-y-hidden"
        >
          <ul className="grid grid-cols-2 lg:grid-cols-6 grid-rows-2 gap-6 h-136">
            {popularInspirations.map((popular) => (
              <li key={popular.location} className="cursor-pointer">
                {popular.location === "Show more" ? (
                  <h6 className="font-bold flex items-center gap-1 hover:underline">
                    {popular.location} <FaAngleDown />
                  </h6>
                ) : (
                  <h6 className="font-bold">{popular.location}</h6>
                )}
                <p>{popular.type}</p>
              </li>
            ))}
          </ul>
        </TETabsPane>
        <TETabsPane
          show={basicActive === "tab6"}
          className="h-[265px] lg:h-auto overflow-y-hidden"
        >
          <ul className="grid grid-cols-2 lg:grid-cols-6 grid-rows-2 gap-6 h-136">
            {popularInspirations.map((popular) => (
              <li key={popular.location} className="cursor-pointer">
                {popular.location === "Show more" ? (
                  <h6 className="font-bold flex items-center gap-1 hover:underline">
                    {popular.location} <FaAngleDown />
                  </h6>
                ) : (
                  <h6 className="font-bold">{popular.location}</h6>
                )}
                <p>{popular.type}</p>
              </li>
            ))}
          </ul>
        </TETabsPane>
        <TETabsPane
          show={basicActive === "tab7"}
          className="h-[265px] lg:h-auto overflow-y-hidden"
        >
          <ul className="grid grid-cols-2 lg:grid-cols-6 grid-rows-2 gap-6 h-136">
            {popularInspirations.map((popular) => (
              <li key={popular.location} className="cursor-pointer">
                {popular.location === "Show more" ? (
                  <h6 className="font-bold flex items-center gap-1 hover:underline">
                    {popular.location} <FaAngleDown />
                  </h6>
                ) : (
                  <h6 className="font-bold">{popular.location}</h6>
                )}
                <p>{popular.type}</p>
              </li>
            ))}
          </ul>
        </TETabsPane>
        <TETabsPane
          show={basicActive === "tab8"}
          className="h-[265px] lg:h-auto overflow-y-hidden"
        >
          <ul className="grid grid-cols-2 lg:grid-cols-6 grid-rows-2 gap-6 h-136">
            {popularInspirations.map((popular) => (
              <li key={popular.location} className="cursor-pointer">
                {popular.location === "Show more" ? (
                  <h6 className="font-bold flex items-center gap-1 hover:underline">
                    {popular.location} <FaAngleDown />
                  </h6>
                ) : (
                  <h6 className="font-bold">{popular.location}</h6>
                )}
                <p>{popular.type}</p>
              </li>
            ))}
          </ul>
        </TETabsPane>
        <TETabsPane
          show={basicActive === "tab9"}
          className="h-[265px] lg:h-auto overflow-y-hidden"
        >
          <ul className="grid grid-cols-2 lg:grid-cols-6 grid-rows-2 gap-6 h-136">
            {popularInspirations.map((popular) => (
              <li key={popular.location} className="cursor-pointer">
                {popular.location === "Show more" ? (
                  <h6 className="font-bold flex items-center gap-1 hover:underline">
                    {popular.location} <FaAngleDown />
                  </h6>
                ) : (
                  <h6 className="font-bold">{popular.location}</h6>
                )}
                <p>{popular.type}</p>
              </li>
            ))}
          </ul>
        </TETabsPane>
      </TETabsContent>
    </div>
  );
}
