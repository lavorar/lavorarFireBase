import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Rating from "./Rating";
import ButtonCard from "./ButtonCard";

const Card = (props) => {
  return (
    <div className="inline-block mt-3  overflow-ellipsis w-72 bg-white rounded-lg border border-gray-200 shadow-md ">

      <div className="flex flex-col  mx-1 pb-2 mt-3">
        <div className="flex  justify-between  mx-2">
          <div className="flex flex-row">
            <img
              className="mb-5 w-14 h-14 p-4 rounded-full shadow-lg bg-zinc-500 "
              src="logo.png"
              alt="img"
            />

            <div className="flex flex-col">
              <div className="flex justify-center text-sm">
                Rubilar Francisco
                <VerifiedIcon fontSize="small" className="pl-1" />
              </div>
              <div className="flex justify-between pt-2">
                <LocationOnIcon fontSize="small" /> <div className="text-sm">Neuquen,neuquen</div>
              </div>
            </div>
          </div>
          <div className="flex pb-2 text-orange-brand ">
            $1500/hr
          </div>
        </div>

        <Rating />

        <h5 className=" border-0 pt-2 border-t mx-2  border-gray-500 mb-1 px-1 text-base font-medium text-gray-900 dark">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
          laboriosam, quod aut officiis ea deleniti repellat nisi delectus
          magnam reiciendis?
        </h5>
        <div>
          <ButtonCard text="Categoria" />
          <ButtonCard text="Categoria" />
          <ButtonCard text="Categoria" />
        </div>

        <div className="flex flex-wrap mx-2 border-0 pt-2 border-t  border-gray-500 justify-end space-x-3 ">
          <button
            type="button"
            className="py-2 px-3 mr-2 my-2 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Contratar
          </button>
          <button
            type="button"
            className="focus:outline-none text-white bg-orange-brand hover:bg-yellow-500 focus:ring-2 focus:ring-orange-high dark:focus:ring-orange-high font-medium rounded-lg text-base px-3 py-2 mr-2 my-2 "
          >
            Mensaje
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
