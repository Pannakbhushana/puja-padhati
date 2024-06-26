import React from "react";
import { Text } from '@chakra-ui/react';
import { KathaAccordions } from "../Components/KathaAccordions";

const KathaContainer = ({title,hide,katha,handleToggle}) => {
   
    return <>
        <Text
            fontSize='xl' 
            as={'b'} 
            textDecor={'underline'}
            onClick={handleToggle} 
            cursor={"pointer"}
            textUnderlineOffset={'10px'}
            >
            {title}
            </Text>
            <br/>
            <br/>
        { hide &&
            katha.map((el,i)=>{
               return  <KathaAccordions 
                        key={i}
                        title={el.title} 
                        description={el.description}
                        end={el.end}
                    />
              
            })
        }
        </>   
    
  
}

export default KathaContainer