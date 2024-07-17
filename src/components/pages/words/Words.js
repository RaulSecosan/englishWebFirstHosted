import './words.css';
import {  useState } from 'react';
import useFirestore from '../display/Display';
import { handleNew } from '../../util';
import SearchBar from '../../SearchBar'
import SideMenu from '../../sideMenu/SideMenu';

const Words = () => {

    const [input, setInput] = useState('');
    const [displayValueId, setDisplayValueId] = useState(null);

    const words = useFirestore('words')
  
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

    const filteredWords = words.filter(word => word.name.toLowerCase().includes(input.toLowerCase()));

    return (
 <>
    <div className="words-background"> 
    <SideMenu  color={'red'}/>
        <div className='words'>
                <h1 className='h1ClassWords'>Just Words</h1>
                <SearchBar input={input} placeholder={'Caută Cuvinte..'} onInputChange={handleInputChange} className={'input2'} />

            <div className="words-container"> 
                {filteredWords.map((word) => (
                    <div className="display2" key={word.id} onClick={() => toggleDisplayValue(word.id)}>
                        <div className="displayDown2">
                            {word.name}
                            {displayValueId === word.id && <div className='displayDownValue2'>{word.value}</div>}
                        </div>
                    </div>          
                ))}
            </div>
                <button className="button1" onClick={() => handleNew('words')}>Add</button>
        </div>
    </div>
</>
      );
}
 
export default Words;
