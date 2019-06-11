export const classList = (obj) => {
    return Object.entries(obj)
        .filter(([key, value]) => value)
        .map(([key]) => key)
        .join(" ");
}
export const convertFormObjToArray = (obj) => {
    const form = [];
    for (let key in obj) {
        form.push({
            key: key,
            config: obj[key]
        });
    }
    return form;
}

export const getFormValues = (formObj, filter) => {
    let submitForm = {};

    const getFormObj = (f, key) => {
        
        const { value } = formObj[key];
        f.forEach(param => {
            if (param.toString() === key.toString()) {
                submitForm = {
                    ...submitForm,
                    [key]: value
                }
            }
        })
        return submitForm;


    }
    for (let key in formObj) {
        const { value } = formObj[key];

        if (filter !== undefined) {
            submitForm = getFormObj(filter, key)
        } else {
            submitForm = {
                ...submitForm,
                [key]: value
            }
        }

    }

    return submitForm;
}