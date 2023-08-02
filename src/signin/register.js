import React from 'react'
import '../signin/home.css'

function SignUp() {
  return (

    <>
      <div className='register'>
        <section class="text-gray-600 body-font">
          <div class="container px-20  mx-auto flex flex-wrap items-center">
            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 class="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">Register</h2>
              </div>
              <form class="space-y-6" action="#" method="POST">
                <div>

                  <div class="mt-2">
                    <input id="email" name="email" type="email" placeholder='Email' autocomplete="email" required class="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div>

                  <div class="mt-2">
                    <input id="password" name="password" type="password" placeholder='Password' autocomplete="current-password" required class="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div>

                  <div class="mt-2">
                    <input id="password" name="password" type="password" placeholder='ConformPassword' autocomplete="current-password" required class="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div>

                  <div class="mt-2">
                    <input id="password" name="password" type="password" placeholder='Age' autocomplete="current-password" required class="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div>
                  <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                </div>
              </form>

              <p class="mt-1 text-center text-sm text-gray-500">
                or continue with
              </p>
            </div>
          </div>
        </section>
      </div>
    </>

  )
}


export default SignUp;