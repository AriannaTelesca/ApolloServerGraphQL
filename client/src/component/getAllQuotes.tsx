import React, { useState} from 'react';
import { useQuery, gql } from "@apollo/client";
import { Quote } from "./quote";
import Button from '@mui/material/Button';

 interface Quotes {
    getQuotes: Quote[];
  }
  
  const QUOTES_QUERY = gql`{
      getQuotes{
        author
        quote
      }
  }
  `;

 const GetAllQuotes = () => {

    let rand: number  = Math.floor(Math.random() * 99);
    const [n, setN] = useState(rand);
  
    const changeQuote = () => {
      setN(n+1);
    }


  const { loading, error, data } = useQuery<Quotes>(QUOTES_QUERY);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return (
    <div>
    <h1>{data.getQuotes[n].quote}</h1>
    <h3 className='author'>{data.getQuotes[n].author}</h3>
   <p>
    <Button variant="outlined" onClick={changeQuote}>Change quote</Button>
    </p> 
    </div>
  );
};

export default GetAllQuotes;



