import {Search} from 'lucide-react'
import { books } from '@/data/books'
import { lessons } from "@/data/lessons";
import { dsas } from "@/data/dsa"; 
import { tools } from "@/data/tools";
import { useState } from 'react';

type searchProps = {
  name:string,
  globalFunc:(filteredData: global[]) => void
}

type global = {
  name?:string,
  title?:string,
  description?:string,
  data_structure?:string,
}

function GlobalSearchInput({name,globalFunc}:searchProps){
  
  const data = name === 'books'? books :
  name === 'lessons' ? lessons : 
  name === 'data structures'?  dsas :
  name ==='tools' ? tools : []

  const [globalSearchTerm,setGlobalSearchTerm] = useState(''); 

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    const globalTerm = event.target.value.toLowerCase();
    setGlobalSearchTerm(globalTerm);
    
    const filteredData = data.filter((item:global) => {
      return item.name?.toLowerCase().includes(globalTerm) || 
      item.title?.toLowerCase().includes(globalTerm) || 
      item.description?.toLowerCase().includes(globalTerm) ||
      item.data_structure?.toLowerCase().includes(globalTerm)
    });

    globalFunc(filteredData)
  }

  return (
    <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder={` Search ${name}...`}
              value={globalSearchTerm}
              onChange={handleSearch}
              className="w-full p-3 pl-10 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <Search 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
    </div>

  )
}

export default GlobalSearchInput
