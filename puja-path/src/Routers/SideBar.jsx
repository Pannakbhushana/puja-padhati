import React from 'react';
import {Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,useDisclosure,Button,Box,Text} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons';
import { HomeAccordions } from '../Components/HomeAccordions';

function SideBar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <Box display={'flex'} justifyContent={'start'} w={'60px'} ml={'2%'} position={'fixed'}>
        <Button onClick={onOpen} color={'white'}  variant='outline' >Go to</Button>

        <Drawer placement={'left'} onClose={onClose} isOpen={isOpen} >
          <DrawerOverlay />
          <DrawerContent backgroundColor={"rgba(255, 255, 255, 0.5)"}>
            <DrawerHeader borderBottomWidth='0px' display={'flex'} justifyContent={'space-between'}>
                <Box color={'black'}></Box>
                <Text onClick={onClose} cursor={'pointer'} color={'black'} ><CloseIcon/></Text>
            </DrawerHeader>
            
            <DrawerBody mt={'30%'}>
              <HomeAccordions/>
            </DrawerBody>

          </DrawerContent>
        </Drawer>
      </Box>
    )
  }
  export default SideBar;