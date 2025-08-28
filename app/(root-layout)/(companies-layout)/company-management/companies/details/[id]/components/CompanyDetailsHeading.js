import {Button} from "@/components/common/button";
import {Heading} from "@/components/common/heading";

const CompanyDetailsHeading = ({company}) => {
    return (
        <>
            <Heading level={2} className={`items-center gap-2 flex`}>
                <Button color={`${company?.verified ? 'primarySmall' : 'transparentSmall'}`}>
                    {company?.verified ? 'Verified' : 'Not Verified'}
                </Button>
                <span>{company?.name} {company.company_type && <span className={"text-13"}>({company.company_type })</span> }</span>
            </Heading>
        </>
    );
};

export default CompanyDetailsHeading;