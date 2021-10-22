import { useState } from "react"

export const useForm = (initialState = {}) => {
    
    const [formValues, setFormValues] = useState(initialState);

    const reset = () => setFormValues(initialState);

    const onChange = ({target}) => {

        setFormValues({
            ...formValues,
            [target.name]: target.value,
        });

    };

    return { formValues, onChange, reset };

};