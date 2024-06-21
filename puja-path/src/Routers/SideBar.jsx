import React from 'react';
import {Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,useDisclosure,Button,Box,Text} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons';
import { HomeAccordions } from '../Components/HomeAccordions';
import { AiOutlineHome } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

function SideBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate=useNavigate();

    return (
      <Box display={'flex'} justifyContent={'start'} w={'40px'} ml={'2%'} position={'fixed'} bg={'rgba(255, 255, 255, 0.1)'}> 
        <Button onClick={onOpen} color='rgba(255, 255, 255, 0.7)'  variant='outline' >Go</Button>

        <Drawer placement={'left'} onClose={onClose} isOpen={isOpen} >
          <DrawerOverlay />
          <DrawerContent backgroundColor={"rgba(255, 255, 255, 0.8)"}>
            <DrawerHeader borderBottomWidth='0px' display={'flex'} justifyContent={'space-between'}>
                <Text onClick={()=>navigate("/")} cursor={'pointer'} color={'black'} fontSize={'3xl'} ><AiOutlineHome /></Text>
                <Text onClick={onClose} cursor={'pointer'} color={'black'} ><CloseIcon/></Text>
            </DrawerHeader>
            
            <DrawerBody mt={'5%'}>
              <HomeAccordions isHight={false}/>
            </DrawerBody>

          </DrawerContent>
        </Drawer>
      </Box>
    )
  }
  export default SideBar;