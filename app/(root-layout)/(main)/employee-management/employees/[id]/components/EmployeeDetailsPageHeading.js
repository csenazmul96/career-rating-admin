import {Button} from "@/components/common/button";
import {Heading} from "@/components/common/heading";

const EmployeeDetailsPageHeading = ({employee}) => {
    return (
        <>
            <Heading level={2} className={`items-center gap-2 flex`}>
                <Button color={`${employee?.courseDivision === 'regular' ? 'primarySmall' : 'transparentSmall'}`}>
                    {employee?.courseDivision === 'regular' ? '정규' : '상시'}
                </Button>
                <span>{employee?.name}</span>
            </Heading>
        </>
    );
};

export default EmployeeDetailsPageHeading;