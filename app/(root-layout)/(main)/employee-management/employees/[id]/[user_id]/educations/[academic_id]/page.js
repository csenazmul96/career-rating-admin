import {getSingleAcademicRecords} from "@/utils/api/career/academicApi";
import LmsPageHeading from "@/components/common/LmsPageHeading";
import EducationForm
    from "@/app/(root-layout)/(main)/employee-management/employees/[id]/[user_id]/educations/create/components/EducationForm";
import {
    getCountries,
    getDegreeNames,
    getEducationLevel,
    getGradingScale,
    getGradingSystem, getLanguages
} from "@/utils/api/career/commonAPI";

export default async function Page({ params}) {
    const {academic_id} = await params;
    const [academic, countries,
        educationLevels,
        gradingSystems,
        gradingScales,
        degreeNames,
        languages] = await Promise.all([
        getSingleAcademicRecords(academic_id),
        getCountries(),
        getEducationLevel(),
        getGradingSystem(),
        getGradingScale(),
        getDegreeNames(),
        getLanguages(),
    ]);

    return (
        <>
            <div className="flex flex-col">
                <LmsPageHeading title="과정 등록"/>
                <EducationForm
                    education={academic}
                    countries={countries}
                    educationLevels={educationLevels}
                    gradingSystems={gradingSystems}
                    degreeNames={degreeNames}
                    languages={languages}
                    gradingScales={gradingScales} />
            </div>
        </>
    );
}
