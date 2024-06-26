import { createContext, useState } from "react";

export const ParticleContext=createContext();

export const ParticleContextProvider=({children})=>{
    const [particle, setParticle]=useState("amoungUs");

    const handleAmoungUs=()=>{
        setParticle("amoungUs");
    }
    const handleNone =()=>{
        setParticle("none");
    }

    return <ParticleContext.Provider value={{particle, handleAmoungUs,handleNone}}>{children}</ParticleContext.Provider>
}