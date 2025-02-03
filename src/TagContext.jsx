/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import propTypes from 'prop-types';

const TagContext = createContext(); // Create a context

export const useTag = () => useContext(TagContext); // Custom hook to use the tag context easily

export default function TagProvider({ children}) { // Provider component
    const [selectedtag, setSelectedTag] = useState("All");

    function handleTagClick(tag){ 
        setSelectedTag(tag);
      }
      return ( // Return the provider with the value of the context
        <TagContext.Provider value={{selectedtag, handleTagClick}}>
            {children}
        </TagContext.Provider>
      );
    
};

TagProvider.propTypes = {
    children: propTypes.node.isRequired,
  };
