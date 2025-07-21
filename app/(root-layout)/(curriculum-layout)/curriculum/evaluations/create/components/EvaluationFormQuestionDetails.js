import {Heading} from "@/components/common/heading";
import {ImagePlus, Plus, Trash2} from "lucide-react";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import ToolTip from "@/components/common/ToolTip";
import Dropzone  from "react-dropzone";
import LmsStandardTextArea from "@/components/common/form/LmsStandardTextArea";
import {Table, TableBody,  TableHead, TableHeader, TableRow} from "@/components/common/table";
import {Button} from "@/components/common/button";
import EvaluationFormQuestionAnswer
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/evaluations/create/components/questions/EvaluationFormQuestionAnswer";
import {deleteEvaluationQuestion, imageUploadCommonFunction} from "@/utils/api/evaluationManagement";
import {confirmAlert} from "react-confirm-alert";
import ConfirmPopup from "@/components/common/confirmAlert/ConfirmPopup";
import {CommonToastMessage} from "@/components/common/CommonToastMessage";

function EvaluationFormQuestionDetails({questions, setQuestions, currentQuestion, setCurrentQuestion, errors, form, evaluation }) {
    const removeQuestion = () => {
        confirmAlert({
            title: '평가 문항 삭제',
            message: '해당 평가 문항을 삭제하시겠습니까?',
            buttons: [
                {
                    label: '취소',
                    onClick: () => {
                        return false;
                    }
                },
                {
                    label: '확인',
                    buttonLabel: '삭제',
                    onClick: async () => {
                        if (evaluation && currentQuestion.id) {
                         await deleteEvaluationQuestion(currentQuestion.id);
                        }
                        let newList = questions.filter((question) => question.number !== currentQuestion.number);
                        setCurrentQuestion(newList.length ? newList[0] : null);
                        setQuestions(newList);
                    }
                }
            ],
            customUI: ({ title, message, onClose , buttons}) => {
                return (
                    <ConfirmPopup title={title} message={message} onClose={onClose} onConfirm={buttons} />
                );
            }
        });
    }

    const handleOnChnage = (column, value) => {
        setCurrentQuestion((prev) => ({...prev, [column]: value}));
    }

    const addNewAnswerRow = () => {
        const answers = currentQuestion.answers
        answers.push({
            number: 1,
            option: "",
            isCorrectAnswer: false,
            answerFileId: "",
            fileName: "",
        })
        setCurrentQuestion((prevQuestions) => {
            return {...prevQuestions, answers: answers};
        })
    }

    const acceptedFiles = async (files) => {
        const file = files[0];
        const fileSize = file.size / 1024 / 1024;
        const maxFileSize = 5;

        if (fileSize > maxFileSize) {
            CommonToastMessage('오류.', 'File size cannot exceed 5MB.', 'warning');
            return;
        }
        const formData = new FormData();
        formData.append('files', file);

        const reader = new FileReader();
        reader.onload = () => {
            handleOnChnage('fileName', reader.result);
        };
        reader.readAsDataURL(file);

        const response = await imageUploadCommonFunction(formData, "QUESTION");

        if (response && response.id) {
            handleOnChnage('questionFileId', response.id);
        }
    }

    const removeImage = () => {
        handleOnChnage('questionFileId', "");
        handleOnChnage('fileName', "");
    }



    return (
        <>
            {currentQuestion &&
                <div className="p-8 border border-borderColor">
                    <div className="inner flex items-center justify-between pb-6 border-b border-borderColor">
                        <Heading level={2} className={`items-center !pb-0 gap-2 flex`}>
                            <span>{currentQuestion.label}</span>
                        </Heading>
                        {questions.length > 1 &&
                        <div className="inner">
                            <span onClick={removeQuestion} className={`cursor-pointer`}><Trash2/></span>
                        </div>
                        }
                    </div>

                    <div className="inner">
                        <div className="flex items-center gap-6">
                            <FieldWrapper label="문제 제목" vertical={true} required={true} singleElement={true}
                                          className={`${form.scoreType === 'PASSIVE' ? 'w-8/12' : 'w-full'}`}>
                                <LmsStandardInputField
                                    name="title"
                                    fieldClass={'w-full'}
                                    error={errors && errors[`questions.${currentQuestion.number}.title`]}
                                    vertical={true}
                                    value={currentQuestion.title}
                                    placeholder="문제 제목을 입력해주세요."
                                    changeDataHandler={handleOnChnage}
                                />
                            </FieldWrapper>

                            {form.scoreType === 'PASSIVE' &&
                                <FieldWrapper label="배점" vertical={true} required={true} singleElement={true}
                                              className={`w-4/12`}>
                                    <LmsStandardInputField
                                        name="point"
                                        fieldClass={'w-full'}
                                        type={"number"}
                                        error={errors && errors[`questions.${currentQuestion.number}.point`]}
                                        vertical={true}
                                        value={currentQuestion.point}
                                        placeholder="배점 입력"
                                        changeDataHandler={handleOnChnage}
                                    />
                                </FieldWrapper>
                            }

                        </div>

                        <div className="flex flex-col gap-2 py-4">
                            <div className="flex gap-2">
                                <div className={`flex items-center`}>
                                    <span className={`common-label-style`}>문제 지문 이미지</span>
                                </div>
                                <ToolTip
                                    title={"이미지 첨부파일"}
                                    content={`이미지 업로드는 1개 파일만 가능합니다. 업로드 가능 확장자: jpg, jpeg, png, webp 업로드 최대 용량: 5 MB`}/>
                            </div>

                            <div className="flex gap-3">
                                <Dropzone onDrop={acceptedFiles} multiple={false} accept={{
                                    "image/jpeg": [],
                                    "image/png": [],
                                    "image/webp": []
                                }}>
                                    {({getRootProps, getInputProps}) => (
                                        <section
                                            className="flex flex-col">
                                            <div {...getRootProps()}
                                                 className={`h-[100px] w-[140px] rounded-[4px] border border-dotted border-commonBorderColor flex items-center justify-center flex-col gap-3`}>
                                                <input {...getInputProps()} />
                                                <ImagePlus size={24} />
                                                {/*<img src="/images/curriculum-management/li_image-plus.png"*/}
                                                {/*     alt=""/>*/}
                                                <p>이미지 첨부</p>

                                            </div>
                                        </section>
                                    )}
                                </Dropzone>
                                {currentQuestion.fileName &&
                                    <div className="items">
                                        <div className="img">
                                            <div
                                                className={"relative h-[100px] rounded-[4px] overflow-hidden w-[140px] before:content-[''] before:w-full before:h-full before:z-[4] before:bg-black before:bg-opacity-50 before:absolute "}>
                                                <img src={currentQuestion.fileName}
                                                     className={'absolute w-full z-[3] h-full object-cover  mr-4'}
                                                     alt=""/>
                                                <div className={"cursor-pointer z-[5] absolute top-3 right-3"}
                                                     onClick={removeImage}>
                                                    <Trash2 className={`text-white`}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>

                        <FieldWrapper label="문제 지문" vertical={true} required={true} singleElement={true}
                                      className={`w-full`}>
                            <LmsStandardTextArea
                                name="questionPrompt"
                                singleElement={true}
                                fieldClass={`w-full`}
                                error={errors && errors[`questions.${currentQuestion.number}.questionPrompt`]}
                                value={currentQuestion.questionPrompt}
                                placeholder="문제 지문을 입력해주세요."
                                changeDataHandler={handleOnChnage}/>
                        </FieldWrapper>

                        <div className="flex flex-col">
                            <Table separateBorder={true}>
                                <TableHead className="">
                                    <TableRow>
                                        <TableHeader>
                                            정답지정
                                        </TableHeader>
                                        <TableHeader className={`w-[70%]`}>답안 지문 작성</TableHeader>
                                        <TableHeader>이미지 등록</TableHeader>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {currentQuestion.answers && currentQuestion.answers.map((answer, index) => (
                                        <EvaluationFormQuestionAnswer
                                            key={`ques-${currentQuestion.number}-answer-${index}`}
                                            index={index}
                                            errors={errors}
                                            currentQuestion={currentQuestion}
                                            setCurrentQuestion={setCurrentQuestion}
                                            answer={answer}/>
                                    ))}

                                </TableBody>
                            </Table>
                            <Button color="transparent" className={`w-full`} onClick={addNewAnswerRow}>
                                <span><Plus/></span> <span>답안 추가 (최대 {currentQuestion.answers.length}개)</span>
                            </Button>
                        </div>

                    </div>
                </div>
            }
        </>
    );
}

export default EvaluationFormQuestionDetails;