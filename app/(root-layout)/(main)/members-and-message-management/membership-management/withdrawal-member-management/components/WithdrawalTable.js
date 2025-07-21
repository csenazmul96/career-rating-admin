import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/common/table";
import {Checkbox} from "@/components/common/checkbox";
import {Button} from "@/components/common/button";
import React from "react";

const WithdrawalTable = ({columns, data}) => {
    return (
        <Table>
            <TableHead className="text-[15px] bg-[#F8F8F8] border-t border-[#E4E4E4] py-![15px] font-bold">
                <TableRow>
                    {columns.map((column, index) => (
                        <TableHeader key={`heading_${index}`}>{column.label}</TableHeader>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((row, index) => (
                    <TableRow key={`row_${index}`}>
                        {columns.map((column, i) => (
                            <TableCell key={`cell${index}_${i}`}>
                                {column.cell ?
                                    row[column.cell]
                                :
                                    row[column.name]
                                }

                            </TableCell>
                        ))}

                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default WithdrawalTable;