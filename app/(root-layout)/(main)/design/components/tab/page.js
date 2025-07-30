"use client"

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

export default function Example() {
    return (
        <TabGroup defaultIndex={1} className="tab-wrapper-controller">
            <TabList className="tab-list-controller">
                <Tab className={({ selected }) => `tab-list-controller-btn  ${ selected ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>회원정보</Tab>
                <Tab className={({ selected }) => `tab-list-controller-btn  ${ selected ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>수강내역</Tab>
                <Tab className={({ selected }) => `tab-list-controller-btn  ${ selected ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>사이트 로그인 로그</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>Content 1</TabPanel>

                {/* Displays this panel by default */}
                <TabPanel>Content 2</TabPanel>

                <TabPanel>Content 3</TabPanel>
            </TabPanels>
        </TabGroup>
    )
}