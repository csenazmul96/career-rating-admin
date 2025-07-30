"use client";

import { useState } from 'react';
import { Alert, AlertTitle, AlertDescription, AlertActions } from '@/components/common/alert';
import { Button } from '@/components/common/button';

function Modal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button type="button" onClick={() => setIsOpen(true)}>
                open
            </Button>
            <Alert size="md" open={isOpen} onClose={() => setIsOpen(false)}>
                <AlertTitle>관리자 목록으로 이동</AlertTitle>
                <AlertDescription>
                    해당 조직을 삭제하면 하위 조직도 함께 삭제되며, 멤버가 포함된 조직을 삭제하면 ‘전체 조직’ 그룹으로 분류됩니다. 계속하시겠습니까?
                </AlertDescription>
                <AlertActions>
                    <Button plain onClick={() => setIsOpen(false)}>
                        취소
                    </Button>
                    <Button onClick={() => setIsOpen(false)}>확인</Button>
                </AlertActions>
            </Alert>
        </>
    );
}

export default Modal;
