import React, { Fragment, useEffect, useState } from "react";
import useHttpClient from '../../hooks/http-hook';
import ErrorGif from '../../images/error.gif';
import LoadingGif from '../../images/loading2.gif';

const CharsDetails = ({ urls, detail, placeholder }) => {
  const [charDetails, setCharDetails] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  const { isLoading, error, sendRequest } = useHttpClient();

  const getDetails = async (urls) => {
    try {
      const allResponses = await Promise.all(
        urls.map((url) => sendRequest(url.replace(/^http:/, "https:")))
      );
      return allResponses;
    } catch (err) {
      console.log({ error }, err);
    }
  };

  return (

    <Fragment>
      <div className='loadin-err'>
        {isLoading && <img src={LoadingGif} alt="Loading" />}
        {error && <img src={ErrorGif} alt="Error" />}
      </div>
      <h2
        onClick={() => {
          getDetails(urls).then((responses) => setCharDetails(responses));
          setShowDetails(!showDetails);
        }}
      >
        {detail}
      </h2>
      {!isLoading && !error && charDetails && (
        <div className={showDetails ? "charDetails" : " charDetails hide"}>
          {charDetails.length === 0 && <p>{placeholder}</p>}
          {charDetails.map((ch, i) => {
            return <p key={i}>{ch.title ? ch.title : ch.name}</p>;
          })}
        </div>
      )}

    </Fragment>
  );
};

export default CharsDetails;
