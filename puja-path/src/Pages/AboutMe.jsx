import React from "react";
import { Box, Text } from '@chakra-ui/react';
import Styles from "../Styles/CustomStyles.module.css";


const AboutMe = () => {
    return <Box className={Styles.aboutContainer} >

        <Box className={Styles.aboutChildOne}>
            <img src={"/karmkand.png"} alt="" style={{ width: "100%", height: "100%" }} />
        </Box>

        <Box className={Styles.aboutChildTwo} textAlign={'justify'}>
            <Text fontSize='md' as={'b'}  >
                Rahul Mishra, the visionary behind "KARMKAND" was born and raised in a devout Hindu Brahmana family. From an early age, 
                he demonstrated a profound curiosity about the world, constantly seeking answers to life's deeper questions. 
                This inherent inquisitiveness naturally led him to a spiritual path, nurtured by the rich spiritual environment of 
                his upbringing.
                Rahul's quest for knowledge and spiritual understanding guided him to explore various forms of meditation and sadhana 
                (spiritual practices). His journey also led him to become a Reiki Grand Master, where he gained a deeper understanding 
                of the universal energy flowing through all. Despite these insights, his pursuit of Self-realization and Spritual knowledge continued, 
                driving him to travel extensively across India. He visited numerous Ashrams, Temples, and Spiritual gurus, 
                gaining invaluable experiences along the way.
                As a Brahmana and dedicated spiritual practitioner, Rahul gravitated towards Hindu scriptures and rituals. 
                He found great fulfillment in performing rituals. However, he recognized the challenges faced 
                by Hindu priests due to the extensive variety of rituals and deities, each requiring specific scriptures and mantras. 
                To address this, Rahul decided to create "KARMKAND," an app designed to consolidate a significant number of Mantras, 
                Shlokas, and Artis.
                "KARMKAND" is a small yet meaningful effort to make Hindu rituals more adaptable to modern times. In an era dominated 
                by digital technology, Rahul aims to make Vedic culture accessible to the modern generation, bringing ancient 
                scriptures from old books to the palms of today's youth.
                In his professional life, Rahul holds degrees in Mechanical Engineering and Software Engineering. He has worked as a
                 professional Software Engineer in the IT industry, leveraging his technical expertise to develop the "KARMKAND" app.
                Rahul Mishra's journey is a testament to his dedication to spirituality, his relentless pursuit of knowledge, and 
                his commitment to integrating traditional Hindu practices with modern technology. Through "KARMKAND," he
                strives to ensure that the timeless wisdom of Vedic Sanskriti remains relevant and accessible in the digital age.
            </Text>
        </Box>


    </Box>
}

export default AboutMe