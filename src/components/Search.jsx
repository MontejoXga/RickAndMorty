import React from 'react'

function Search(props) {

    const buscador = e => {
		props.searchData(e.target.value);
	};

    return (
    <div>
        <div className="input-group mb-3">
            <input type="text" className='form-control' placeholder='Buscar' aria-label='username' aria-describedby='basic-addon1' onChange={buscador}/>
        </div>
    </div>
  )
}

export default Search
