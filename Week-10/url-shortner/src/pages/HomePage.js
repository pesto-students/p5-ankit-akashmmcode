import { useState } from "react";
import InputComp from "../components/InputComp";
import { validateurl } from "../utils/validations";
import "./HomePage.css";

function HomePage() {
  const [loader, setLoader] = useState("false");
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const validated = validateurl(input);

  const fetchData = async () => {
    try {
      setLoader("true");
      const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${input}`);
      const urlres = await res.json();
      setLoader("false");
      setResult(urlres.result.full_short_link);
    } catch (err) {
      alert(err);
    }
  };

  const handleClick = () => {
    fetchData();
  };

  return (
    <>
      <div className="split left">
        <div className="left-text-outer-div">
          <h1 className="left-text">SHORTER =BETTER</h1>
        </div>
      </div>
      <InputComp
        name="url"
        placeholder="PLEASE ENTER YOUR URL HERE"
        onInputValue={(e) => {
          return setInput(e.target.value);
        }}
        value={input}
        onsubmit={handleClick}
        loaderstatus={loader}
        resultstatus={result}
        validated={input ? validated : true}
        validationText="Enter a valid url"
      />
    </>
  );
}

export default HomePage;
