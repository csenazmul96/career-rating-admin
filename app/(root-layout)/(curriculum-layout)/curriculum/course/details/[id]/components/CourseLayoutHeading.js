import {Button} from "@/components/common/button";
import {Heading} from "@/components/common/heading";

const CourseLayoutHeading = ({course}) => {
    return (
        <>
            <Heading level={2} className={`items-center gap-2 flex`}>
                <Button color={`${course?.courseDivision === 'regular' ? 'primarySmall' : 'transparentSmall'}`}>
                    {course?.courseDivision === 'regular' ? '정규' : '상시'}
                </Button>
                <span>{course?.courseName} ({course?.situation === 'END' ? '종료' : '진행중'})</span>
            </Heading>
        </>
    );
};

export default CourseLayoutHeading;