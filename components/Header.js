import React from 'react'
import Image from 'next/image'
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import Router from 'next/router';
function Header({ placeholder }) {
    const [searchInput, setSearchInput] = React.useState('')
    const [startDate, setStartDate] = React.useState(new Date())
    const [endDate, setEndDate] = React.useState(new Date())
    const [noOfGuests, setNoOfGuests] = React.useState(1)
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }
    const handleSelect = (ranges) => {
        // console.log(ranges)
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }
    const resetInput = () => {
        setSearchInput('')
    }
    const search = () => {
        // console.log('search')
        Router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests,
            }
        })
    }
    return (
        <>
            <header className="sticky top-0 z-50 grid grid-cols-3 bg-white drop-shadow-md p-5 md:px-10">
                {/* left */}

                < div className="relative flex items-center h-15 cursor-pointer my-auto" >
                    <Image
                        src="https://links.papareact.com/qd3"
                        // fill
                        // alt='airbnb logo'
                        width={100}
                        height={100}
                        className="object-contain object-left"
                        onClick={() => Router.push('/')}
                    />
                </div >
                {/* center */}
                < div className="flex items-center md:border-2 rounded-full py-2" >
                    <input type="text"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        placeholder={
                            placeholder || "Start your search"
                        } className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" />
                    <SearchIcon className="hidden h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:inline-flex md:mx-2" />
                </div >
                {/* right */}
                < div className="flex space-x-4 items-center justify-end text-gray-500" >
                    <p className="hidden md:inline cursor-pointer">Become a host</p>
                    <GlobeAltIcon className="h-6 cursor-pointer" />
                    <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                        <MenuIcon className="h-6" />
                        <UserCircleIcon className="h-6" />
                    </div >
                </div >
                {
                    searchInput && (
                        <div className="flex flex-col col-span-3 mx-auto">
                            <DateRangePicker
                                ranges={[selectionRange]}
                                minDate={new Date()}
                                rangeColors={["#FD5B61"]}
                                onChange={handleSelect}
                            />
                            <div className="flex items-center border-b mb-4">
                                <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
                                <UsersIcon className="h-5" />
                                <input type="number" value={noOfGuests} onChange={(e) => setNoOfGuests(e.target.value)} min={1} className="w-12 pl-2 text-lg outline-none text-red-400" />
                            </div>
                            <div className="flex">
                                <button className="flex-grow text-gray-500" onClick={resetInput}>Cancel</button>
                                <button className="flex-grow text-red-400" onClick={search}>Search</button>
                            </div>
                        </div>
                    )
                }
            </header >
        </>
    )
}

export default Header