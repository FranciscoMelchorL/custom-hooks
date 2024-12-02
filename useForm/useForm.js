import { useState } from 'react';
import PropTypes from 'prop-types';

export const useForm = ( initialForm = {} ) => {

    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value,
        })
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}

useForm = {
    initialForm: PropTypes.object
}
