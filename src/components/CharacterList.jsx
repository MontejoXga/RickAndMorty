import React from 'react'
import { useEffect, useState } from 'react'
import Character from './Character';
import Search from './Search';
import Error from '../img/error.jpeg'

function NavPage(props){
  return(
    <>
      
      <div className="d-flex justify-content-evenly align-items-center">
        <div>
          <button type="button" className="btn btn-secondary btn-lg" onClick={props.prevPage}>
            Prev
          </button>
        </div>
        <div className='align-self-center'>
          Pagina {props.pages}
        </div>
        <div>
          <button type="button" className="btn btn-secondary btn-lg" onClick={props.nextPage}>
            Next
          </button>
        </div>
      </div>      


      
    </>
  )
}



function CharacterList() {

  let urlCharacters = `https://rickandmortyapi.com/api/character/`;
  let dataURL ={
    info : [],
    character : [],
    error: '',
  }

  const [ characters, setCharacters ] = useState(dataURL);
	const [ ulr, setURL ] = useState(urlCharacters);
	const [ pages, setPages ] = useState(1);
  const [ loading, setLoading ] = useState(true)


  const searchData = data =>{
    urlCharacters = `https://rickandmortyapi.com/api/character/?name=${data}`;
    setURL(urlCharacters);
    setPages(1);

  }

  useEffect(
    ()=>{
      setLoading(false);
      const fetchAPI =()=>{
        fetch(ulr)
          .then(res => res.json())
          .then(data =>setCharacters({character:data.results, info: data.info, error:data.error}))
          .catch(error => console.log(error))  
      };
      fetchAPI()
    },[ulr]
  );

  const nextPage = () => {
    setURL(characters.info.next);
    setPages(pages+1);
    scroll();
  };

  const prevPage = () =>{
    if (characters.info.prev != null) {
      setURL(characters.info.prev);
      setPages(pages-1);
      scroll();
    }
  }

  const scroll = () => {
    const elemento = document.querySelector('.scroll');
    elemento.scrollIntoView('auto', 'start');
  };

  return (
    <div className='container scroll '>
      <div>
        <Search searchData = {searchData}/>
      </div>
      

      {loading ? (
        <h1>Loading...</h1> 
        ) : (
      
        <div>
          { characters.character != undefined ? (

              <>
                <div className='py-4'>
                  {characters.info.pages>1?(
                    <NavPage prevPage={prevPage} nextPage={nextPage} pages={pages}/>
                  ):null}
                </div>
                
                <Character  character = {characters}  pages={pages}/>
                
                <div className='py-4'>
                  {characters.info.pages>1?(
                    <NavPage prevPage={prevPage} nextPage={nextPage} pages={pages}/>
                  ):null}
                </div>

              </>
            
              
          ):(
              <div className=' d-flex align-items-center justify-content-center col-12 h-100'>
                <div className='d-flex flex-column py-3'>
                  <h1 className='text-center py-3'>No hay datos</h1>
                  <img className='img-fluid rounded-4' src={Error} alt="error 404" />
                </div>
              </div>
          )}
        </div>
      )}
      
    </div>
  )
}

export default CharacterList

