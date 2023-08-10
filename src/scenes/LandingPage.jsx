import Table from "../components/Table/Table";
import Aside from "../components/Aside/Aside";
import Graph from "../components/Graph/Graph";
import Appbar from "../components/Appbar/Appbar";
const LandingPage = () => {
  return (
    // CONTAINER
    <div
      className="
            w-screen
            min-h-screen
            flex
            flex-col
            justify-center
            items-center
            bg-white-gold
            "
    >
      {/* APPBAR / HEADER */}
      <div
        className="
            w-full h-24
            shadow-lg
            "
      >
        <Appbar />
      </div>
      {/* BODY CONTAINER */}
      <div
        className="
            min-h-[80vh]
            w-[95%]
            m-4
            flex
            flex-row 
            justify-evenly
            items-stretch
            gap-4
        "
      >
        {/* LEFT BLOCK */}
        <div
          className="
                flex-1
            "
        >
          <Table />
        </div>
        {/* RIGHT BLOCK */}
        <div
          className="
                flex-1
                flex
                flex-col
                justify-center
                items-center
                gap-4
            "
        >
          <Aside />
          <Graph />
        </div>
      </div>

      {/* FOOTER */}
      <div
        className="
                w-full
                h-32
                flex
                items-center
                font-sans
                font-extrabold
                text-2xl
                text-white-gold
                justify-center
                bg-dark-gold
        "
      >
        USELESS FOOTER
      </div>
    </div>
  );
};

export default LandingPage;
