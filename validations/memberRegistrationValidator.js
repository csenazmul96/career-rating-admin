import validator from 'validator';
export async function memberCreateValidation(formData){
    let errors = {};
    if (validator.isEmpty(formData.name || '')) {
        errors.name = 'Name is required';
    }
    if (validator.isEmpty(formData.idNo || '')) {
        errors.idNo = 'idNo is required';
    }
    if (validator.isEmpty(formData.password || '')) {
        errors.password = 'password is required';
    }
    if (!validator.equals(formData.password, formData.confirm_password)) {
        errors.confirm_password = 'password is not matched';
    }
    if (validator.isEmpty(formData.confirm_password || '')) {
        errors.confirm_password = 'confirm password is required';
    }
    if (validator.isEmpty(formData.email || '')) {
        errors.email = 'email is required';
    }
    if (validator.isEmpty(formData.contact.first || '')) {
        errors.contact = 'contact is required';
    }
    if (validator.isEmpty(formData.contact.middle || '')) {
        errors.contact = 'contact is required';
    }
    if (validator.isEmpty(formData.contact.last || '')) {
        errors.contact = 'contact is required';
    }
    // if (validator.isEmpty(formData.dob || '')) {
    //     errors.dob = 'dob is required';
    // }
    // if (validator.isEmpty(formData.organizationGroupId || '')) {
    //     errors.organizationGroupId = 'organizationGroupId is required';
    // }
    // if (validator.isEmpty(formData.situation || '')) {
    //     errors.situation = 'situation is required';
    // }
    if (!formData.memberRoles || !Array.isArray(formData.memberRoles) || formData.memberRoles.length === 0) {
        errors.memberRoles = 'MemberRoles is required';
    }

    return Object.keys(errors).length === 0 ? false : errors;
}