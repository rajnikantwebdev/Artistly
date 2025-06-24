import React from 'react'
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Trash2 } from "lucide-react";

const Filters = ({title, filtersValue, position, setPosition}) => {  
    
  const handleFilterRemove = (e) => {
    e.stopPropagation();
    setPosition(null);
  };
    return (
      <div className="relative inline-flex items-center gap-1">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              {position === null ? title : position}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-white">
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={position}
              onValueChange={setPosition}
            >
              {filtersValue.map((filter, index) => (
                <DropdownMenuRadioItem
                  className="hover:bg-gray-200 cursor-pointer"
                  key={index}
                  value={filter}
                >
                  {filter}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        {position !== null && (
          <Trash2
            className="w-6 h-6 text-red-500 cursor-pointer"
            onClick={handleFilterRemove}
          />
        )}
      </div>
    );
}

export default Filters