import React from "react";
import { Box,Text } from '@chakra-ui/react';
import KathaContainer from "../Components/KathaContainer";
import { bhaiDuj, ekadashi, jitiya, mangalVrat, santoshiMataVrat, satnarayanaKatha, somvarKatha, vatSavitriKatha, vrihaspatiKatha } from "../utils/kathas";
import { useContext } from "react";
import { KathaContext } from "../ContextApi/KathaContext";


const Katha = () => {
    const contex=useContext(KathaContext);

    return <Box pt={'80px'}>
      <Text fontSize='2xl' as={'b'} >|| कथाएँ  ||</Text>
        <Box style={{ padding: "2% 5% 5% 5%", minHeight: "95vh" }}>
           <KathaContainer title={'सत्यनारायण व्रत कथा'} katha={satnarayanaKatha} hide={contex.isSatnarayan} handleToggle={contex.handleSatnarayan}/>
           <KathaContainer title={'वट सावित्री व्रत कथा'} katha={vatSavitriKatha} hide={contex.isVat} handleToggle={contex.handleVat}/>
           <KathaContainer title={'सोमवार व्रत कथा'} katha={somvarKatha} hide={contex.isSom} handleToggle={contex.handleSom}/>
           <KathaContainer title={'मंगलवार व्रत कथा'} katha={mangalVrat} hide={contex.isMangal} handleToggle={contex.handleMangal}/>
           <KathaContainer title={'बृहस्पतिवार व्रत कथा'} katha={vrihaspatiKatha} hide={contex.isVrihaspati} handleToggle={contex.handleVrihaspati}/>
           <KathaContainer title={'शुक्रवार संतोषीमाता व्रतकथा'} katha={santoshiMataVrat} hide={contex.isSantoshi} handleToggle={contex.handleSantoshi}/>
           <KathaContainer title={'सम्पूर्ण एकादशी व्रतकथा'} katha={ekadashi} hide={contex.isEkadashi} handleToggle={contex.handleEkadashi}/>
           <KathaContainer title={'भैया दूज कथा'} katha={bhaiDuj} hide={contex.isBhaiduj} handleToggle={contex.handleBhaiduj}/>
           <KathaContainer title={'जितिया व्रत कथा'} katha={jitiya} hide={contex.isJitiya} handleToggle={contex.handleJitiya}/>
        </Box>
    </Box>
}

export default Katha