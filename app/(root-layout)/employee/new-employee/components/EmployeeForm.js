"use client"

import {useState} from "react";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import MemberExistsCheck
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/total-member-management/member-registration/__components/MemberExistsCheck";
import Link from "next/link";
import {Button} from "@/components/common/button";
import {Menu} from "lucide-react";
import {memberRegistration, memberUpdate} from "@/utils/api/memberManagementRequest";
import {formatErrors} from "@/utils/helpers/ErrorHeloper";
import {CommonToastMessage} from "@/components/common/CommonToastMessage";
import {toast} from "react-toastify";

function EmployeeForm(props) {
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: "",
        username: "",
        first_name: "",
        last_name: "",
        confirmPassword: "",
        status: 1
    });

    const [situations, setSituations] = useState([
        { id: 1, name: "Active" },
        { id: 0, name: "InActive" },
    ]);

    const handleOnChnage = (column, value) => { 
        setForm((prev) => ({ ...prev, [column]: value }));
    };

    const submitForm = async () => {
        setErrors(null);
        setLoading(true);
        try {
            let data = null;
            if (!form.id) {
                data = await memberRegistration(form);
            } else if (form.id) {
                data = await memberUpdate(form, form.id);
            }
            if (data.status === "error") {
                const errors = formatErrors(data.errors);
                setErrors(errors);
                if (!errors) {
                    CommonToastMessage("오류.", "문제가 발생했습니다.", "error");
                }
            } else {
                if (!form.id) {
                    resetForm();
                }
                CommonToastMessage(
                    "성공.",
                    form?.id ?"회원이 성공적으로 업데이트되었습니다." : "회원이 성공적으로 생성되었습니다.",
                    "success"
                );
            }
            setLoading(false);
        } catch (e) {
            setLoading(false);
            toast.error("문제가 발생했습니다.");
        }
    }
    
    return (
        <div className="registration-form">
            <FieldWrapper label="UserName" required={true}>
                <LmsStandardInputField
                    error={errors?.username}
                    name="username"
                    value={form.username}
                    placeholder="Username"
                    changeDataHandler={handleOnChnage}
                />
            </FieldWrapper>
            <FieldWrapper label="First Name" required={true}>
                <LmsStandardInputField
                    error={errors?.first_name}
                    name="first_name"
                    value={form.first_name}
                    placeholder="Enter first name."
                    changeDataHandler={handleOnChnage}
                />
            </FieldWrapper>
            <FieldWrapper label="Last Name" required={true}>
                <LmsStandardInputField
                    error={errors?.last_name}
                    name="last_name"
                    value={form.last_name}
                    placeholder="Enter Last name."
                    changeDataHandler={handleOnChnage}
                />
            </FieldWrapper>
            <FieldWrapper label="Email" required={true}>
                <LmsStandardInputField
                    error={errors?.email}
                    name="email"
                    value={form.email}
                    placeholder="Enter valid emial."
                    changeDataHandler={handleOnChnage}
                />
            </FieldWrapper>
            <FieldWrapper label="Password" required={true}>
                <LmsStandardInputField
                    error={errors?.password}
                    name="password"
                    type="password"
                    value={form.password}
                    placeholder="Password"
                    changeDataHandler={handleOnChnage}
                />
            </FieldWrapper>
            <FieldWrapper
                label="Confirm Password"
                required={true}
            >
                <LmsStandardInputField
                    error={errors?.confirmPassword}
                    name="confirmPassword"
                    type="password"
                    value={form.confirmPassword}
                    placeholder="Confirm Password"
                    changeDataHandler={handleOnChnage}
                />
            </FieldWrapper>

            <div className="flex items-center justify-between border-t border-commonBorderColor pt-10">
                <div className="left-col flex items-center">
                    <div className="member-collapse-list ">
                        <Link href={`/employee`}>
                            <Button
                                color="transparent"
                                className="w-full mb-2 text-center cursor-pointer gap"
                            >
                                <span className={`flex`}>
                                    <Menu />
                                </span>
                                <span className="text-19px flex leading-[normal]">List</span>
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="right-col flex justify-end items-end flex-1  px-4 pl-[20px] pr-0">
                    <Button
                        color="primary"
                        onClick={() => submitForm()}
                        loading={loading}
                        disable={loading}
                        className={"cursor-pointer"}
                    >
                        Save
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default EmployeeForm;