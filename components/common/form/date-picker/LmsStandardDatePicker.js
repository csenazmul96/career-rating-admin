import { ErrorMessage } from "@/components/common/fieldset";
import * as Headless from "@headlessui/react";
import { format } from "date-fns";
import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
// import Calendar from "react-calendar";
import './custom-datepicker.css';
import {Calendar, ChevronDown} from "lucide-react";
import DatePickerMonthSelect from "@/components/common/form/date-picker/DatePickerMonthSelect";
import DatePickerYearSelect from "@/components/common/form/date-picker/DatePickerYearSelect";
const LmsStandardDatePicker = ({
                                   required = false,
                                   fieldClass = "",
                                   singleElement = false,
                                   label = "",
                                   name = "",
                                   value = "",
                                   error = null,
                                   disabled = false,
                                   placeholder = "",
                                   vertical = false,
                                   selectedStartDate = null,
                                   selectedEndDate = null,
                                   changeDataHandler = (name, value) => {},
                               }) => {
    const [currentDate, setDate] = useState(value ? value : "");
    const datePickerRef = useRef(null); // Create a ref for the DatePicker

    const handleIconClick = () => {
        if (datePickerRef.current) {
            datePickerRef.current.setOpen(true); // Programmatically open the DatePicker
        }
    };
    useEffect(() => {
        if (value) {
            setDate(value);
        } else {
            setDate("");
        }
    }, [value]);

    const selectDate = (date) => {
        if (date) {
            setDate(format(date, "yyyy-MM-dd"));
            changeDataHandler(name, format(date, "yyyy-MM-dd"));
        } else {
            setDate("");
            changeDataHandler(name, "");
        }
    };


    const years = [2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];
    const months = [
        '1월', '2월', '3월', '4월', '5월', '6월',
        '7월', '8월', '9월', '10월', '11월', '12월'
    ]

    const [showMonthPicker, setShowMonthPicker] = useState(false);
    const [showYearPicker, setShowYearPicker] = useState(false);

    return (
        <div className={`flex items-center ${
                singleElement ? "flex-[0_1_auto] w-full" : "flex-[0_1_auto]"
            }`}
        >
            {label && (
                <div className="pl-6 flex items-center min-w-[153px] bg-secondaryBgColor self-stretch">
                  <span className="common-label-style">
                    {label}
                      {required && <span className="text-dangerColor">*</span>}
                  </span>
                </div>
            )}
            <div className={` ${
                    singleElement ? "flex-[0_1_auto] w-full" : "flex-[0_1_auto]"
                }`}
            >
                <Headless.Field
                    className={`!pb-0 relative  ${fieldClass ? fieldClass : " "}`}
                >
                    <DatePicker
                        calendarClassName={"custom-datepicker "}
                        dateFormat="yyyy-MM-dd"
                        selectsStart={name !== 'endDate'}
                        selectsEnd={name === 'endDate'}
                        startDate={selectedStartDate}
                        endDate={selectedEndDate}
                        minDate={name === 'endDate' ? selectedStartDate : null}
                        renderCustomHeader={({
                                                 date,
                                                 changeYear,
                                                 changeMonth,
                                                 decreaseMonth,
                                                 increaseMonth,
                                                 prevMonthButtonDisabled,
                                                 nextMonthButtonDisabled,
                                             }) => {
                            let year = ""
                            let month = ""
                            if (date) {
                                let newDate = new Date(date);
                                year = newDate.getFullYear();
                                month = newDate.getMonth() + 1;
                            }

                            return ( <div className={'w-full contents '}>
                                    <div className={'flex w-full min-w-full'}>
                                        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled} className={""}></button>
                                        <button onClick={()=>setShowYearPicker(!showYearPicker)} className={`inline-flex `}>
                                        <span className={``}>
                                           {`${year}년 ${month}월`}
                                        </span>
                                            <ChevronDown size={24} className="text-textSubColor" />
                                        </button>
                                        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled} className={""}></button>
                                    </div>


                                    <div className={'flex w-full min-w-full absolute'}>
                                        {showYearPicker &&
                                            <div className="relative inline-block w-full min-w-full text-left">
                                                <div className="mt-[-2px] w-full z-10 bg-white border border-borderColo">
                                                    {years.map((option) => (
                                                        <div
                                                            key={option}
                                                            onClick={() => {
                                                                changeYear(option)
                                                                setShowYearPicker(false);
                                                                setShowMonthPicker(true);
                                                            }}
                                                            className={`cursor-pointer px-4 py-3 text-base text-textColor hover:bg-primaryLightColor hover:text-themeColor `}>
                                                            {option}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        }
                                        {showMonthPicker &&
                                            <div className="relative inline-block w-full min-w-full text-left bg-white  ">
                                                <div className="grid grid-cols-3 gap-4 cursor-pointer  pb-10">
                                                    {months.map((option) => (
                                                        <div
                                                            key={option}
                                                            onClick={() => {
                                                                changeMonth(months.indexOf(option))
                                                                setShowYearPicker(false);
                                                                setShowMonthPicker(false);
                                                            }}
                                                            className={``}>
                                                            {option}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            )}}
                        selected={currentDate}
                        onChange={(date) => {
                            selectDate(date)
                        }}
                    />
                    <span onClick={handleIconClick} className="absolute right-3 transform top-1/2 -translate-y-1/2" >
                        <Calendar size={20} color="#8e8e8e" />
                    </span>

                    {error && (
                        <ErrorMessage className="!mt-0 absolute leading-15">
                            {error}
                        </ErrorMessage>
                    )}
                </Headless.Field>
            </div>
        </div>
    );
};
export default LmsStandardDatePicker;