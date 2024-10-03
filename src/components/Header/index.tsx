import { FC, useState, useRef, useEffect } from "react";
import Logo from '../../assets/pokemon.png'
import SearchIcon from '../../assets/search.svg'

interface IHome {
    isHome: boolean;
}


const Header: FC<IHome> = ({ ...props }) => {


    const [ isSearchIcon, setIsSearchIcon ] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null);


    useEffect(() => {
        inputRef.current?.focus();
    }, [isSearchIcon])

    if(!props.isHome){
        return (
            <div className="h-12 flex justify-start items-center px-5 border-b border-desaturated-blue border-solid py-[6px] gap-8">
                <img className="h-[35px]" src={Logo} alt="" />
            </div>
        )
    }
    

    return(
        <div className="h-12 flex justify-between items-center px-5 border-b border-desaturated-blue border-solid py-[6px] gap-8 ">
            <img className="pokemon-logo h-[35px]" src={Logo} alt="pokemon-logo" />
            {
                isSearchIcon ? 
                    <input 
                        ref={inputRef}
                        className="w-full rounded-lg px-3 py-[6px] focus"
                        placeholder="Search..."
                        type="text"
                        
                    />
                    :
                    <img 
                        src={SearchIcon}
                        alt="search-icon"
                        className="w-5"
                        onClick={() => setIsSearchIcon(!isSearchIcon)}
                    />
            }
        </div>
    )
}

export default Header