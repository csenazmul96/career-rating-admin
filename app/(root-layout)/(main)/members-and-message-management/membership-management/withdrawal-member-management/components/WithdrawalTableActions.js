'use client'
import React, {useState} from "react";
import LmsStandardSelectInputV2 from "@/components/common/form/LmsStandardSelectInputV2";
import {usePathname, useRouter} from "next/navigation";

const WithdrawalTableActions = ({queryParams, pagination}) => {
    const pathname = usePathname();
    const {replace} = useRouter();
    const oldParams = new URLSearchParams(queryParams)
    const [size, setSize] = useState(oldParams && oldParams.get('size') ? oldParams.get('size') : 5)
    const handleOnChnage = (column, value) =>{
        setSize(value)
        oldParams.set('size', value)
        oldParams.set('page', 1)
        sendSearchRequest()
    }

    const sendSearchRequest = () => {
        replace(`${pathname}?${new URLSearchParams(oldParams)}`);
    }
  return (
      <div className="table-filter flex items-center pb-6">
          <div className="flex items-center gap-2">
              <div className="">Total</div>
              <div className="text-themeColor">{pagination && pagination.total ? pagination.total : 0}건</div>
              <div className="">
                  <LmsStandardSelectInputV2
                      name={`size`}
                      size={'small'}
                      fieldClass={'w-[87px]'}
                      value={size}
                      options={[{id: 5, name: "5"}, {id: 25, name: "25"}, {id: 50, name: "50"}, {id: 100, name: "100"}]}
                      changeDataHandler={handleOnChnage}/>
              </div>
              <div>건 씩보기</div>
          </div>
      </div>
  );
}

export default WithdrawalTableActions