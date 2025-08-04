import LmsPageHeading from "@/components/common/LmsPageHeading";
import EducationForm
    from "@/app/(root-layout)/(main)/employee-management/employees/[id]/educations/create/components/EducationForm";
import {
    getCountries,
    getDegreeNames,
    getEducationLevel,
    getGradingScale,
    getGradingSystem
} from "@/utils/api/commonAPI";

export default async function Page() {
    const [countries, educationLevels, gradingSystems, gradingScales, degreeNames] = await Promise.all([
        getCountries(),
        getEducationLevel(),
        getGradingSystem(),
        getGradingScale(),
        getDegreeNames(),
    ]);

    return (
        <div className="flex flex-col">
            <LmsPageHeading title="과정 등록"/>
            <EducationForm
                education={null}
                countries={countries}
                educationLevels={educationLevels}
                gradingSystems={gradingSystems}
                degreeNames={degreeNames}
                gradingScales={gradingScales} />
        </div>
    );
}
