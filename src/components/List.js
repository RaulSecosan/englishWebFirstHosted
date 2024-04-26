import './list.css';
import {  useState } from 'react';
import useFirestore from './Display';
import { handleNew, handleDelete } from './util';
import SearchBar from './SearchBar';
import SideMenu from './SideMenu';

const Lista = () => {

    const [input, setInput] = useState('');
    const [displayValueId, setDisplayValueId] = useState(null);

    const lista = useFirestore('lista')
  
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

    const filteredList = lista.filter(word => word.name.toLowerCase().includes(input.toLowerCase()));

    return (
 <>
    <div className="lista"> 
    <SideMenu  color={'red'}/>
        <div className='words'>
                <h1 className='h1ClassList'>Lista</h1>
                <SearchBar input={input} placeholder={'Caută Cuvinte..'} onInputChange={handleInputChange} className={'input3'} />

            <div className="list-container"> 
                {filteredList.map((list) => (
                    <div className="display2" key={list.id} onClick={() => toggleDisplayValue(list.id)}>
                        <div className="displayDown2">
                            <div className="lis">
                                {list.name}
                                <button className='button2' onClick={()=> handleDelete(list.id)}>Delete</button>
                            </div>
                            {displayValueId === list.id && <div className='displayDownValue3'>{list.value}</div>}
                        </div>
                    </div>          
                ))}
            </div>
                <button className="button1" onClick={() => handleNew('lista')}>Add</button>
        </div>
    </div>
</>
      );
}
 
export default Lista;
