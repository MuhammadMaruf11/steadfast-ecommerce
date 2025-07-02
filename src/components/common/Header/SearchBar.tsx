'use client';

import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Image from "next/image";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        if (searchTerm.trim()) {
            console.log("Search for:", searchTerm);
            // You can route or filter product list here
        }
    };

    return (
        <div className="w-4/6 flex mx-auto">
            <Input
                type="text"
                placeholder="Search for anything...."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 bg-white text-[#475569] placeholder:text-[#475569] rounded-tl-sm rounded-bl-sm"
            />
            <Button onClick={handleSearch} className="rounded-tr-sm rounded-br-sm">
                <Image src='/img/icons/search.png' width={20} height={20} alt="search_icon" />
            </Button>
        </div>
    );
};

export default SearchBar;
