"use client";

const FilterForm = ({children}) => {
    return (
        <div className="member-list-form bg-secondaryBgColor border-t border-commonBorderColor py-4 px-8 ">
            {children}
        </div>
    );
};

export default FilterForm;