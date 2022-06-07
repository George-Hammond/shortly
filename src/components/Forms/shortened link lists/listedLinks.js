import { useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './listedLinks.css';

const ListedLinks = () => {
const [shortenLink, setShorenLink]= useState("https://rel.ink/k4lKyk");
const [copied, setCopied] = useState(false)

  return (
    <div>
      <div className='listedLinks-container'>
        <div className='listedLink'>
            <p id='url-link'>https://www.frontendmentor.io</p>
            <div className='right'>
                <p id='link'>{shortenLink}</p>
                <CopyToClipboard text={shortenLink} onCopy={()=> setCopied(true)}>
                    <button id={copied ? 'copied' : 'copy'} >{copied ? 'Copied!' : 'Copy'}</button>
                </CopyToClipboard>                    
            </div>
        </div>               
      </div>
    </div>
  )
}

export default ListedLinks;
