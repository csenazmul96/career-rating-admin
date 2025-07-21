import {Button} from "@/components/common/button";
import React from "react";
import {X} from "lucide-react";

const RoleFormTagsSingleElement = ({permission, removeTag, disable}) => {
  return (
      <Button color="transparentRoundedSmall"
              className={'cursor-pointer'}
              disable={disable}
              onClick={()=>removeTag(permission, permission.id)}>
          {permission.name}
          <span>
              {/*<img src="/images/membership/close.png" alt=""/>*/}
              <X size={12} />
          </span>
      </Button>
  );
}
export default RoleFormTagsSingleElement