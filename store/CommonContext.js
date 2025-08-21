import { createContext, useContext, useState } from "react";

const CommonContext = createContext({
    countries: [],
    industries: [],
    languages: [],
    degreeNames: [],
    gradingSystems: [],
    gradingScales: [],
    educationLevels: [],
    setCountries: () => {},
    setCities: () => {},
    setIndustries: () => {},
    setDegreeNames: () => {},
    setLanguages: () => {},
    setGradingSystems: () => {},
    setGradingScales: () => {},
    setEducationLevels: () => {},
});

export const CommonContextProvider = ({ children }) => {
    const [countries, assignCountries] = useState([]);
    const [industries, assignIndustries] = useState([]);
    const [languages, assignLanguage] = useState([]);
    const [degreeNames, assignDegreeNames] = useState([]);
    const [gradingSystems, assignGradingSystems] = useState([]);
    const [gradingScales, assignGradingScales] = useState([]);
    const [educationLevels, assignEducationLevels] = useState([]);

    const setCountries = (payload) =>{
        assignCountries(payload)
    }
    const setIndustries = (payload) =>{
        assignIndustries(payload)
    }
    const setLanguages = (payload) =>{
        assignLanguage(payload)
    }
    const setDegreeNames = (payload) =>{
        assignDegreeNames(payload)
    }
    const setGradingSystems = (payload) =>{
        assignGradingSystems(payload)
    }
    const setGradingScales = (payload) =>{
        assignGradingScales(payload)
    }
    const setEducationLevels = (payload) =>{
        assignEducationLevels(payload)
    }

    const contexts = {
        countries,
        degreeNames,
        industries,
        languages,
        gradingScales,
        gradingSystems,
        educationLevels,
        setCountries,
        setIndustries,
        setLanguages,
        setDegreeNames,
        setGradingSystems,
        setGradingScales,
        setEducationLevels,
    };

    return (
        <CommonContext.Provider value={contexts}>
            {children}
        </CommonContext.Provider>
    );
};

export const useCommonContext = () => useContext(CommonContext);
