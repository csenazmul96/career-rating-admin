import React, {useState} from 'react';
import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import {Button} from "@/components/common/button";
import {checkIfEmployeeExists} from "@/utils/api/career/employeeApi";

function EmployeeExistsCheck({ form,  errors, setForm }) {
    const [loading, setLoading] = useState(false);
    const [checked, setChecked] = useState(null);
    const handleOnChnage = (column, value) => {
        setForm((prev) => ({ ...prev, [column]: value }));
    };
    const checkDplicate = async () => {
        setForm((prev) => ({ ...prev, checkEmployee: true }));
        setLoading(true);

            const response = await checkIfEmployeeExists({username: form.username});

            if (response) {
                setChecked('available');
            } else {
                setChecked('not-available');
                setForm((prev) => ({ ...prev, checkEmployee: true }));
            }

          setLoading(false);

            setTimeout(() => {
                setChecked(null);
            }, 5000)
    }

    return (
        <>
            <FieldWrapper label="Username" required={true}>
                <LmsStandardInputField
                    error={errors?.username}
                    name="username"
                    value={form.username}
                    placeholder="Enter username"
                    changeDataHandler={handleOnChnage}
                />
                <div className="right-col flex flex-col relative pl-8">
                    <Button color="secondary"
                            onClick={checkDplicate}
                            loading={loading}
                            disable={loading || !form.username }
                            className="h-[48px] cursor-pointer">
                        Check Exists
                    </Button>
                    {checked && <span className={`absolute -bottom-4 text-13 ${checked === 'not-available' ? "text-red-700" : "text-green-900"}`}>{`${checked === "not-available" ? "Username already used" : "Username is available"}`}</span>}
                </div>
            </FieldWrapper>
        </>
    );
}

export default EmployeeExistsCheck;