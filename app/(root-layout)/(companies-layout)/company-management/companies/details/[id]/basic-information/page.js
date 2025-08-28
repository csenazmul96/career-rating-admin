import {getSingleCompanies} from "@/utils/api/career/companiesAPI";
import Link from "next/link";
import {Button} from "@/components/common/button";
import {ChevronRight, Menu, Pencil} from "lucide-react";
import FieldWrapper from "@/components/common/form/FieldWrapper";

export default async function Page({params}) {
    const allParams = await params
    const company = await getSingleCompanies(allParams.id)
    return (
        <>
            <FieldWrapper
                label="Company Name"
                singleElement={true}
                className={`min-h-[55.5px]`}
            >
                <span>{company.name} {company.brand_name ? `(${company.brand_name })` : ''}</span>
            </FieldWrapper>
            <FieldWrapper
                label="Tax Number"
                singleElement={true}
                className={`min-h-[55.5px]`}
            >
                <span>{company.tax_id}</span>
            </FieldWrapper>
            <FieldWrapper
                label="Industry Name"
                singleElement={true}
                className={`min-h-[55.5px]`}
            >
                <div className={"flex items-center w-full gap-3"}>
                    {company.industry && <span>{company.industry.name }</span>}
                    {company.subIndustry && <span className={"flex items-center "}> <ChevronRight /> {company.subIndustry.name } </span>}
                    {company.subSubIndustry && <span className={"flex items-center "}> <ChevronRight /> {company.subSubIndustry.name } </span>}
                </div>
            </FieldWrapper>
            <FieldWrapper
                label="Founded Year"
                singleElement={true}
                className={`min-h-[55.5px]`}
            >
                <div className={"flex items-center w-full gap-3"}>
                    {company.founded_year}
                </div>
            </FieldWrapper>
            <FieldWrapper
                label="Address"
                singleElement={true}
                className={`min-h-[55.5px]`}
            >
                <div className={"flex items-center w-full gap-3"}>
                    <div>
                        {company.address_line_1}
                        {company.address_line_2 && `, ${company.address_line_2}`}
                        {company.post_code && `, ${company.post_code}`}
                        {company.city && `, ${company.city}`}
                        {company.state && `, ${company.state}`}
                        {company.country_code && `, ${company.country_code}`}
                    </div>
                </div>
            </FieldWrapper>
            <FieldWrapper
                label="Email"
                singleElement={true}
                className={`min-h-[55.5px]`}
            >
                <div className={"flex items-center w-full gap-3"}>
                    {company.email}
                </div>
            </FieldWrapper>
            <FieldWrapper
                label="Phone"
                singleElement={true}
                className={`min-h-[55.5px]`}
            >
                <div className={"flex items-center w-full gap-3"}>
                    {company.phone}
                </div>
            </FieldWrapper>
            <FieldWrapper
                label="Website"
                singleElement={true}
                className={`min-h-[55.5px]`}
            >
                <div className={"flex items-center w-full gap-3"}>
                    {company.website}
                </div>
            </FieldWrapper>
            <FieldWrapper
                label="Admin"
                singleElement={true}
                className={`min-h-[55.5px]`}
            >
                <div className={"flex items-center w-full gap-3"}>
                    {company.user && <div>
                        {company.user.username}, {company.user.email}
                    </div>}
                </div>
            </FieldWrapper>

            <div className="flex items-center justify-between border-t border-commonBorderColor pt-8 lg:pt-10">
                <Link href={"/company-management/companies"}>
                    <Button color="transparent" className="w-full mb-2 text-center cursor-pointer">
                        <span><Menu size={20} /> </span>
                        <span className="text-19px leading-[normal]">목록</span>
                    </Button>
                </Link>

                <Link href={`/company-management/companies/update/${allParams.id}`}>
                    <Button color="transparent" className="  mb-2 text-center cursor-pointer">
                        <span> <Pencil size={20} /> </span>
                        <span className="text-19px">수정</span>
                    </Button>
                </Link>
            </div>
        </>
    );
}
