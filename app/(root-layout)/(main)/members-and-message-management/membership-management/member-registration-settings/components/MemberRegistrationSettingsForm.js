"use client"
import {Radio, RadioField, RadioGroup} from "@/components/common/radio";
import {Label} from "@/components/common/fieldset";
import React, {useEffect, useState} from "react";
import {getMemberRegistrationsSettingsUpdate} from "@/utils/api/memberManagementRequest";
import {LmsToastMessage} from "@/components/common/LmsToastMessage";

const MemberRegistrationSettingsForm = ({settings}) => {
    const [allSettings, setAllSettings] = useState([])
    const [form, setForm] = useState({
        "item": "password",
        "itemType": "essential",
        "use": "use"
    })

    useEffect(()=>{
        if(settings.length){
            let chunkList = chunkArray(settings, 3)
            setAllSettings(chunkList)
        }
    }, [settings])

    const chunkArray = (arr, size) => {
        return arr.reduce((chunks, item, index) => {
            const chunkIndex = Math.floor(index / size);
            if (!chunks[chunkIndex]) {
                chunks[chunkIndex] = []; // Create a new chunk
            }
            chunks[chunkIndex].push(item);
            return chunks;
        }, []);
    };

    const getOnchange = async (val, setting) => {
        sendUpdateRequest(val, setting)
        // confirmAlert({
        //     title: 'Confirmation',
        //     message: 'Do you want to make this changes?',
        //     buttons: [
        //         {
        //             label: '취소',
        //             onClick: () => {
        //                 return false;
        //             }
        //         },
        //         {
        //             label: '확인',
        //             onClick: () => {
        //                 sendUpdateRequest(val, setting)
        //             }
        //         }
        //     ],
        //     customUI: ({ title, message, onClose , buttons}) => {
        //         return (
        //             <ConfirmPopup title={title} message={message} onClose={onClose} onConfirm={buttons} />
        //         );
        //     }
        // });
    }

    const sendUpdateRequest = async (val, setting)=>{
        try {
            let response =  await getMemberRegistrationsSettingsUpdate({...setting, use: val}, setting.id)
            if (response.status === 'success'){
                LmsToastMessage('성공.', 'Status has been updated!', 'success')
            }
        }catch (e){
            LmsToastMessage('오류.', "문제가 발생했습니다.", 'error')
        }
    }

    return(
        <div className="membership-registration-item-settingsPage mt-3 py-7 border-t border-commonBorderColor">
            {allSettings && allSettings.map((settings, index)=>(

                <div className="flex gap-4 py-3" key={`key-${index}`}>
                    {settings.map((setting, i)=> (
                        <div key={`setting_${i}`} className="flex flex-1 items-center justify-between border border-commonBorderColor py-3 px-6 max-w-">
                            <div className="left ">
                                <span className="common-label-style">{setting.name ? setting.name : setting.item}</span>
                            </div>
                            <div className="right ">
                                <RadioGroup className="flex  space-x-6" name={'use'} defaultValue={setting.use}>
                                    <RadioField>
                                        <Radio color="lmsradio"
                                               onClick={()=>getOnchange('yes', setting)}
                                               de
                                               value={'yes'} />
                                        <Label className="font-normal">필수</Label>
                                    </RadioField>
                                    {setting.itemType === 'Select' &&
                                        <RadioField>
                                            <Radio color="lmsradio"
                                                   value={'no'}
                                                   onClick={()=>getOnchange('no', setting)} />
                                            <Label className="font-normal">선택</Label>
                                        </RadioField>
                                    }
                                </RadioGroup>
                            </div>
                        </div>
                    ))}
                </div>
            ))}

        </div>
    );
}

export default MemberRegistrationSettingsForm