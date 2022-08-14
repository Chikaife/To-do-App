const Search = ({search, setSearch}) => {
  return (
    
         <form className="searchForm" 
         onSubmit={(e) =>e.preventDefault}
        >
            <label htmlFor="search">Search</label>
        <input 
        type="text" 
        placeholder="Search Here"
        id="search"
        role='searchbox'
        value={search}
        onChange={(e) => setSearch(e.target.value)
        }
        
        />
        </form>
   
  )
}

export default Search