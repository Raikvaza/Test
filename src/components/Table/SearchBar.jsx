import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCompanySymbol } from "../../features/store/slices/companyDataSlice";
import { setReportsFetched } from "../../features/store/slices/stockSlice";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [focused, setFocused] = useState(false);
  const { data } = useSelector((state) => state.commonStock);
  const dispatch = useDispatch();
  // Filter the data
  const filteredData = data
    ? data.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  // Function to handle item click
  const handleItemClick = (item) => {
    setFocused(false); // Remove focus to hide the dropdown
    dispatch(updateCompanySymbol(item.symbol));
    dispatch(setReportsFetched(false));
  };

  // Handle onBlur with a slight delay
  const handleBlur = () => {
    setTimeout(() => {
      setFocused(false);
    }, 300);
    // Clearing the search term
    setSearchTerm("");
  };
  return (
    <div
      className="
        relative 
        w-full 
        h-16 
        border-[1px] 
        rounded-t-xl 
        border-black 
        bg-blue-300"
    >
      <input
        type="text"
        placeholder="  Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={handleBlur}
        className="w-full rounded-t-xl h-full p-2"
      />
      <div className="absolute inset-y-0 right-5 pl-2 flex items-center pointer-events-none">
        <MagnifyingGlassIcon className="h-10 w-10 text-gray-400" />
      </div>
      {focused && filteredData.length > 0 && (
        <div
          className="
            absolute 
            z-30 
            w-full 
            h-60 
            overflow-auto 
            mt-2 border-t 
            border-black 
            bg-white 
            rounded-y-lg"
        >
          {filteredData.map((item) => (
            <div
              key={item.symbol}
              className="
                p-2 
                cursor-pointer 
                z-40
                hover:bg-gray-100
              "
              onClick={() => handleItemClick(item)}
            >
              {item.name} ({item.symbol})
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
