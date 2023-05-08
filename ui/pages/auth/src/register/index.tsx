import React from 'react';

// @ts-ignore
const LabeledInput = React.lazy(() => import('SharedUI/LabeledInput'));

const Register = () => {
    return (
        <div>
            <h1>Hello to Register Page</h1>
            <React.Suspense fallback={'Loading...'}>
                <LabeledInput
                    label={'First Name: '}
                    placeholder={'Enter Your Name'}
                />
            </React.Suspense>
        </div>
    );
};

export default Register;