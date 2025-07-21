import LmsStandardSelectInputV2 from "@/components/common/form/LmsStandardSelectInputV2";
import React from "react";
import FieldWrapper from "@/components/common/form/FieldWrapper";

const MemberRegistrationRole = ({form, setForm, roles, errors}) => {
    const handleOnChnage = (column, value) => {
        setForm((prev) => ({
            ...prev,
            memberRoles: value ? [roles.find(item => item.id === value) ] : []
        }));
    }
    return (
        <FieldWrapper label="관리자 유형">
            <LmsStandardSelectInputV2
                name={`memberRoles`}
                initialText={'관리자 유형 선택'}
                value={form.memberRoles.length? form.memberRoles[0]?.id : ''}
                options={roles}
                error={errors?.memberRoles}
                changeDataHandler={handleOnChnage} />
        </FieldWrapper>
    );
}

export default MemberRegistrationRole