import PreLoader from "@/components/common/PreLoader";
import React from "react";

const LoaderComponent = () => {
return  (
    <>
        <div className="placeholder relative h-[300px] bg-gray-50">
            <PreLoader/>
        </div>
    </>
)
}

export default LoaderComponent