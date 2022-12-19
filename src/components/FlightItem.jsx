import React from 'react'

export default function FlightItem({ data }) {
    return (
        <tr className=' border-b border-red-300'>
            <td className=" font-normal text-gray-500 text-center text-sm py-2">
                <p className=' text-center'>
                    {
                        data.itineraries[0].segments.map((seg, index) => {
                            return (
                                <>
                                    {seg.marketingCarrier} {seg.flightNumber}
                                    {
                                        index < data.itineraries[0].segments.length - 1 &&
                                        <br />
                                    }
                                </>
                            )
                        })
                    }
                </p>
            </td>
            <td className=" font-normal text-gray-500 text-center text-sm py-2">
                {
                    data.itineraries[0].segments.map((seg, index) => {
                        return (
                            <>
                                {seg.aircraft}
                                {
                                    index < data.itineraries[0].segments.length - 1 &&
                                    <br />
                                }
                            </>
                        )
                    })
                }
            </td>
            <td className=" font-normal text-gray-500 text-center text-sm py-2">
                {
                    data.class[0].map((clas, index) => {
                        return (
                            <>
                                {clas}
                                {
                                    index < data.class[0].length - 1 &&
                                    <br />
                                }
                            </>
                        )
                    })
                }
            </td>
            <td className=" font-normal text-gray-500 text-center text-sm py-2">
                {
                    data.fareBasis[0].map((fare, index) => {
                        return (
                            <>
                                {fare}
                                {
                                    index < data.fareBasis[0].length - 1 &&
                                    <br />
                                }
                            </>
                        )
                    })
                }

            </td>
            <td className=" font-normal text-gray-500 text-center text-sm py-2">
                {
                    data.itineraries[0].segments.map((seg, index) => {
                        return (
                            <>
                                {seg.departure.iataCode} - {seg.arrival.iataCode}
                                {
                                    index < data.itineraries[0].segments.length - 1 &&
                                    <br />
                                }
                            </>
                        )
                    })
                }

            </td>
            <td className=" font-normal text-gray-500 text-center text-sm py-2">
                {
                    data.itineraries[0].segments.map((seg, index) => {
                        return (
                            <>
                                {seg.departure.at}
                                {
                                    index < data.itineraries[0].segments.length - 1 &&
                                    <br />
                                }
                            </>
                        )
                    })
                }
            </td>
            <td className=" font-normal text-gray-500 text-center text-sm py-2">

                {
                    data.itineraries[0].segments.map((seg, index) => {
                        return (
                            <>
                                {seg.arrival.at}
                                {
                                    index < data.itineraries[0].segments.length - 1 &&
                                    <br />
                                }
                            </>
                        )
                    })
                }
            </td>
            <td className=" font-normal text-gray-500 text-center text-sm py-2">{data.itineraries[0].duration}</td>
            <td className=" font-normal text-gray-500 text-center text-sm py-2">
                {data.price} <br />
                <button className=' text-white bg-primary py-1 px-2 rounded'>Select</button>
            </td>
        </tr>
    )
}
