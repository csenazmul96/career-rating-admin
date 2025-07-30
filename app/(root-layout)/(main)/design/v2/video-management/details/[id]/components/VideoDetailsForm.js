"use client"

import React from 'react';
import {Heading} from "@/components/common/heading";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import GroupSelect from "./GroupSelect";
import PermissionSelect
  from "@/app/(root-layout)/(content-layout)/content-management/video-management/details/[id]/components/PermissionSelect";

const VideoDetailsForm = ({video, formData, setFormData, roles, errors}) => {
  return (
    <>
      <div className="inner">
        <Heading level={2} className={`!pb-8`}>
          <span>영상 정보</span>
        </Heading>
        <FieldWrapper label="파일 이름" singleElement={true}>
          <LmsStandardInputField singleElement={true}
                                 placeholder={`피그마의 정석 [제1강]`}
                                 value={formData.title ?formData.title : ''}
                                 error={errors?.title}
                                 changeDataHandler={(name, value) => setFormData({...formData, title: value})}
                                 fieldClass="w-full"/>
        </FieldWrapper>

        <GroupSelect video={video}
                     formData={formData}
                     setFormData={setFormData} />

        <FieldWrapper label="태그" singleElement={true}>
          <LmsStandardInputField singleElement={true}
                                 value={formData.tag ? formData.tag : ''}
                                 error={errors?.tag}
                                 changeDataHandler={(name, value) => setFormData({...formData, tag: value})}
                                 placeholder={`피그마의 정석 [제1강]`}
                                 fieldClass="w-full"/>
        </FieldWrapper>

        <PermissionSelect formData={formData}
                          roles={roles}
                          customPermissions={video?.customPermissions}
                          errors={errors}
                          setFormData={setFormData} />
      </div>
    </>
  );
};

export default VideoDetailsForm;