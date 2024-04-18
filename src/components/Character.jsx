import React from 'react'
import Error from '../img/error.jpeg'

const Character = props => {
	const { character, info } = props.character;
	function statusCharacter(status){
		switch (status) {
			case 'Alive':
				return <span className="d-inline-block rounded-circle" style={{width: 15, height: 15, backgroundColor: 'green'}}/>;
				break;
			case 'Dead':
				return <span className="d-inline-block rounded-circle" style={{width: 15, height: 15, backgroundColor: 'red'}}/>;
				break;
			case 'unknown':
				return <span className="d-inline-block rounded-circle" style={{width: 15, height: 15, backgroundColor: `#6E7279`}}/>;
				break;
		}
	}

	return (
    <>
			{character != undefined ? (
				<>
					<div className="row">
						{character.map((character, index) => (
						<div className=" col-md-4 py-4 d-flex align-content-stretch justify-content-center flex-wrap-2" key={index} id={index}>
							<div className="card text-bg-dark border border-secondary-subtle" style={{width: '18rem'}}>
							<img src={character.image} className='card-img-top' alt={character.name} />
							<div className="card-body">
								<h5 className="card-title">{character.name}</h5>
								<p className="status">
									{statusCharacter(character.status)} {character.status} - {character.species}
								</p>
								<p className="card-text">Gender: {character.gender}</p>
								<p className="card-text">Origin: {character.origin.name}</p>
								<p className="card-text">Location: {character.location.name}</p>
							</div>
							</div>
						</div>
						))}
					</div>
				</>

			) : (
				<div className='row '>
					<div className='d-flex align-items-center justify-content-center my-3'>
						<div className='d-flex flex-column'>
							<h1 className='text-center mb-3'>No hay datos</h1>
							<img className='img-fluid rounded-4' src={Error} alt="error 404" />
						</div>
					</div>
				</div>
			)}
    </>
	);
};


export default Character
