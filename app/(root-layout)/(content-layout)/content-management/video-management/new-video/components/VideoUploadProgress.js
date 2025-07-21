import {CircularProgressbar} from "react-circular-progressbar";
import React, {useEffect} from "react";
import {PiCheckCircle} from "react-icons/pi";
import {IoMdClose} from "react-icons/io";
import {faCircleNotch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const VideoUploadProgress = ({value = 0, uniqueName, deleteVideo, loading}) => {
    const [status, setStatus] = React.useState('uploading')

    useEffect(() => {
         if (value === 100) {
            setStatus('seeding')
            setTimeout(() => {
                setStatus('completed')
            }, 3000)

        } else {
            setStatus('uploading')
        }
    }, [value]);

    return (
        <>{
            status === 'completed' ? <span onClick={deleteVideo}> { loading.status && loading.uniqueName === uniqueName ? <FontAwesomeIcon className="size-[24px] text-[#C6C6C6]" icon={faCircleNotch} spin/> : <IoMdClose className="size-[24px] text-[#C6C6C6] cursor-pointer"/> }</span>
            : status === 'seeding' ?
                <span><PiCheckCircle className="size-[24px] text-[#246BEB] cursor-pointer"/></span>
                :
                <div style={{width: 24, height: 24}}>
                    <CircularProgressbar value={value}
                                         strokeWidth={16}
                                         styles={{
                                             root: {},
                                             path: {
                                                 stroke: `#246BEB`,
                                                 transition: 'stroke-dashoffset 0.5s ease 0s',
                                                 transform: 'rotate(0.25turn)',
                                                 transformOrigin: 'center center',
                                             },
                                             trail: {
                                                 stroke: '#E4E4E4',
                                                 strokeLinecap: 'butt',
                                                 transform: 'rotate(0.25turn)',
                                                 transformOrigin: 'center center',
                                             },
                                             background: {
                                                 fill: '#246BEB',
                                             },
                                         }}
                    />
                </div>
        }
        </>
    );
}

export default VideoUploadProgress