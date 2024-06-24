import { helpers } from '@vuelidate/validators';

export const isPermutationOf = (originalArray) => {
    return helpers.withParams({ type: 'isPermutationOf', originalArray }, value => {
        if (!Array.isArray(value) || value.length !== originalArray.length) {
            return false;
        }
        const sortedOriginal = [...originalArray].sort();
        const sortedValue = [...value].sort();
        return sortedOriginal.every((val, index) => val === sortedValue[index]);
    });
};
