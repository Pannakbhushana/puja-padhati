import React from "react";
import { Button } from '@chakra-ui/react';

const ButtonLayout = ({
    title,
    handleClick,
    buttonIcon,
}) => {
    return <Button 
                onClick={handleClick}
                rightIcon={buttonIcon ? <buttonIcon/> : ''}
                w={'80%'} colorScheme='gray'
                variant='outline'>
                {title}
            </Button>
}

export default ButtonLayout

