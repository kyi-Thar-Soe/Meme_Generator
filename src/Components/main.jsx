import './main.css'
import {FcGallery} from 'react-icons/fc';
import { useEffect, useState } from 'react';
import axios from 'axios';

let memeData;
export default function Main() {
    const [memeImage,setMemeImage] = useState({
        randomImage: 'https://i.imgflip.com/1g8my4.jpg',
    });
    const [inputValue,setInputValue] = useState({
        topText : "",
        bottomText : ""
    });

    const loadData = async() => {
        await axios.get('https://api.imgflip.com/get_memes')
        .then(function (response) {
           memeData = response.data.data.memes;
        })
    };
    useEffect(() => {
        loadData()
    },[]);

    //Event listener
    const getMemes = () => {
       const memeArray = memeData;
       const randomNumber = Math.floor(Math.random() * memeArray.length );
       const url = (memeArray[randomNumber].url);
       setMemeImage(preImage => {
        return {...preImage,randomImage: url}
       });
    };

    const handleChange = (event) => {
        console.log(event.target)
        setInputValue(preText => {
            const {name,value} = event.target;
            return {...preText, [name]: value}
        })
    };

    return(
        <main>
            <div className='input'>
            <form className="form">
                <input type="text" placeholder='Top text' className="form-control toptext"  onChange={handleChange} name='topText'/>
                <input type="text" placeholder='Last text' className="form-control" onChange={handleChange} name='bottomText'/>
            </form>
            <button className='btn' onClick={getMemes}>Get a new meme image
            <FcGallery className='ms-2'/>
            </button>

            <div className='meme'>
            <img src={memeImage.randomImage} alt="meme--img" className='meme--image'/>
            <h2 className='meme--text top'>{inputValue.topText}</h2>
            <h2 className='meme--text bottom'>{inputValue.bottomText}</h2>
            </div>
            </div>

        </main>
    )
}