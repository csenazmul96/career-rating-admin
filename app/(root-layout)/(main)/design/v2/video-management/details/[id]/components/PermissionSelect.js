import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardRadioFieldGroup from "@/components/common/form/LmsStandardRadioFieldGroup";
import LmsOrganizationMultipleSelect from "@/components/common/form/organizations/LmsOrganizationMultipleSelect";
import {
  formatContentEditPermissionsData,
  roleDataFormatForReuseOrganizationComponent
} from "@/utils/helpers/CommonHelper";
import {useEffect, useState} from "react";

export default function PermissionSelect({setFormData, formData, roles, errors, customPermissions}) {
  const allRoles = roleDataFormatForReuseOrganizationComponent(roles)
  const buttonLabels = {selectAllChild: "모두 선택 취소", deselectAllChild: "전체 선택", firstStep: "관리자 유형", secondStep: "관리자", reset: "초기화"}

  const permissionChangeHandler = (column, value) => {
    setFormData((prev) => ({...prev, [column]: value}));
  }

  const [selectedMembers, setSelectedMembers] = useState(false);

  useEffect(() => {
    if(customPermissions.length) {
      setSelectedMembers(formatContentEditPermissionsData(customPermissions))
    }
  }, [customPermissions]);


  const organizationChangeHandler = (data) => {
    let permissions = [];
    data.permissions.forEach((item) => {
      permissions.push({memberId: item.memberId, memberRoleId: item.parentId,})
    })

    setFormData((prev) => ({...prev, customPermissions: permissions}));
  }

  return (
    <>
      <FieldWrapper label="보기 권한" className={` ${formData.permission !== 'CUSTOM' ? 'border-b border-commonBorderColor' : ''}`}>
        <LmsStandardRadioFieldGroup
          value={formData.permission}
          changeDataHandler={permissionChangeHandler}
          options={[{id: 'PUBLIC', name: '전체공개'}, {id: 'PRIVATE', name: '나만보기'}, {id: 'CUSTOM', name: '개별설정'}]}
          name="permission"/>
      </FieldWrapper>

      {formData.permission === 'CUSTOM' && allRoles && (
        <FieldWrapper label="개별설정" singleElement={true} className={'border-b border-commonBorderColor'}>
          <LmsOrganizationMultipleSelect groups={allRoles}
                                         noBorderPadding={true}
                                         useSearch={true}
                                         buttonLabels={buttonLabels}
                                         callBack={organizationChangeHandler}
                                         selectedGroups={selectedMembers} />

          {errors?.customPermissions && <span className="!mt-0 text-dangerColor">{errors.customPermissions}</span>}
        </FieldWrapper>
      )}
    </>
  );
}