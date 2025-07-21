export const formatErrors = (errors = []) => errors.reduce((acc, curr) => {
    return { ...acc, ...curr };
}, {});


export function getNearestQuestionError(errors) {
    if (errors) {
        const questionKeys = Object.keys(errors).filter(key => key.startsWith('questions.'));

        const questionNumbers = questionKeys.map(key => {
            const parts = key.split('.');
            return Number(parts[1]);
        }).filter(num => !isNaN(num));

        return  Math.min(...questionNumbers);

        // const smallestQuestionNumber = Math.min(...questionNumbers);
        //
        // const smallestQuestionErrors = questionKeys
        //     .filter(key => {
        //         const parts = key.split('.');
        //         return Number(parts[1]) === smallestQuestionNumber;
        //     });
        //
        // return smallestQuestionErrors[0]
    }
    return null;
}