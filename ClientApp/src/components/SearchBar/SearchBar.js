// Hooks
import { useState } from 'react';
import { useScale } from "../../contexts/ScaleContext";

// Components
import SelectInput from './SelectInput';
import TextInput from './TextInput';
import Button from './Button';
import GenerateRandomScale from './GenerateRandomScale';

// Data
import selectOptions from "../../data/SelectOptions";

const initialFormState = {
    inputValue: '',
    selectedScale: ''
};

const initialErrorState = {
    inputValue: '',
    selectedScale: ''
};

const SearchBar = () => {
    const [formData, setFormData] = useState(initialFormState);
    const [formErrors, setFormErrors] = useState(initialErrorState);
    const { fetchData } = useScale();
    
    const validate = () => {
        const newErrors = {
            inputValue: formData.inputValue.trim() === '' ? 'Search is required. ' : '',
            selectedScale: formData.selectedScale === '' ? 'Select is required. ' : ''
        };
        return newErrors;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData, // Spread the previous state
            [name]: value // Update the property that matches the input's name
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validate();
        setFormErrors(validationErrors);

        // Checks if there are no validation errors, otherwise will fetch data
        if (Object.values(validationErrors).every(x => x === '')) {
            fetchData(formData.selectedScale, formData.inputValue);
            setFormData((prevData) => ({
                ...prevData,
                inputValue: ''
            }));
        }
    };

    const handleGenerate = (scaleValue, noteValue) => {
        fetchData(scaleValue, noteValue);
        setFormData((prevData) => ({
            ...prevData,
            selectedScale: scaleValue
        }));
    };

    return (
        <section className="col-md-6 mx-auto mb-5">
            <h1 className="h1 mb-5 text-center">Find Your Scale</h1>
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="row col-lg-12 g-2">

                    <div className="col-12 col-lg-6">
                        <TextInput
                            name="inputValue"
                            value={formData.inputValue}
                            placeholder="Search.."
                            onChange={handleChange}
                            error={formErrors.inputValue}
                        />
                    </div>

                    <div className="col-12 col-lg-4">
                        <SelectInput
                            name="selectedScale"
                            value={formData.selectedScale}
                            options={selectOptions}
                            onChange={handleChange}
                            error={formErrors.selectedScale}
                        />
                    </div>

                    <div className="col-12 col-lg-2 d-grid">
                        <Button label="Submit" type="submit" className="btn btn-dark" />
                    </div>
                    
                </div>
            </form>

            <div className="d-grid mb-2">
                <GenerateRandomScale onGenerate={handleGenerate} selectOptions={selectOptions} />
            </div>
            {Object.values(formErrors).map(x => x !== "" ? <span className="text-danger fs-6">{x}</span> : "")}
        </section>
        
        
    );
}

export default SearchBar;