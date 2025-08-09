"use client";
import {GraduationCap, Languages, Pencil, Trash2} from "lucide-react";
import {Button} from "@/components/common/button";
import React from "react";
import {confirmAlert} from "react-confirm-alert";
import {LmsToastMessage} from "@/components/common/LmsToastMessage";
import ConfirmPopup from "@/components/common/confirmAlert/ConfirmPopup";
import {deleteEmployeeLanguage} from "@/utils/api/career/employeeLanguageApi";


function LanguageItem({language, id, userId, setEditItem=()=>{}}) {

    const deleteLanguage = async () => {
        confirmAlert({
            title: "Delete",
            message:
                "Do you really want to delete this evaluation?",
            buttons: [
                {
                    label: "Cancel",
                    buttonLabel: "Cancel",
                    onClick: () => {
                        return false;
                    },
                },
                {
                    label: "Ok",
                    buttonLabel: "Ok",
                    onClick: async () => {
                        try {
                            const request = await deleteEmployeeLanguage(language.id);

                            if (request && request.status === 200) {
                                LmsToastMessage('Delete.', 'Language has been deleted successfully.', 'success')
                            }
                        } catch (error) {
                            console.error("Error in deleteEmployeeLanguage:", error);
                        }
                    },
                },
            ],
            customUI: ({ title, message, onClose, buttons }) => {
                return (
                    <ConfirmPopup
                        title={title}
                        message={message}
                        onClose={onClose}
                        onConfirm={buttons}
                    />
                );
            },
        });
    }

    return (
        <div className={`shadow-dashboardShadow relative flex-1 min-w-0 bg-white py-[1.625rem] px-8 group`}>
            <div className="flex gap-x-4   ">
                <div className="icon size-[60px] flex-shrink-0 bg-secondaryBgColor flex items-center justify-center rounded-[12px]">
                    <Languages className={`text-themeColor`} size={32} />
                </div>
                <div className="text flex flex-col gap-1 w-full">
                    <p className={`text-baseNormal text-textSubColor`}>{language.language}</p>
                    {language.proficiency_level && <span>Proficiency Level: <span className={"font-bold"}>{language.proficiency_level}</span> </span>}
                    {language.certification && <span>Certification: <span className={"font-bold"}>{language.certification}</span></span>}
                    <div className={'flex items-center  justify-between mt-2 w-full text-13'}>
                        {language.reading &&
                            <div className={'flex items-center gap-1'}>
                                 <span>R:</span>
                                 <span className={'font-bold'}>{language.reading}</span>
                            </div>
                        }
                        {language.writing &&
                            <div className={'flex items-center gap-1'}>
                                 <span>W:</span>
                                 <span className={'font-bold'}>{language.writing}</span>
                            </div>
                        }
                        {language.speaking &&
                            <div className={'flex items-center gap-1'}>
                                 <span>S:</span>
                                 <span className={'font-bold'}>{language.speaking}</span>
                            </div>
                        }
                        {language.listening &&
                            <div className={'flex items-center gap-1'}>
                                 <span>L:</span>
                                 <span className={'font-bold'}>{language.listening}</span>
                            </div>
                        }
                    </div>
                    {language.score &&
                        <Button color="primaryRoundedSmall" className={`!bg-transparent !text-themeColor whitespace-nowrap flex-shrink-0 cursor-auto w-[50px]`}>
                            {language.score}
                        </Button>
                    }
                </div>
            </div>
            <div  className="opacity-0 absolute right-2 top-2 invisible transition-opacity duration-200 group-hover:opacity-100 group-hover:visible">
             <Button onClick={()=>setEditItem(language)} color={"primaryLightRoundedSmall"} className={'!h-10  rounded-full'}><Pencil size={16} /> </Button>
            </div>
            <span className="opacity-0 absolute right-2 bottom-2 invisible transition-opacity duration-200 group-hover:opacity-100 group-hover:visible">
                <Button onClick={deleteLanguage} color={"primaryLightRoundedSmall"} className={'!h-10  rounded-full !text-dangerDeppColor'}><Trash2 size={16} /> </Button>
            </span>
        </div>
    );
}

export default LanguageItem;