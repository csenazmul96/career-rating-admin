"use client";
import {Pencil, ShieldUser, Trash2} from "lucide-react";

import {Button} from "@/components/common/button";
import React from "react";
import {confirmAlert} from "react-confirm-alert";
import {LmsToastMessage} from "@/components/common/LmsToastMessage";
import ConfirmPopup from "@/components/common/confirmAlert/ConfirmPopup";
import {deleteTrainings} from "@/utils/api/career/trainingsAPI";


function TrainingCard({training, userId, id, hangleCreateNewButtonClick}) {
    const deleteTraining = async () => {
        confirmAlert({
            title: "Delete",
            message:
                "Do you really want to delete this Training?",
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
                            const request = await deleteTrainings(training.id);
                            if (request && request.status === 200) {
                                LmsToastMessage('Delete', 'Training has been deleted successfully.', 'success')
                            }
                        } catch (error) {
                            console.error("Error in deleteEvaluation:", error);
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
                    <ShieldUser className={`text-themeColor`} size={32} />
                </div>
                <div className="text flex flex-col gap-1 w-full">
                    <p className={`text-baseNormal text-textSubColor`}>{training.name}</p>
                    <span>{training.organization_name}</span>
                    <span className={`text-13 text-textColor`}>{training.start_date.replaceAll('-', '.')} - {training.is_continue ?
                        <Button color="primaryRoundedSmall" className={`!bg-transparent !text-themeColor whitespace-nowrap flex-shrink-0 cursor-auto`}>
                            Continue
                        </Button>
                        : training.end_date?.replaceAll('-', '.')}</span>
                </div>
            </div>
            <div className="opacity-0 absolute right-2 top-2 invisible transition-opacity duration-200 group-hover:opacity-100 group-hover:visible">
                <Button onClick={()=>hangleCreateNewButtonClick(training)} color={"primaryLightRoundedSmall"} className={'!h-10  rounded-full'}><Pencil size={16} /> </Button>
            </div>
            <span className="opacity-0 absolute right-2 bottom-2 invisible transition-opacity duration-200 group-hover:opacity-100 group-hover:visible">
                <Button onClick={deleteTraining} color={"primaryLightRoundedSmall"} className={'!h-10  rounded-full !text-dangerDeppColor'}><Trash2 size={16} /> </Button>
            </span>
        </div>
    );
}

export default TrainingCard;