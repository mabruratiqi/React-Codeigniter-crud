const Search =({searchTerm,setSearchTerm})=>{

        const handleChange = event => {
                setSearchTerm(event.target.value);
        };     

        return (
        <>
                <div>
                <input className="input" type="text" placeholder="Search Properties by Title or Price" value={searchTerm} onChange={handleChange} />    
                </div>
        </>
        )

}
export default Search;