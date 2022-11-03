import React, { useState} from 'react';
import { useQuery, gql } from "@apollo/client";
import { Quote } from './quote';
import Button from '@mui/material/Button';
import { Input } from '@mui/material';

const SEARCH_QUERY = gql`
    query Search($text: String){
        search(text: $text){
            author
            quote
        }
    }
`;

interface Quotes {
    search : Quote[]
};


const SearchQuote = ( { text }: any ) => {
  
 const [name, setName] = useState("");

  const { loading, error, data, refetch } = useQuery<Quotes>(SEARCH_QUERY, {
    variables: { text: "xxx" },
}); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return (
    <>
    <div>
    <Input defaultValue="Hello world" type="text" value={name}  onChange={(e) => setName(e.target.value)}/>
    <Button variant="outlined" type="submit" onClick={() => refetch({ text : name } )}>Search by author's name</Button>
    </div>     
      {    
        data.search.map(quote =>
            <div>
            <h3>{quote.quote}</h3>
            <h4>{quote.author}</h4>
            </div>
        )
    }
    </>
  );
};

export default SearchQuote;




