
import React, { useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { IoMdClose } from "react-icons/io";
import { PiCheckCircle } from "react-icons/pi";

const FileUploadProgress = ({ value = 0, uniqueName, deleteFile, loading }) => {
  const [status, setStatus] = React.useState("uploading");

  useEffect(() => {
    if (value === 100) {
      setStatus("seeding");
      setTimeout(() => {
        setStatus("completed");
      }, 3000);
    } else {
      setStatus("uploading");
    }
  }, [value]);

  return (
    <>
      {status === "completed" ? (
        <span onClick={deleteFile}>
          {" "}
          {loading.status && loading.uniqueName === uniqueName ? (
            <span></span>
          ) : (
            <IoMdClose className="size-[24px] text-[#C6C6C6] cursor-pointer" />
          )}
        </span>
      ) : status === "seeding" ? (
        <span>
          <PiCheckCircle className="size-[24px] text-[#246BEB] cursor-pointer" />
        </span>
      ) : (
        <div style={{ width: 24, height: 24 }}>
          <CircularProgressbar
            value={value}
            strokeWidth={16}
            styles={{
              root: {},
              path: {
                stroke: `#246BEB`,
                transition: "stroke-dashoffset 0.5s ease 0s",
                transform: "rotate(0.25turn)",
                transformOrigin: "center center",
              },
              trail: {
                stroke: "#E4E4E4",
                strokeLinecap: "butt",
                transform: "rotate(0.25turn)",
                transformOrigin: "center center",
              },
              background: {
                fill: "#246BEB",
              },
            }}
          />
        </div>
      )}
    </>
  );
};

export default FileUploadProgress;
