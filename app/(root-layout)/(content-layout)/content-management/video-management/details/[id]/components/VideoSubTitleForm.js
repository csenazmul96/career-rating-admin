import React, {useRef, useState} from 'react';
import {Dialog, DialogActions, DialogBody, DialogTitle} from "@/components/common/dialog";
import {Button} from "@/components/common/button";
import {CommonToastMessage} from "@/components/common/CommonToastMessage";
import {formatErrors} from "@/utils/helpers/ErrorHeloper";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardSelectInputV2 from "@/components/common/form/LmsStandardSelectInputV2";
import {X} from "lucide-react";
import {subTitleUpload} from "@/utils/api/videoContentRequest";
import {getSubtitleLanguages} from "@/utils/helpers/CommonHelper";

function VideoSubTitleForm({setOpenForm, openForm, video, newSubtitleAdded}) {
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false)

    const [form, setForm] = useState({
        file: "",
        language: "",
        videoId: video ? video.id : ""
    });
    const fileInputRef = useRef(null);
    const submitForm = async () => {
        setLoading(true)
        let formData = new FormData();
        formData.set('file', form.file)
        formData.set('language', form.language)
        formData.set('videoId', form.videoId)
        try {
            const response = await subTitleUpload(formData)
            if (response.status === 'success') {
                newSubtitleAdded(response.data)
                CommonToastMessage('성공.', 'Subtitle has been uploaded', 'success')
                setOpenForm(false)
                setForm({
                    file: "",
                    language: "",
                    videoId: video ? video.id : ""
                })
            }
            if (response.status === 'error') {
                if (response.errors) {
                    setErrors(formatErrors(response.errors))
                }
            }
        } catch (e){
            CommonToastMessage('오류.', "문제가 발생했습니다.", 'error')
        }
        setLoading(false)
    }

    const languages =  getSubtitleLanguages()

    const handleOnChange = (column, value) => {
        setForm((prev) => ({...prev, [column]: value}));
    }

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            setSelectedFile(file)
            setForm((old) =>({...old, file: file}))
        }
    };

    return (
        <Dialog open={openForm} onClose={setOpenForm}>
            <DialogTitle className={''}>
                <span className={'w-full contents'}>자막 파일 추가</span>
                <span className={'text-13 w-full text-placeholderColor'}>자막파일의 경우, SRT와 Web VTT 형식의 자막파일만 등록 가능합니다.</span>
            </DialogTitle>
            <DialogBody>
                <FieldWrapper
                    label="자막 파일"
                    singleElement={true}
                    vertical={true}
                >
                    <div className="flex">
                        <div className="flex justify-between items-center w-full">
                            <div className="relative w-[333px]" >
                                <LmsStandardInputField
                                    name="name"
                                    fieldClass={"w-full"}
                                    singleElement={true}
                                    value={selectedFile?.name}
                                    disabled={true}
                                    placeholder="그룹명을 입력해주세요."
                                    changeDataHandler={handleOnChange}
                                />
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    accept=".srt,.vtt"
                                    className="hidden"
                                />
                                {selectedFile
                                    &&
                                    <span onClick={()=>setSelectedFile(null)} className={"bg-white absolute right-0 top-0 h-[46px] border-l-0 flex items-center justify-center cursor-pointer"}>
                                        <X />
                                    </span>
                                }
                            </div>
                            <Button onClick={handleClick} color="secondary" type="button"  className={'h-10 !min-w-[91px] !pl-4 !pr-4'}>  파일선택 </Button>

                        </div>
                    </div>

                </FieldWrapper>
                <FieldWrapper
                    label="자막 언어 선택"
                    singleElement={true}
                    vertical={true}
                >
                    <LmsStandardSelectInputV2
                        name={`language`}
                        classes={"w-full"}
                        fieldClass={'w-full h-[190px]'}
                        options={languages}
                        error={errors?.language}
                        changeDataHandler={handleOnChange}
                        value={form.language} />
                </FieldWrapper>

            </DialogBody>
            <DialogActions className={"!mt-4"}>
                <Button
                    type="button"
                    color="transparentMedium"
                    className={'h-10'}
                    onClick={()=>setOpenForm(false)}> 취소 </Button>
                <Button
                    type="button"
                    disable={!form.file ? true : loading ? true : false}
                    color={`${!form.file ? 'secondaryMedium' : 'primaryMedium'}`}
                    className={'h-10'}
                    loading={loading}
                    onClick={submitForm}> 확인 </Button>
            </DialogActions>
        </Dialog>
    );
}

export default VideoSubTitleForm;