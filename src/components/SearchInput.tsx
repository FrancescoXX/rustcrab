import { Search } from 'lucide-react'
import React, { useState } from 'react'

type SearchInputProps={
  data:Array<Object>,
  globalFunc:([]) => void,
  searchBy:string
}

function SearchInput({data,globalFunc,searchBy}:SearchInputProps){

 const [searchTerm,setSearchTerm] = useState('');

  const handleSearch = (event:React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    
    const checkForFields = searchBy.split(',');
      
    const filteredData = data.filter((item)=>{
        for (const [key,value] of Object.entries(item)){
          if(checkForFields.includes(key)){
            if(value.toLowerCase().includes(term)) return item;
          }
        }
    })
      
    globalFunc(filteredData);
  }

  return <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search tools..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full p-3 pl-10 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>
}

export default SearchInput