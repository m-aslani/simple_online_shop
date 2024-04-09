import { TfiSearch } from 'react-icons/tfi'
import { createQueryObject } from '../helpers/helper';

function SearchBox({search , setSearch , setQuery}) {

    const searchHandler = () => {
        setQuery((query) => createQueryObject(query , {search}));
      };


  return (
    <div>
    <input
      type="text"
      placeholder="Search..."
      value={search}
      onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
    />
    <button onClick={searchHandler}>
      <TfiSearch />
    </button>
  </div>
  )
}

export default SearchBox