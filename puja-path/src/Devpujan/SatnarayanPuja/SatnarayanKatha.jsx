import React from "react";
import { Text, Box } from '@chakra-ui/react';
import SideBar from "../../Routers/SideBar";
import {staynarayanKath } from "../../utils/satnarayanKatha";

export const SatnarayanKatha = () => {

    return <div style={{ minHeight: "95vh" }}>
        <br />
        <SideBar />
        <Text fontSize='2xl' as={'b'} >|| श्री सत्यनारायण व्रत कथा ||</Text>
        <br />
        <br />
        { staynarayanKath.map((katha, i) => {
                return <div key={i}>
                    <Text fontSize='xl' as={'b'} >{katha.title}</Text>
                    <br />
                    <br />
                    <Box textAlign={'justify'} p={"0 5% 5% 5%"}>
                        <Text fontSize='xl' as={'b'} >
                            {katha.description}
                        </Text>
                    </Box>
                    <Text fontSize='xl' as={'b'} >{katha.end}</Text>
                    <br />
                    <br />
                </div>
            })}
    </div>
}