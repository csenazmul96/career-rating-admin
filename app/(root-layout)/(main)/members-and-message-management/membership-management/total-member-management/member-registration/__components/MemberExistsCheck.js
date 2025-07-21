import {Button} from "@/components/common/button";
import React, {useState} from "react";
import {memberExistsCheck} from "@/utils/api/memberManagementRequest";
import {Dialog, DialogActions, DialogBody, DialogTitle} from "@/components/common/dialog";

const MemberExistsCheck = ({form, setForm, errors, setError}) => {
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('사용 가능한 아이디 입니다.');

    const checkDplicate = async () => {
        if(form.idNo) {
            setLoading(true)
            try {
                const result = await memberExistsCheck(form.idNo)
                if (result) {
                    setIsOpen(true)
                    if (result.status === 'success') {
                        setError((old) =>({...old, idNo:'Member already exists!'}))
                        setForm((old) => ({...old, memberExists: true}))
                        setMessage('이미 사용 중인 아이디 입니다.\n' +
                            '다른 아이디를 입력해주세요.')
                    } else {
                        setError((old) =>({...old, idNo:null}))
                        setForm((old) => ({...old, memberExists: false}))
                        setMessage('사용 가능한 아이디 입니다.')
                    }
                }
            } catch (e) {
                console.log(e.message)
            } finally {
                setLoading(false)
            }
        }
    }
    const submitForm = () => {
      setIsOpen(false)
    }

    return (
        <>
            <div className="right-col  flex-1">
                <Button color="secondary"
                        onClick={checkDplicate}
                        loading={loading}
                        disable={loading}
                        className="h-[48px] cursor-pointer">
                    중복확인
                </Button>
            </div>

            <Dialog size="md" open={isOpen} onClose={() => setIsOpen(false)}>
                <DialogTitle>아이디 중복 확인</DialogTitle>
                <DialogBody>
                    <p>{message}</p>
                </DialogBody>
                <DialogActions>
                    <Button color={'transparentMedium'} onClick={submitForm}  className={'h-[40px] w-[62px]' }>
                        취소
                    </Button>
                    <Button onClick={submitForm} className={'h-[40px] w-[62px]'} color={'primaryMedium'}>
                        확인
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}


export default MemberExistsCheck