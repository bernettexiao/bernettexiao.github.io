import React, { useState, useEffect, useCallback } from 'react';
import { FormControl } from 'react-bootstrap';
import _ from 'lodash';

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const debouncedSearch = useCallback(
    _.debounce((q: string) => {
      onSearch(q);
    }, 500),
    [onSearch]
  );

  useEffect(() => {
    debouncedSearch(search);
    return () => {
      debouncedSearch.cancel();
    };
  }, [search, debouncedSearch]);

  return (
    <FormControl
      type="text"
      placeholder="Search for a book"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBox;
