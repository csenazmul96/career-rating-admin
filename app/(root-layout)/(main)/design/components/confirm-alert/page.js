"use client"

import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {Button} from "@/components/common/button";
import ConfirmPopup from "@/components/common/confirmAlert/ConfirmPopup";

const Page = () => {
    const handleDelete = () => {


        confirmAlert({
            title: '관리자 목록으로 이동',
            message: '관리자 목록으로 이동하시겠습니까 작성중인 내용은 삭제 됩니다.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        console.log('Confirmed');
                    }
                },
                {
                    label: 'No',
                    onClick: () => {
                        console.log('Cancelled');
                    }
                }
            ],
            customUI: ({ title, message, onClose , buttons}) => {
                return (
                    <ConfirmPopup title={title} message={message} onClose={onClose} onConfirm={buttons} />
                );
            }
        });

    };

    return (
        <div>
            <h1>React Confirm Alert Example</h1>
            <button onClick={handleDelete}>Delete Item</button>
        </div>
    );
};

export default Page;
