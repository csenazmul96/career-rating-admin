import {Button} from "@/components/common/button";
import {Heading} from "@/components/common/heading";

const EmployeeDetailsPageHeading = ({employee}) => {
    return (
        <>
            <Heading level={2} className={`items-center gap-2 flex`}>
                <Button color={`${employee?.status ? 'primarySmall' : 'transparentSmall'}`}>
                    {employee?.status ? 'Active' : 'Inactive'}
                </Button>
                <span>{employee?.first_name} {employee?.last_name} ({employee?.username})</span>
            </Heading>
        </>
    );
};

export default EmployeeDetailsPageHeading;