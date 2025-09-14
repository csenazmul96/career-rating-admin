
import Link from "next/link";
import {Button} from "@/components/common/button";
import {FilePen, Trash2} from "lucide-react";
import {useDataTable} from "@/store/DataTableContext";
import {confirmAlert} from "react-confirm-alert";
import {LmsToastMessage} from "@/components/common/LmsToastMessage";
import {deleteCompany, removeEmployeeFromCompany} from "@/utils/api/career/companiesAPI";
import ConfirmPopup from "@/components/common/confirmAlert/ConfirmPopup";

function CompanyEmployeeTableActions({id}) {
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
                        const response = await removeEmployeeFromCompany( {ids:selectedRow, company_id: id} )
                        if (response.status === 200) {
                            setSelectedRows([])
                            LmsToastMessage('성공.', 'Employee has been removed!', 'success')
                        } else {
                            LmsToastMessage('실패.', 'Something went wrong', 'error')
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
        </>
    );
}

export default CompanyEmployeeTableActions;