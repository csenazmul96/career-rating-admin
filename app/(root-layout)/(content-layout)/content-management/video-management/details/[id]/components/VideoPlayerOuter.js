 "use client"

 import {Dialog, DialogBody} from "@/components/common/dialog";
 import LmsVideoPlayer from "@/components/common/LmsVideoPlayer";

 function VideoPlayerOuter({video, open, setOpen}) {

    return (
        <Dialog open={open} onClose={setOpen} className={'!p-0 w-[500px]'}  >
            <DialogBody className={'!p-0 !mt-0 w-[500px'}>
                <LmsVideoPlayer video={video} />
            </DialogBody>
        </Dialog>
    );
}

export default VideoPlayerOuter;