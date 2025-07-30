import React from 'react';
import {Checkbox, CheckboxField} from "@/components/common/checkbox";
import {Label} from "@/components/common/fieldset";

const SearchResult = ({setIsSeachVisible}) => {

    const handleClick = ()=> {
        setIsSeachVisible(false);
    }
    return (
        <div>
            <ul onClick={handleClick}
                className={`group w-full border border-borderColor custom-scrollbar max-h-[250px] absolute top-[calc(100%-1px)] left-0 bg-white z-10`}>

                <li className="flex  hover:bg-primaryLightColor hover:text-themeColor  items-center w-full border-b border-borderColor cursor-pointer p-4">
                    <div className="flex ">
                        <CheckboxField>
                            <Checkbox color="lmscheckbox" name="discoverability" value="show_on_events_page"
                                      defaultChecked/>
                            <Label className="font-normal"></Label>
                        </CheckboxField>
                    </div>
                    <div className="flex gap-x-3">
                        <span className={`text-base text-textSubColor hover:text-themeColor `}>홍길동</span>
                        <span>010-1234-5678</span>
                    </div>
                </li>
                <li className="flex  hover:bg-primaryLightColor hover:text-themeColor  items-center w-full border-b border-borderColor cursor-pointer p-4">
                    <div className="flex ">
                        <CheckboxField>
                            <Checkbox color="lmscheckbox" name="discoverability" value="show_on_events_page"
                                      defaultChecked/>
                            <Label className="font-normal"></Label>
                        </CheckboxField>
                    </div>
                    <div className="flex gap-x-3">
                        <span className={`text-base text-textSubColor hover:text-themeColor `}>홍길동</span>
                        <span>010-1234-5678</span>
                    </div>
                </li>
                <li className="flex  hover:bg-primaryLightColor hover:text-themeColor  items-center w-full border-b border-borderColor cursor-pointer p-4">
                    <div className="flex ">
                        <CheckboxField>
                            <Checkbox color="lmscheckbox" name="discoverability" value="show_on_events_page"
                                      defaultChecked/>
                            <Label className="font-normal"></Label>
                        </CheckboxField>
                    </div>
                    <div className="flex gap-x-3">
                        <span className={`text-base text-textSubColor hover:text-themeColor `}>홍길동</span>
                        <span>010-1234-5678</span>
                    </div>
                </li>

                <li className="flex  hover:bg-primaryLightColor hover:text-themeColor  items-center w-full border-b border-borderColor cursor-pointer p-4">
                    <div className="flex ">
                        <CheckboxField>
                            <Checkbox color="lmscheckbox" name="discoverability" value="show_on_events_page"
                                      defaultChecked/>
                            <Label className="font-normal"></Label>
                        </CheckboxField>
                    </div>
                    <div className="flex gap-x-3">
                        <span className={`text-base text-textSubColor hover:text-themeColor `}>홍길동</span>
                        <span>010-1234-5678</span>
                    </div>
                </li>

                <li className="flex  hover:bg-primaryLightColor hover:text-themeColor  items-center w-full border-b border-borderColor cursor-pointer p-4">
                    <div className="flex ">
                        <CheckboxField>
                            <Checkbox color="lmscheckbox" name="discoverability" value="show_on_events_page"
                                      defaultChecked/>
                            <Label className="font-normal"></Label>
                        </CheckboxField>
                    </div>
                    <div className="flex gap-x-3">
                        <span className={`text-base text-textSubColor hover:text-themeColor `}>홍길동</span>
                        <span>010-1234-5678</span>
                    </div>
                </li>

            </ul>
        </div>
    );
};

export default SearchResult;