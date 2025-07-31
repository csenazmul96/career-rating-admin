"use client";

import {useState} from "react";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardRadioFieldGroup from "@/components/common/form/LmsStandardRadioFieldGroup";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";

function EmployeeForm(props) {

    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        "email": "",
        "password": "",
        "username": "",
        "first_name": "",
        "last_name": ""
    });

    const handleOnChnage = (column, value) => {
        setForm((prev) => ({ ...prev, [column]: value }));
    };

    return (
        <div className="registration-form">
            <div className="form">
                <FieldWrapper label="중복 로그인" required={true}>
                    <LmsStandardRadioFieldGroup
                        options={[
                            { id: true, name: "Active" },
                            { id: false, name: "Inactive" },
                        ]}
                        name="isDuplicateAllowed"
                        value={form.isDuplicateAllowed}
                        changeDataHandler={handleOnChnage}
                    />
                    <LmsStandardInputField
                        error={errors?.first_name}
                        name="first_name"
                        type={"first_name"}
                        value={form.first_name}
                        placeholder="Enter First Name"
                        changeDataHandler={handleOnChnage}
                    />
                </FieldWrapper>
            </div>
        </div>
    );
}

export default EmployeeForm;