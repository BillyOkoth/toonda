import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='wrap'>
 <div className='search  '>
      <input
        className='searchTerm'
        type='search'
        placeholder='Enter to search item.'
        onChange={searchChange}
      />
    </div>

    </div>
   
  );
}

export default SearchBox;