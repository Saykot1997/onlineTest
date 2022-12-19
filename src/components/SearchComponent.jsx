import React from 'react'
import { useState } from 'react'

export default function SearchComponent({ toggleSearchType, searchType, flightDataFatch }) {

    const [selected, setSelected] = useState("")

    return (
        <div className=" py-5 w-full">
            <div className=" w-full xl:w-[1200px] mx-auto">
                <div className=" w-full flex justify-center">
                    <div className=" border border-primary grid grid-cols-3">
                        <div onClick={() => toggleSearchType("round-trip")} className={` w-full flex items-center justify-center cursor-pointer ${searchType === "round-trip" ? "text-white bg-primary" : "text-primary border-r border-primary"}`}>
                            <span className=" font-semibold text-sm py-1 px-3">Round Trip</span>
                        </div>
                        <div onClick={() => toggleSearchType("one-way")} className={` w-full flex items-center justify-center cursor-pointer ${searchType === "one-way" ? "text-white bg-primary" : "text-primary border-r border-primary"}`}>
                            <span className=" font-semibold text-sm py-1 px-3">One Way</span>
                        </div>
                        <div onClick={() => toggleSearchType("multi-city")} className={` w-full flex items-center justify-center cursor-pointer ${searchType === "multi-city" ? "text-white bg-primary" : "text-primary"}`}>
                            <span className=" font-semibold text-sm py-1 px-3">Multi city</span>
                        </div>
                    </div>
                </div>
                <div className=' mt-5 py-2 px-1 border-y border-blue-500'>
                    <div className=' flex justify-between gap-2'>
                        <input type="text" name="" id="" placeholder='LHR' className=' border border-gray-500 w-36 py-1 px-2 focus:outline-none' />
                        <input type="text" name="" id="" placeholder='CDG' className=' border border-gray-500 w-36 py-1 px-2 focus:outline-none' />
                        <input type="date" name="" id="" placeholder='Date' className=' border border-gray-500 w-36 py-1 px-2 focus:outline-none' />
                        <select name="" id="" className=' border border-gray-500 w-32 focus:outline-none py-1 px-2 '>
                            <option value="">Date-</option>
                            <option value="">1</option>
                            <option value="">2</option>
                        </select>
                        <select name="" id="" className=' border border-gray-500 w-32 focus:outline-none py-1 px-2 '>
                            <option value="">Date+</option>
                            <option value="">1</option>
                            <option value="">2</option>
                        </select>
                        <select name="" id="" className=' border border-gray-500 w-32 focus:outline-none py-1 px-2 '>
                            <option value="">Anytime</option>
                            <option value="">6am - 12pm </option>
                            <option value="">12pm - 6pm</option>
                            <option value="">6pm - 12am</option>
                        </select>
                        <select name="" id="" className=' border border-gray-500 w-32 focus:outline-none py-1 px-2 '>
                            <option value="">ADT</option>
                            <option value="">CHI</option>
                        </select>
                        <select name="" id="" className=' border border-gray-500 w-32 focus:outline-none py-1 px-2 '>
                            <option value="">1</option>
                            <option value="">2</option>
                        </select>
                    </div>
                </div>
                <div className=' w-full py-3 border-b border-blue-500 flex justify-between'>
                    <div className=' flex items-center gap-2'>
                        <input type="checkbox" id='extra' className=' p-1' />
                        <label htmlFor="extra" className=' cursor-pointer font-medium'>Extra Option</label>
                    </div>
                    <div className=' flex items-center gap-3'>
                        <p>Environment</p>
                        <div className=' flex items-center gap-3'>
                            <div>
                                <input type="radio" id='dummy' checked={selected === "dummy"} onChange={() => setSelected("dummy")} />
                                <label htmlFor="dummy" className=' ml-2 cursor-pointer'>Dummy</label>
                            </div>
                            <div>
                                <input type="radio" id='pdt' checked={selected === "pdt"} onChange={() => setSelected("pdt")} />
                                <label htmlFor="pdt" className=' ml-2 cursor-pointer'>PDT</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button onClick={flightDataFatch} className=' bg-primary py-1 px-3 rounded text-white font-medium'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
