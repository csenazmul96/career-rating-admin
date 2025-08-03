import {Button} from "@/components/common/button";
import {PlusIcon, Trash2} from "lucide-react";
import Link from "next/link";
import React from "react";
import {confirmAlert} from "react-confirm-alert";
import {LmsToastMessage} from "@/components/common/LmsToastMessage";
import ConfirmPopup from "@/components/common/confirmAlert/ConfirmPopup";
import {useDataTable} from "@/store/DataTableContext";
import {deleteEmployee} from "@/utils/api/employeeApi";

function EmployeeTableHeaderActions(props) {
    const{selectedRow, setSelectedRows} = useDataTable()
    const deleteItems = async () => {
        let form = {
            ids: selectedRow
        }
        confirmAlert({
            title: 'Delete Employees',
            message: 'Do you really want to delete the selected employees?',
            buttons: [
                {
                    label: 'Cancel',
                    buttonLabel: "Cancel",
                    onClick: () => {
                        return false;
                    }
                },
                {
                    label: 'Ok',
                    buttonLabel: "Ok",
                    onClick: async () => {
                        try {
                            const response = await deleteEmployee(form)
                            if (response.status === 200){
                                setSelectedRows([])
                                LmsToastMessage('Delete.', 'Employee has been deleted!', 'success')
                            }
                        } catch (error) {
                            LmsToastMessage('Delete.', 'Failed to delete item', 'error')
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
            <Link href={"/employee-management/employees/create"}>
                <Button className={`h-[32px] rounded`} color="primaryMedium">
                    <span> <PlusIcon size={20} /></span>
                    Create Employee
                </Button>
            </Link>
            <Button className={`h-[32px]`}
                    onClick={deleteItems}
                    disable={selectedRow.length ? false : true}
                    color="transparentMedium">
        <span>
            <Trash2 size={20} />
        </span>
                <span>Delete</span>
            </Button>
        </>
    );
}

export default EmployeeTableHeaderActions;