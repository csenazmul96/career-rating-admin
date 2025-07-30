"use client"

import React from 'react';
import {Heading} from "@/components/common/heading";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardRadioFieldGroup from "@/components/common/form/LmsStandardRadioFieldGroup";
import ToggleSwitch from "@/components/common/form/ToggleSwitch";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import {Button} from "@/components/common/button";
import LmsStandardSelectInputV2 from "@/components/common/form/LmsStandardSelectInputV2";
import {Radio, RadioField, RadioGroup} from "@/components/common/radio";
import {Label} from "@/components/common/fieldset";
import ToolTip from "@/components/common/ToolTip";
import {AlignJustify, CircleMinus, Equal, Plus, Trash2, X} from "lucide-react";
import Dropzone from "react-dropzone";
import LmsStandardTextArea from "@/components/common/form/LmsStandardTextArea";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/common/table";
import {Checkbox, CheckboxField} from "@/components/common/checkbox";

const Page = () => {
    return (
        <>
            <div className="flex flex-col">
                <p>evaluation page</p>
            </div>
        </>
    );
};

export default Page;