import React from "react";
import {Field} from "@headlessui/react";
import {ErrorMessage} from "@/components/common/fieldset";
import TextEditor from "@/components/common/TextEditor";

const LmsStandardTextEditor = ({ required = false,
                                   label = '',
                                   singleElement = false,
                                   vertical = false,
                                   name = '',
                                   value = '',
                                   error = null,
                                   placeholder = '',
                                   changeDataHandler = (name, value) => {}}) => {
    return (
        <div className={` ${vertical ? "" : "flex items-center"} ${ singleElement ? "flex-[0_1_auto] w-full" : "flex-[0_1_auto]" }`}>
            {label &&
                <div className={`self-stretch flex items-center ${ vertical ? "pb-2" : "pl-6  min-w-[153px] bg-secondaryBgColor" }`}>
                    <span className="common-label-style"> {label} {required &&  <span className="text-dangerColor">*</span> } </span>
                </div>
            }
            <div className= {` ${singleElement ? "flex-[0_1_auto] w-full" : "flex-[0_1_auto]"}`}>
                <Field className="!pb-0">
                    <TextEditor name={name}
                                value={value}
                                placeholder={placeholder}
                                changeDataHandler={changeDataHandler}/>
                    {error && <ErrorMessage className="!mt-0">{error}</ErrorMessage>}
                </Field>
            </div>
        </div>
    );
}

export default LmsStandardTextEditor