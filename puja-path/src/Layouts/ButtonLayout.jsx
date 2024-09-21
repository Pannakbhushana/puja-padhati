import React, { useContext } from "react";
import { Button } from '@chakra-ui/react';
import { ThemeContext } from "../ContextApi/ThemeContext";

const ButtonLayout = ({
    title,
    handleClick,
    buttonIcon,
}) => {
    const {isDark}=useContext(ThemeContext);
    return <Button 
              onClick={handleClick}
              rightIcon={buttonIcon ? buttonIcon : ''}
              w={'80%'}
              mt={'10px'}
              colorScheme={isDark ? 'yellow':'gray'}
            >
                {title}
            </Button>
}

export default ButtonLayout

