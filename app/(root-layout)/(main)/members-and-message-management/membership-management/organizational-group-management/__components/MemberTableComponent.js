import {Table, TableBody, TableCell, TableRow} from "@/components/common/table";
import {Checkbox, CheckboxField} from "@/components/common/checkbox";
import {Label} from "@/components/common/fieldset";
import React from "react";

const MemberTableComponent = ({members, ids, setIds}) => {
    const clickHandler = (status, id) => {
        let findItem = ids.findIndex(item => item === id)
        if(findItem === -1){
            setIds((old) => ([...old, id]))
        } else {
            setIds(ids.filter(item => item !== id))
        }
    }

    return (
        <Table className="text-[#1d1d1d]">
            <TableBody>
                {members && members.map((member, index) =>(
                    <TableRow className={`text-[17px]  ${ids.includes(member.id) ? 'bg-[#F4F9FF]' : ''}`} key={`key ${index}`}>
                        <TableCell className="w-1/2 py-[31px]">
                            <CheckboxField className="pl-5">
                                <Checkbox color="lmscheckbox" name="discoverability"
                                          clickHandler={(value)=>clickHandler(value, member.id)}
                                          value="show_on_events_page"
                                          defaultChecked={!!ids.includes(member.id)} />
                                <Label className="font-normal text-[17px]">{member.name}</Label>
                            </CheckboxField>
                        </TableCell>
                        <TableCell className="w-1/2 py-[31px]"> <span
                            className="text-[17px] text-[#1D1D1D]">{member.email}</span>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default MemberTableComponent