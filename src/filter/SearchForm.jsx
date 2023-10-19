import React from 'react'
import { useSearch } from './Search'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SearchForm = () => {
    const [values, setValues] = useSearch()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const {data} = await axios.get(`http://localhost:3005/route/searchfilter/${values.title}`)
            setValues({...values, results: data})
            navigate('/searchfilter')
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <div>

            <form className="d-flex" role="search" onSubmit={handleSubmit} >
                <input
                    className="form-control me2"
                    type="search"
                    placeholder="Search"
                    value={values.title}
                    onChange={(e) => setValues({...values, title: e.target.value})}
                    // placeHolder="Search"
                    aria-label="Search" />
                <button className="btn btn-outline-success" type="submit" >
                    Search
                </button>
            </form>

        </div>
    )
}

export default SearchForm