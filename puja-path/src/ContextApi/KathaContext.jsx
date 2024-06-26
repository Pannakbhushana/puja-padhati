import { createContext, useState } from "react";

export const KathaContext=createContext();

export const KathaContextProvider=({children})=>{
    const [isSatnarayan, setIsSatnarayan]=useState(false);
    const [isVat, setIsVat]=useState(false);
    const [isVrihaspati, setIsVrihaspati]=useState(false);
    const [isSom, setIsSom]=useState(false);
    const [isMangal, setIsMangal]=useState(false);
    const [isSantoshi, setIsSantoshi]=useState(false);
    const [isEkadashi, setIsEkadashi]=useState(false);
    const [isBhaiduj, setIsBhaiduj]=useState(false);
    const [isJitiya, setIsJitiya]=useState(false);

    const handleSatnarayan=()=>{
        setIsSatnarayan(!isSatnarayan);
    }

    const handleVat=()=>{
        setIsVat(!isVat);
    }

    const handleVrihaspati=()=>{
        setIsVrihaspati(!isVrihaspati);
    }
    const handleSom=()=>{
        setIsSom(!isSom);
    }
    const handleMangal=()=>{
        setIsMangal(!isMangal);
    }
    const handleSantoshi=()=>{
        setIsSantoshi(!isSantoshi);
    }
    const handleEkadashi=()=>{
        setIsEkadashi(!isEkadashi);
    }
    const handleBhaiduj=()=>{
        setIsBhaiduj(!isBhaiduj);
    }
    const handleJitiya=()=>{
        setIsJitiya(!isJitiya);
    }
    
    let obj={
        isSatnarayan,
        isVat,
        isVrihaspati,
        isSom,
        isMangal,
        isSantoshi,
        isEkadashi,
        isBhaiduj,
        isJitiya,
        handleSatnarayan,
        handleVat,
        handleVrihaspati,
        handleSom,
        handleMangal,
        handleSantoshi,
        handleEkadashi,
        handleBhaiduj,
        handleJitiya
    }

    return <KathaContext.Provider value={obj}>{children}</KathaContext.Provider>
}