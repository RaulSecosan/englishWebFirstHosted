import './animals.css';

import {  useState } from 'react';
import useFirestore from '../display/Display';
import { handleNew } from '../../util';
import SearchBar from '../../SearchBar'
import SideMenu from '../../sideMenu/SideMenu';

const Animals = () => {

    const [input, setInput] = useState('');
    const [displayValueId, setDisplayValueId] = useState(null);

    const animals = useFirestore('animals')
  
    const handleInputChange = (value) => {
         setInput(value);
        };

         const toggleDisplayValue = (id) => {
        if (displayValueId === id) {
            setDisplayValueId(null);
        } else {
            setDisplayValueId(id);
        }
    };

        const filteredAnimals = animals.filter(animal => animal.name.toLowerCase().includes(input.toLowerCase()));

    return (
 <>
    <div className="animals-background"> 
    <SideMenu  color={'red'}/>
        <div className='App'>
                <h1 className='h1Class'>Animals</h1>
                <SearchBar input={input} placeholder={'Caută animăluțe..'} onInputChange={handleInputChange} className={'input1'} />

            <div className="jobs-container"> 
                {filteredAnimals.map((animal) => (
                    <div className="display1" key={animal.id} onClick={() => toggleDisplayValue(animal.id)}>
                        <div className="displayDown1">
                            {animal.name}
                            {displayValueId === animal.id && <div className='displayDownValue1'>{animal.value}</div>}
                        </div>
                        <img  src={animal.img} alt="" className="displayUp" />                    
                    </div>
                ))}
            </div>
                <button className="button1" onClick={() => handleNew('animals')}>Add</button>
        </div>
    </div>
</>
      );
}
 
export default Animals;
