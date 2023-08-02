import React from 'react'
import { useState } from "react";
import signupsvg from '../svg1.svg'
import SignIn from './sign';
import SignUp from './register';
import '../signin/home.css'

function Home() {
    const [ value, setValue ] = useState("SignIn");
    

    return (
        <>
            <div class="flex container">
                <div className='home'>
                    <div className=''>
                        <h1 class="title-font font-medium text-3xl text-gray-900">
                            Slow-carb next level shoindcgoitch ethical authentic, poko
                            scenester
                        </h1>
                        <p class="leading-relaxed mt-4">
                            Poke slow-carb mixtape knausgaard, typewriter street art
                            gentrify hammock starladder roathse. Craies vegan tousled etsy{" "}
                            {value === "SignIn" ?
                                <button onClick={() =>
                                    setValue("SignUp")
                                }>
                                    Register
                                </button>
                                :
                                <button onClick={() =>
                                    setValue('SignIn')
                                }>
                                    Signin
                                </button>
                            }
                            .
                        </p>
                    </div>
                    <div>
                        <img src={signupsvg} />
                    </div>
                </div>
                {/* {value === "SignIn" ? <SignIn/>: <SignUp/>} */}
                {value === "SignIn" ?   <SignIn />:<SignUp   />}
            </div>
        </>
    )
}

export default Home;


    // ternrinery opprator

// {condition ? output1: outpiut2}

   