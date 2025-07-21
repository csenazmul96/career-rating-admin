import {TableCell, TableRow} from "@/components/common/table";
import {Button} from "@/components/common/button";
import React from "react";
import {getSituationKoreanText} from "@/utils/helpers/CommonHelper";

const WithdrawalTableRow = ({member}) => {
  return (
      <TableRow>
          <TableCell>
              {member.name}
          </TableCell>
          <TableCell>{member.memberId}</TableCell>
          <TableCell>{member.joinDate}</TableCell>
          <TableCell>{member.deletionDate}</TableCell>
          <TableCell>
              <Button color={`${member.situation === 'Active' ? 'primaryRoundedSmall' : (member.situation === 'InActive' ? 'secondaryLightRoundedSmall' : 'dangerLightRoundedSmall')}`}>
                  {getSituationKoreanText(member.situation)}
              </Button>
          </TableCell>
      </TableRow>
  );
}

export default WithdrawalTableRow