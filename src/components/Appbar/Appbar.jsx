import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";

const Appbar = () => {
  return (
    <div
      className="
            
            h-full 
            w-full 
            bg-dark-gold
            px-4 
            relative
            flex justify-center items-end
          "
    >
      <div
        className="
            absolute
            left-4
            text-3xl
            pb-3
            text-white-gold
        "
      >
        LOGO
      </div>
      {/* NAV Container */}
      <nav
        className="
              flex 
              flex-col 
              items-center 
              justify-between 
              gap-4
            "
      >
        {/* LINKS group */}
        <div
          className="
                flex 
                flex-row 
                gap-10
              "
        >
          <a
            href="#"
            className="
                  border-b-[6px] 
                  border-white 
                  px-3 
                  pb-4 
                  text-xl 
                  font-medium 
                  italic 
                  text-white-gold"
          >
            Home
          </a>
          <a
            href="#"
            className="
                  text-xl 
                  font-medium 
                  text-white-gold
                  "
          >
            LINK-1
          </a>
          <a
            href="#"
            className="
                  text-xl 
                  font-medium 
                  text-white-gold
                  "
          >
            LINK-2
          </a>
          <a
            href="#"
            className="
                  text-xl 
                  font-medium 
                  text-white-gold
                  "
          >
            LINK-3
          </a>
          <a
            href="#"
            className="
                  text-xl 
                  font-medium 
                  text-white-gold
                  "
          >
            <GlobeAsiaAustraliaIcon className="h-8 w-8 text-white-gold" />
          </a>
          <a
            href="#"
            className="
                  text-xl 
                  font-medium 
                  text-white-gold
                  "
          >
            <HeartIcon
              className="
                    h-8 
                    w-8 
                    text-white-gold"
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Appbar;
