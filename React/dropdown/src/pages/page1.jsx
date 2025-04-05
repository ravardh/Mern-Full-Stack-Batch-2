import React, { useEffect, useState } from "react";

const Page1 = () => {
  const [type, setType] = useState(null);
  const [language, setLanguage] = useState(null);
  const [genre, setGenre] = useState(null);
  const [loading, setLoading] = useState();

  const [selectedData, setSelectedData] = useState({
    type: "",
    language: "",
    genre: "",
  });

  useEffect(() => {
    setLoading(true);
    fetch("/movie.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setType(data.type);
        setLanguage(data.language);
        setGenre(data.genre);
      })
      .catch((err) => {
        console.error("Error Occured in fetching Data", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("Submit Button Clicked");
    console.log("Type : ", selectedData.type);
    console.log("Langauge : ", selectedData.language);
    console.log("Genre : ", selectedData.genre);
  };

  const handelChange= (e)=>{
    const {name,value}=e.target;
    setSelectedData((prev)=>({...prev,[name]:value}));
  }

  //   console.log(type, language, genre);

  return (
    <>
      <div className="container bg-primary p-5 mx-auto my-5 rounded">
        <form onSubmit={handelSubmit}>
          <div className="d-flex gap-4">
            <select
              name="type"
              className="form-control"
              value={selectedData.type}
              onChange={handelChange}
            >
              <option value="">Select Movie Type </option>
              {loading
                ? console.log("Loading Data")
                : type &&
                  type.map((element, index) => (
                    <option key={index} value={element}>
                      {element}
                    </option>
                  ))}
            </select>

            <select
              name="language"
              className="form-control"
              value={selectedData.language}
              onChange={handelChange}
            >
              <option value="">Select Movie Langauge </option>
              {loading
                ? console.log("Loading Data")
                : language &&
                  language.map((element, index) => (
                    <option key={index} value={element}>
                      {element}
                    </option>
                  ))}
            </select>

            <select
              name="genre"
              className="form-control"
              value={selectedData.genre}
              onChange={handelChange}
            >
              <option value="">Select Movie Genre </option>
              {loading
                ? console.log("Loading Data")
                : genre &&
                  genre.map((element, index) => (
                    <option key={index} value={element}>
                      {element}
                    </option>
                  ))}
            </select>

            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Page1;
