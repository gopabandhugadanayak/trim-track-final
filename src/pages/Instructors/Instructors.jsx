import React from 'react';
import { useTitle } from '../../hooks/useTitle';
import ShowInstructors from './All/ShowInstructors';

const Instructors = () => {
    useTitle('Salon | Trim Track - Be Bold');
    return (
        <section>
            <ShowInstructors />
        </section>
    );
};

export default Instructors;