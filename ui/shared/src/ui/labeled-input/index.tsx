import React from 'react';
import {StyledInput, StyledLabel, StyledLabeledInputContainer} from "../../styled";

const LabeledInput = ({ label, placeholder, theme = 'light', fs = 'md', size = 'md' }) => {
    return (
        <StyledLabeledInputContainer theme={theme}>
            <StyledLabel>{ label }</StyledLabel>
            <StyledInput placeholder={placeholder}/>
        </StyledLabeledInputContainer>
    );
};

export default LabeledInput;