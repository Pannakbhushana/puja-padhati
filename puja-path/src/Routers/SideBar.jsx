import React from 'react';
import {Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,useDisclosure,Button,Box,Text} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons';
import { HomeAccordions } from '../Components/HomeAccordions';
import { AiOutlineHome } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import { ThemeContext } from '../ContextApi/ThemeContext';

const Links = [
  { title: "आरती", path: "/arti" },
  { title: "स्तुति", path: "/stuti" },
  {title:"कथाएँ",path:"/katha"}
];

function SideBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {isDark}=useContext(ThemeContext);
    const navigate=useNavigate();

    const handleHomeIconClick=()=>{
      navigate("/")
      onClose()
    }

    return (
      <Box display={'flex'} justifyContent={'start'} w={'40px'} ml={'2%'} > 
        <Button 
          onClick={onOpen}  
          variant='outline' 
          border={isDark ? "1px solid #333333" : '1px solid #fff'}
          ><HamburgerIcon 
            color={isDark ? "#333333" : '#fff'}
            />
          </Button>

        <Drawer placement={'left'} onClose={onClose} isOpen={isOpen} >
          <DrawerOverlay />
          <DrawerContent backgroundColor={"rgba(255, 255, 255, 0.8)"}>
            <DrawerHeader borderBottomWidth='0px' display={'flex'} justifyContent={'space-between'}>
                <Text onClick={handleHomeIconClick} cursor={'pointer'} color={'black'} fontSize={'3xl'} ><AiOutlineHome /></Text>
                <Text onClick={onClose} cursor={'pointer'} color={'black'} ><CloseIcon/></Text>
            </DrawerHeader>
            
            <DrawerBody mt={'5%'}>
              {Links.map((elm, i) =>{
                return <Box key={i} ml={'5%'} mt={'5%'} onClick={onClose}>
                  <NavLink  to={elm.path}><Text fontSize='md' as={'b'} >{elm.title}</Text></NavLink>
                </Box>
              })}
              <br />
              
              <Box onClick={onClose}>
                <HomeAccordions isHight={false} />
              </Box>
            </DrawerBody>

          </DrawerContent>
        </Drawer>
      </Box>
    )
  }
  export default SideBar;