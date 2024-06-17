import { Box,Text, Flex, HStack, IconButton, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useDisclosure, Stack, Switch } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { NavLink,Link } from "react-router-dom";
import { useContext } from 'react';
import { ThemeContext } from '../ContextApi/ThemeContext';
import { ParticleContext } from '../ContextApi/ParticleContext';

const Links = [
  { title: "DASHBOARD", path: "/" },
  { title: "ARTI", path: "/arti" }
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { changeTheme } = useContext(ThemeContext)
  const { handleAmoungUs,handleSpider,handleColors,handleStarry,handleNone } = useContext(ParticleContext)

  return (
    <>
      <Box px={4}  >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            colorScheme={""}
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon/>}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            border={'1px solid rgba(255, 255, 255, 0.7)'}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box><Link to={'/'}><img src={'./om.png'} alt="Om" style={{width:"60px"}} /></Link></Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((elm, i) => (
                <NavLink key={i} to={elm.path} style={({isActive})=>{
                  return isActive ? {textDecoration:"underline", textUnderlineOffset:"7px"} :{}
                }}><Text fontSize='md' as={'b'} >{elm.title}</Text></NavLink>
              ))}
            </HStack>


          </HStack>
          <Flex alignItems={'center'}>

            <Stack align='center' direction='row' >
              <Switch size='lg' onChange={changeTheme} colorScheme={'gray'} />
            </Stack>
            <div style={{ width: "20px" }}></div>
            <Menu>
              <MenuButton style={{border:"2px solid teal", padding:"5px 20px 5px 20px", borderRadius:"5px", color:"teal"}} >
                Theme
              </MenuButton>

              <MenuList style={{color:"black"}}>
                <MenuItem onClick={handleAmoungUs}>Among Us</MenuItem>
                <MenuDivider />

                <MenuItem onClick={handleSpider}>Spider</MenuItem>
                <MenuDivider />

                <MenuItem onClick={handleColors}>Colors</MenuItem>
                <MenuDivider />

                <MenuItem onClick={handleStarry}>Starry</MenuItem>
                <MenuDivider />

                <MenuItem onClick={handleNone}>None</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} style={{backgroundColor: "rgba(255, 255, 255, 0.5)",borderRadius:"5px",marginTop:'2%'}}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((elm, i) => (
                <NavLink key={i} to={elm.path}><Text fontSize='md' as={'b'} onClick={onClose}>{elm.title}</Text></NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}