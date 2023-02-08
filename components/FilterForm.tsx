import { useEffect, useState } from "react"

export default function FilterForm({ productDataVal, submitValues }) {
    const productData = productDataVal
    const [formData, setFormData] = useState({
        status: "",
        location: "",
        type: ""
    })
    const [status, setStatus] = useState([])
    const [location, setLocation] = useState([])
    const [type, setType] = useState([])

    const handleFieldChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue
        }));
    }

    const submitForm = (e) => {
        // We don't want the page to refresh
        e.preventDefault()
        submitValues(formData)
    }

    useEffect(() => {
        const tempStatusArr = []
        const tempLocationArr = []
        const tempTypeArr = []

        productData.map((product_data) => {
            tempStatusArr.push(product_data.status)
            tempLocationArr.push(product_data.location)
            tempTypeArr.push(product_data.type)
        })

        const uniqueStatus = tempStatusArr.reduce(function (a, b) { if (a.indexOf(b) < 0) a.push(b); return a; }, []);
        const uniqueLocation = tempLocationArr.reduce(function (a, b) { if (a.indexOf(b) < 0) a.push(b); return a; }, []);
        const uniqueType = tempTypeArr.reduce(function (a, b) { if (a.indexOf(b) < 0) a.push(b); return a; }, []);

        setStatus(uniqueStatus)
        setLocation(uniqueLocation)
        setType(uniqueType)
    }, [productData])

    return (
        <form className="w-full max-w-lg" onSubmit={submitForm}>
            <div className="flex -mx-80 mb-2 bg-white p-5 rounded">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <div className="relative">
                        <select name="location" onChange={handleFieldChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            {location.map((location_data) => (
                                <option key={location_data}>{location_data}</option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <div className="relative">
                        <select name="status" onChange={handleFieldChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            {status.map((status_data) => (
                                <option key={status_data}>{status_data}</option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <div className="relative">
                        <select name="type" onChange={handleFieldChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            {type.map((type_data) => (
                                <option key={type_data}>{type_data}</option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <button type="submit" className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-md text-sm px-32 py-3 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        Search
                    </button>
                </div>
            </div>
        </form>
    )
}