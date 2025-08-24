
import Link from "next/link";
import {Button} from "@/components/common/button";
import {FilePen, Trash2} from "lucide-react";
import {useDataTable} from "@/store/DataTableContext";
import {confirmAlert} from "react-confirm-alert";
import {LmsToastMessage} from "@/components/common/LmsToastMessage";
import {deleteCompany} from "@/utils/api/career/companiesAPI";
import ConfirmPopup from "@/components/common/confirmAlert/ConfirmPopup";

function CompanyTableActions(props) {
    const{selectedRow, setSelectedRows} = useDataTable()

    const handleDelete = () => {
        confirmAlert({
            title: 'Delete',
            message: 'Are you sure to take this actions?',
            buttons: [
                {
                    label: 'Cancel',
                    buttonLabel: 'Cancel',
                    onClick: () => {
                        return false;
                    }
                },
                {
                    label: 'ok',
                    buttonLabel: 'Delete',
                    onClick: async () => {
                        const response = await deleteCompany({ids: selectedRow})
                        if (response.status === 200) {
                            setSelectedRows([])
                            LmsToastMessage('성공.', 'Faq has been deleted!', 'success')
                        } else {
                            LmsToastMessage('실패.', 'Faq has not been deleted!', 'error')
                        }
                    }
                }
            ],
            customUI: ({ title, message, onClose , buttons}) => {
                return (
                    <ConfirmPopup title={title} message={message} onClose={onClose} onConfirm={buttons} />
                );
            }
        });
    }
    return (
        <>
            <Button color="transparentMedium" onClick={handleDelete} disable={selectedRow.length ? false : true}>
                <Trash2 size={20} /> <span className={`flex`}>Delete</span>
            </Button>
            <Link href={"/company-management/companies/create"} className={`h-[32px]`}>
                <Button  color="primaryMedium">
                    <span>
                        <FilePen size={20} />
                    </span>
                    <span>Register Company</span>
                </Button>
            </Link>
        </>
    );
}

export default CompanyTableActions;