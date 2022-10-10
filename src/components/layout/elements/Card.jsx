import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Rating from "./Rating";
import ButtonCard from "./ButtonCard";

const Card = (props) => {
  return (
    <div className=" mt-3 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md ">
      <div className="flex flex-col  pb-10 mt-3">
        <div className="flex flex-row  px-2">
          <img
            className="mb-5 w-14 h-14 rounded-full shadow-lg bg-zinc-500 "
            src="logo.png"
            alt="img"
          />
          <div className="flex flex-col">
            <div className="flex justify-center ml-2 text-sm">
              Rubilar Francisco
            </div>
            <div className="flex justify-between mt-2">
              <LocationOnIcon /> <div className="text-sm">Neuquen,neuquen</div>
            </div>
          </div>
          <VerifiedIcon fontSize="small" className="ml-1" />

          <div className="flex justufy-items-end ml-4 text-orange-brand ">
            $1500/hr
          </div>
        </div>
        <Rating />

        <hr />
        <h5 className="  mb-1 px-1 text-base font-medium text-gray-900 dark">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
          laboriosam, quod aut officiis ea deleniti repellat nisi delectus
          magnam reiciendis?
        </h5>
        <div>
          <ButtonCard text="Categoria" />
          <ButtonCard text="Categoria" />
          <ButtonCard text="Categoria" />
        </div>
        <hr />

        <div className="flex mt-4 mr-2 justify-end space-x-3 md:mt-6">
          <button
            type="button"
            class="py-2.5 px-5 mr-2 mb-2 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Contratar
          </button>
          <button
            type="button"
            class="focus:outline-none text-white bg-orange-brand hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
          >
            Mensaje
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
