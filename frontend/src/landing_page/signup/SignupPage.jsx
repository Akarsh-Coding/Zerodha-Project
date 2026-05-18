import React from 'react';
import OpenAccount from '../OpenAccount';
import FAQS from './FAQs';
import Explore from './Explore';
import Hero from './Hero';

function SignupPage() {
    return ( 
        <div>
            <Hero/>
            <Explore/>
            <FAQS/>
            <OpenAccount/>
        </div>
    );
}

export default SignupPage;