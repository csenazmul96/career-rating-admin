"use client"

import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import React, {useState} from "react";
import LogoUpload from "@/app/(root-layout)/(main)/homepage-management/basic-settings/components/LogoUpload";
import LmsPageHeading from "@/components/common/LmsPageHeading";
import {Button} from "@/components/common/button";

const HomePageBassicSettingsForm = () => {
    const [errors, setErrors] = useState(null);
    const [form, setForm] = useState({courseName:"", restrictionCount: 0});
    const inputChangeHandler = (column, value) => {
        setForm((prev) => ({...prev, [column]: value}));
    }
    let representativeImages = null;
    const [loading, setLoading] = useState(false);
    const submitForm = () => {

    }

    return (
        <>
            <LmsPageHeading title={"홈페이지 정보"}/>
            <div className="flex">
                <div className="flex-1">
                    <FieldWrapper label="과정명" singleElement={true}>
                        <LmsStandardInputField
                            singleElement={true}
                            changeDataHandler={inputChangeHandler}
                            name="courseName"
                            error={errors?.courseName}
                            value={form.courseName}
                            fieldClass="w-full"/>
                    </FieldWrapper>
                </div>
                <div className="flex-1">
                    <FieldWrapper label="도메인" singleElement={true}>
                        <LmsStandardInputField singleElement={true}
                                               changeDataHandler={inputChangeHandler}
                                               name="courseName"
                                               error={errors?.courseName}
                                               value={form.courseName}
                                               fieldClass="w-full"/>
                    </FieldWrapper>
                </div>
            </div>

            <FieldWrapper label="로고 등록" singleElement={true}>
                <LogoUpload form={form}
                            errors={errors}
                            name="representativeImagesId"
                            file={representativeImages}
                            placeholder="첨부할 파일을 여기에 끌어다 놓으세요. 권장 사이즈는 220x50px 입니다."
                            setForm={setForm}/>
            </FieldWrapper>
            <div className="flex">
                <div className="flex-1">
                    <FieldWrapper label="대표전화">
                        <LmsStandardInputField value={form.averageScore}
                                               error={errors?.averageScore}
                                               disabled={form.completionCondition === 'unused'}
                                               changeDataHandler={inputChangeHandler}
                                               name="averageScore"
                                               fieldClass="w-[80px]"/>
                        <span>-</span>
                        <LmsStandardInputField error={errors?.overpass_score}
                                               value={form.overpass_score}
                                               disabled={form.completionCondition === 'unused'}
                                               changeDataHandler={inputChangeHandler}
                                               name="overpass_score"
                                               fieldClass="w-[80px]"/>
                        <span>-</span>
                        <LmsStandardInputField error={errors?.overpass_score}
                                               value={form.overpass_score}
                                               disabled={form.completionCondition === 'unused'}
                                               changeDataHandler={inputChangeHandler}
                                               name="overpass_score"
                                               fieldClass="w-[80px]"/>
                    </FieldWrapper>
                </div>
                <div className="flex-1">
                    <FieldWrapper label="고객센터">
                        <LmsStandardInputField value={form.averageScore}
                                               error={errors?.averageScore}
                                               disabled={form.completionCondition === 'unused'}
                                               changeDataHandler={inputChangeHandler}
                                               name="averageScore"
                                               fieldClass="w-[80px]"/>
                        <span>-</span>
                        <LmsStandardInputField error={errors?.overpass_score}
                                               value={form.overpass_score}
                                               disabled={form.completionCondition === 'unused'}
                                               changeDataHandler={inputChangeHandler}
                                               name="overpass_score"
                                               fieldClass="w-[80px]"/>
                        <span>-</span>
                        <LmsStandardInputField error={errors?.overpass_score}
                                               value={form.overpass_score}
                                               disabled={form.completionCondition === 'unused'}
                                               changeDataHandler={inputChangeHandler}
                                               name="overpass_score"
                                               fieldClass="w-[80px]"/>
                    </FieldWrapper>
                </div>
            </div>
            <div className="flex border-b border-commonBorderColor">
                <div className="flex-1">
                    <FieldWrapper label="고객상담메일" singleElement={true}>
                        <LmsStandardInputField
                            singleElement={true}
                            changeDataHandler={inputChangeHandler}
                            name="courseName"
                            error={errors?.courseName}
                            value={form.courseName}
                            fieldClass="w-full"/>
                    </FieldWrapper>
                </div>
                <div className="flex-1">
                    <FieldWrapper label="사이트 관리자" singleElement={true}>
                        <LmsStandardInputField singleElement={true}
                                               changeDataHandler={inputChangeHandler}
                                               name="courseName"
                                               error={errors?.courseName}
                                               value={form.courseName}
                                               fieldClass="w-full"/>
                    </FieldWrapper>
                </div>
            </div>
            <LmsPageHeading title={"사업자등록증 정보"} headingClasses={'mt-10'}/>
            <div className="flex">
                <div className="flex-1">
                    <FieldWrapper label="회사명(법인명)" singleElement={true}>
                        <LmsStandardInputField
                            singleElement={true}
                            changeDataHandler={inputChangeHandler}
                            name="courseName"
                            error={errors?.courseName}
                            value={form.courseName}
                            fieldClass="w-full"/>
                    </FieldWrapper>
                </div>
                <div className="flex-1">
                    <FieldWrapper label="대표자 성명" singleElement={true}>
                        <LmsStandardInputField singleElement={true}
                                               changeDataHandler={inputChangeHandler}
                                               name="courseName"
                                               error={errors?.courseName}
                                               value={form.courseName}
                                               fieldClass="w-full"/>
                    </FieldWrapper>
                </div>
            </div>
            <div className="flex">
                <div className="flex-1">
                    <FieldWrapper label="사업자 등록번호" singleElement={true}>
                        <LmsStandardInputField
                            singleElement={true}
                            changeDataHandler={inputChangeHandler}
                            name="courseName"
                            error={errors?.courseName}
                            value={form.courseName}
                            fieldClass="w-full"/>
                    </FieldWrapper>
                </div>
                <div className="flex-1">
                    <FieldWrapper label="통신판매신고번호" singleElement={true}>
                        <LmsStandardInputField singleElement={true}
                                               changeDataHandler={inputChangeHandler}
                                               name="courseName"
                                               error={errors?.courseName}
                                               value={form.courseName}
                                               fieldClass="w-full"/>
                    </FieldWrapper>
                </div>
            </div>
            <div className="flex">
                <div className="flex-1">
                    <FieldWrapper label="부가통신 사업자번호" singleElement={true}>
                        <LmsStandardInputField
                            singleElement={true}
                            changeDataHandler={inputChangeHandler}
                            name="courseName"
                            error={errors?.courseName}
                            value={form.courseName}
                            fieldClass="w-full"/>
                    </FieldWrapper>
                </div>
                <div className="flex-1">
                    <FieldWrapper label="팩스 번호" singleElement={true}>
                        <LmsStandardInputField singleElement={true}
                                               changeDataHandler={inputChangeHandler}
                                               name="courseName"
                                               error={errors?.courseName}
                                               value={form.courseName}
                                               fieldClass="w-full"/>
                    </FieldWrapper>
                </div>
            </div>
            <FieldWrapper label="사업장 주소" singleElement={true}>
                <div className={'gap-4 flex flex-col'}>
                    <LmsStandardInputField singleElement={true}
                                           changeDataHandler={inputChangeHandler}
                                           name="courseName"
                                           error={errors?.courseName}
                                           value={form.courseName}
                                           fieldClass="w-full"/>

                    <LmsStandardInputField singleElement={true}
                                           changeDataHandler={inputChangeHandler}
                                           name="courseName"
                                           error={errors?.courseName}
                                           placeholder={'상세주소 입력'}
                                           value={form.courseName}
                                           fieldClass="w-full"/>
                </div>
            </FieldWrapper>
            <div className="flex border-b border-commonBorderColor">
                <div className="flex-1">
                    <FieldWrapper label="업태" singleElement={true}>
                        <LmsStandardInputField
                            singleElement={true}
                            changeDataHandler={inputChangeHandler}
                            name="courseName"
                            error={errors?.courseName}
                            value={form.courseName}
                            fieldClass="w-full"/>
                    </FieldWrapper>
                </div>
                <div className="flex-1">
                    <FieldWrapper label="종목" singleElement={true}>
                        <LmsStandardInputField singleElement={true}
                                               changeDataHandler={inputChangeHandler}
                                               name="courseName"
                                               error={errors?.courseName}
                                               value={form.courseName}
                                               fieldClass="w-full"/>
                    </FieldWrapper>
                </div>
            </div>
            <div className="flex  justify-end  py-10">
                <Button color="primary" type="submit" onClick={submitForm} disable={loading} loading={loading}>
                    등록하기
                </Button>
            </div>
        </>
    );
}

export default HomePageBassicSettingsForm;