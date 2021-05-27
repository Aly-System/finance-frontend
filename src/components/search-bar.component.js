import React from 'react'
import { MdSearch as SearchIcon } from 'react-icons/md'

function SearchBar({ placeholder = 'Buscar', width = '500px', ...rest }) {
    return (
        <div className='search-bar' style={{ width }}>
            <input
                {...rest}
                type='text'
                className='search-bar__input '
                placeholder={placeholder}
            />
            <SearchIcon className='search-bar__icon' size={22} />
        </div>
    )
}

export default React.memo(SearchBar)
