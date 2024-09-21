import React, { useState } from "react";
import { Box, Button, Text } from '@chakra-ui/react';
import Styles from "../Styles/CustomStyles.module.css";


const AboutMe = () => {
    const [isEnglish, seIsEnglish] = useState(false);

    return <Box className={Styles.aboutContainer} pt={'60px'} >

        <Box className={Styles.aboutChildOne}>
            <img src={"/karmkand.png"} alt="" style={{ width: "100%", height: "100%" }} />
        </Box>
        <Box className={Styles.aboutChildTwo} textAlign={'justify'}>
            <Button variant={'outline'} onClick={()=>seIsEnglish(!isEnglish)}>Switch to {isEnglish ? 'Hindi' : 'English'}</Button>
            <br />
            <br />
            {!isEnglish && <Text fontSize='md' as={'b'}  >
                राहुल मिश्रा, पूजापद्धति ऐप के निर्माता, एक धार्मिक हिन्दू ब्राह्मण परिवार में पैदा हुए, जहाँ से उनकी आध्यात्मिक यात्रा की शुरुआत हुई। बचपन से ही जीवन के
                गहरे सवालों के प्रति उनकी गहन जिज्ञासा ने उन्हें ध्यान, साधना और अंततः रेकी ग्रैंड मास्टर बनने के मार्ग पर अग्रसर किया। अपनी इस आध्यात्मिक खोज के दौरान,
                राहुल मिश्रा ने भारत के विभिन्न आश्रमों, मंदिरों और गुरुओं का दौरा किया, और हिन्दू धर्म की समृद्ध परंपराओं में गहरा अनुभव प्राप्त किया।
                उन्होंने देखा कि पुरोहितों को विभिन्न अनुष्ठानों, शास्त्रों और मंत्रों के विशाल भंडार को संभालने में कठिनाइयों का सामना करना पड़ता है। इस समस्या को हल करने के
                लिए राहुल मिश्रा ने पूजापद्धति ऐप बनाया, जो मंत्र, श्लोक, स्तोत्र और आरती को एकत्रित करता है और इन प्राचीन अनुष्ठानों को आज की डिजिटल पीढ़ी के लिए सुलभ बनाता है। 
                राहुल मिश्रा का उद्देश्य वैदिक परंपराओं को संरक्षित और प्रोत्साहित करना है, ताकि ये आधुनिक समय में भी प्रासंगिक बने रहें, और हिन्दू अनुष्ठानों का सार डिजिटल युग में 
                भी जीवंत रहे।
            </Text>}
           {isEnglish && <Text fontSize='md' as={'b'}>
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
                </Text>}
        </Box>


    </Box>
}

export default AboutMe