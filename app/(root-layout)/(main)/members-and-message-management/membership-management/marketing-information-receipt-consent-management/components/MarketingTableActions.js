'use client'
import Link from "next/link";
import React, { useState} from "react";
import {Button} from "@/components/common/button";
import {confirmAlert} from "react-confirm-alert";
import ConfirmPopup from "@/components/common/confirmAlert/ConfirmPopup";
import {assignOrganizationToMembers} from "@/utils/api/memberManagementRequest";
import LmsOrganizationSingleSelect from "@/components/common/form/organizations/LmsOrganizationSingleSelect";
import {Dialog, DialogBody} from "@/components/common/dialog";
import {useDataTable} from "@/store/DataTableContext";
import {Download, ListPlus, MailMinus, Plus, Users} from "lucide-react";
import {LmsToastMessage} from "@/components/common/LmsToastMessage";
import LmsOrganizationSingleSelectV2 from "@/components/common/form/organizations/LmsOrganizationSingleSelectV2";

const MarketingTableActions = ({organizations}) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleChange = () => {
        setIsOpen(true)
    }

    return (
        <>
            <Button className={'cursor-pointer border border-borderColor h-[32px] px-4 flex items-center gap-1'}
                    onClick={handleChange}
            >
                <span>
                    <MailMinus size={20} className={`text-textSubColor`} />
                </span>
                <span>수신동의안내발송</span>
            </Button>
            <Button className={'cursor-pointer border border-borderColor h-[32px] px-4 flex items-center gap-1'}
                    onClick={handleChange}
            >
                <span>
                    <Download size={20} className={`text-textSubColor`} />
                </span>
                <span>엑셀 다운로드</span>
            </Button>

            {isOpen &&
                <>
                    <Dialog open={isOpen} onClose={setIsOpen} size={''}  className={'p-0 m-0 w-max flex justify-center'}>
                        <DialogBody className={`!mt-0`}>
                            <p>Marketing info modal</p>
                        </DialogBody>
                    </Dialog>
                </>
            }

        </>
    );
}

export default MarketingTableActions