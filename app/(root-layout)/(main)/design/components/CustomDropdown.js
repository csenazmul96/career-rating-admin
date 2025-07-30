"use client"

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const CustomDropdown = () => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState('선택');

    const options = ['전체', '이름', '연락처', '이메일'];

    const handleSelect = (option) => {
        setSelected(option);
        setOpen(false);
    };

    return (
        <div className="relative inline-block w-full text-left">
            <button
                onClick={() => setOpen(!open)}
                className={` w-full border border-borderColor h-[48px] px-4 py-2 bg-white flex justify-between items-center focus:outline-none ${open === true ? 'border-inputColor' : 'border-borderColor'}`}
            >
                <span className={`text-base ${selected === '선택' ? 'text-inputColor' : 'text-inputColor'} `}>
                  {selected}
                </span>
                <ChevronDown size={24} className="text-textSubColor" />
            </button>

            {open && (
                <div className="absolute mt-[-2px] w-full z-10 bg-white border border-borderColor">
                    {options.map((option) => (
                        <div
                            key={option}
                            onClick={() => handleSelect(option)}
                            className={`cursor-pointer px-4 py-3 text-base text-textColor hover:bg-primaryLightColor hover:text-themeColor ${
                                selected === option ? 'bg-primaryLightColor text-themeColor' : 'text-textColor'
                            }`}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomDropdown;
