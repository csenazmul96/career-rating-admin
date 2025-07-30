import {useState} from "react";


function ContentRegistantNameWithHover({video, contentType}) {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <div className={'relative w-max'}>
            <span
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            > {contentType === 'document' && <span>({video.role})</span>}
                {video.registrantName} {video.registrant}</span>
            {isHovered && video.memberId &&
                <div className="pl-2 absolute left-full  top-0 z-10">
                    <div className="custom-scrollbar max-h-[108px]  bg-textColor bg-opacity-70 text-white rounded px-3 py-1  min-w-[122px]">
                        <div className="space-y-1 flex content-center">{video.memberId}</div>
                    </div>
                </div>
            }
        </div>
    );
}

export default ContentRegistantNameWithHover;