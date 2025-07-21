import validator from 'validator';
export async function createRoleValidation(formData){
    let errors = {};
    if (validator.isEmpty(formData.name || '')) {
        errors.name = 'Name is required';
    }
    if (!formData.permissions || !Array.isArray(formData.permissions) || formData.permissions.length === 0) {
        errors.permissions = 'At least one item is required';
    }

    return Object.keys(errors).length === 0 ? false : errors;
}