import Link from "next/link"
import React from 'react'

const signin = () => {
        return (
            <div className="bg-gray-50 dark:text-white dark:bg-gray-900 text-center grid justify-items-center items-center h-screen">
                <div>
                  <h1 className="subtitle p-8">Sign In!</h1>
                    <div className="p-5"> 
                      <input className="inputs" placeholder="Username"></input>
                    </div>
                    <div className="p-5">
                        <input className="inputs" type="password" placeholder="Password"></input>
                    </div>
                    <div className="p-3 flex flex-row space-x-2 place-content-center">
                        <Link href="/">
                            <button className="btn">Back</button>
                        </Link>
                        <button className="btn ">Login</button>
                    </div>
                </div>
            </div>
        );
}

export default signin















