import RoleFormTagsSingleElement
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/administrator-management/role-management/components/RoleFormTagsSingleElement";
import {Button} from "@/components/common/button";
import React from "react";
import {RotateCw} from "lucide-react";

const AllSelectedPermissionTags = ({allPermissions, resetPermissions, removeTag, disable}) => {
  return (
      <div className="flex p-2">
          <div className="flex items-center justify-between w-full">
              <div className="space-x-2">
                  {allPermissions && allPermissions.map((permission, i) => (
                      <RoleFormTagsSingleElement
                          removeTag={removeTag}
                          disable={disable}
                          permission={permission}
                          key={`permission ${i}`}/>
                  ))}
              </div>
              <div className="flex">
                  <Button color="transparent" className="min-w-[auto] px-4 !h-[28px] w-[95px] !text-[13px] cursor-pointer"
                          disable={disable}
                          onClick={resetPermissions}>
                      <span>
                          <RotateCw size={16} />
                      </span>
                      초기화
                  </Button>
              </div>
          </div>
      </div>
  );
}

export default AllSelectedPermissionTags