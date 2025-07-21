import {TableCell, TableRow} from "@/components/common/table";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import {X} from "lucide-react";
import {Button} from "@/components/common/button";
import {Checkbox, CheckboxField} from "@/components/common/checkbox";
import React, {useRef} from "react";
import {imageUploadCommonFunction} from "@/utils/api/evaluationManagement";
import LmsStandardRadioFieldGroup from "@/components/common/form/LmsStandardRadioFieldGroup";

function EvaluationFormQuestionAnswer({answer, index, setCurrentQuestion, currentQuestion, errors}) {

    const handleOnChnage = (column, value) => {
        setCurrentQuestion((prevQuestions) => {
            const updatedQuestions = prevQuestions.answers.map((question, i) =>
                i === index ? {...question, option: value} : question
            );
            return {...prevQuestions, answers: updatedQuestions};
        });
    }

    const handleCorrectAnswer = () => {
        setCurrentQuestion((prevQuestions) => {
            const updatedQuestions = prevQuestions.answers.map((question, i) =>
                i === index ? {...question, isCorrectAnswer: true} : {...question, isCorrectAnswer: false}
            );
            return {...prevQuestions, answers: updatedQuestions};
        });
    }

    const fileInputRef = useRef(null);
    const handleClick = () => {
        fileInputRef.current.click();
    };
    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('files', file);

            const response = await imageUploadCommonFunction(formData, "ANSWER");

            if (response && response.id) {
                setCurrentQuestion((prevQuestions) => {
                    const updatedQuestions = prevQuestions.answers.map((question, i) =>
                        i === index ? {...question, answerFileId: response.id, fileName:file.name} : question
                    );
                    return {...prevQuestions, answers: updatedQuestions};
                });
            }
            fileInputRef.current.value = null;
        }
    };

    const removeFile = () => {
        setCurrentQuestion((prevQuestions) => {
            const updatedQuestions = prevQuestions.answers.map((question, i) =>
                i === index ? {...question, answerFileId: "", fileName:""} : question
            );
            return {...prevQuestions, answers: updatedQuestions};
        });
    }

    return (
        <TableRow>
            <TableCell className={`!border-t !border-l border-commonBorderColor`}>
                <div className="flex gap-4">
                    {/*<CheckboxField>*/}
                    {/*    <Checkbox color="lmscheckbox"*/}
                    {/*              name="isCorrectAnswer"*/}
                    {/*              clickHandler={handleCorrectAnswer}*/}
                    {/*              checked={answer.isCorrectAnswer} />*/}
                    {/*</CheckboxField>*/}
                    <LmsStandardRadioFieldGroup
                        value={answer.isCorrectAnswer  }
                        changeDataHandler={handleCorrectAnswer}
                        options={[{id: true, name: ''} ]}
                        name="isCorrectAnswer"/>

                    <span className={`flex items-center justify-center border text-[#000] border-commonBorderColor rounded-full size-[26px]`}>{index+1}</span>
                </div>
            </TableCell>
            <TableCell className={`!border-t border-commonBorderColor`}>
                <LmsStandardInputField
                    name="option"
                    fieldClass={'w-full'}
                    vertical={true}
                    error={errors && errors[`questions.${currentQuestion.number}.answer.${index+1}.option`] || errors && errors[`questions.${currentQuestion.number}`]}
                    value={answer.option}
                    placeholder="답안을 입력하세요."
                    changeDataHandler={handleOnChnage}
                />
            </TableCell>
            <TableCell className={`!border-t !border-r border-commonBorderColor`}>
                <div className="flex gap-3">
                    <div className="relative">
                        <LmsStandardInputField
                            placeholder={answer.fileName ? answer.fileName : "이미지를 선택하세요."}
                            disabled={true}
                        />
                        {answer.fileName &&
                            <span onClick={removeFile} className={`absolute right-2 bg-white top-1/2 -translate-y-1/2 cursor-pointer`}><X/></span>
                        }
                    </div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                    />
                    <Button color="secondary" onClick={handleClick} className={`!w-[100px] !min-w-[100px]`}>
                        파일선택
                    </Button>
                </div>
            </TableCell>
        </TableRow>
    );
}

export default EvaluationFormQuestionAnswer;