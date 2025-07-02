import React from "react";
import { Box, Text } from '@chakra-ui/react';
import Styles from "../Styles/CustomStyles.module.css";


const AboutMe = () => {

    return <Box className={Styles.aboutContainer} pt={'60px'} >

        <Box className={Styles.aboutChildOne}>
            <img src={"/karmkand.png"} alt="" style={{ width: "100%", height: "100%" }} />
        </Box>
        <Box className={Styles.aboutChildTwo} textAlign={'justify'}>
            <Text fontSize='md' as={'b'}>
                Rahul Mishra, the visionary behind the Pujapadhati app, was born into a devout Hindu Brahmana family, 
                where his spiritual journey began early. His deep curiosity about life’s deeper questions led him to 
                explore various forms of meditation, sadhana (spiritual practices), and eventually become a Reiki Grand Master. 
                Through his spiritual quest, Rahul traveled extensively across India, visiting ashrams, temples, and gurus, 
                gaining invaluable insights into the rich traditions of Hinduism.
                Recognizing the challenges priests face with the wide variety of rituals, scriptures, and mantras, Rahul 
                decided to simplify the process. He created Pujapadhati, an app designed to bring together mantras, shlokas, 
                and artis, making these ancient practices more accessible to today’s digital-savvy generation. Rahul’s mission 
                is to preserve and promote Vedic traditions while making them adaptable to modern times, ensuring that the 
                essence of Hindu rituals remains relevant in the digital age.
                </Text>
        </Box>


    </Box>
}

export default AboutMe