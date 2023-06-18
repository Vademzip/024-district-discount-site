import React from 'react';
import {Box, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

const Footer = () => {
    const {t, i18n} = useTranslation();

    return (
        <Box sx={{
            borderTop: '1px solid black',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            rowGap: '10px',
            "& a":{
                color: 'black',
                textDecoration : 'none'
            }
        }}>
            <Typography>{t('footer_text.made_by')} <a href={'https://github.com/Vademzip/'} target={"_blank"}>Vadem Zip</a></Typography>
            <Typography>{t('footer_text.other_project')}: <a href={'https://reddrafter.vercel.app'} target={"_blank"}>Red Death Drafter</a></Typography>
            <Typography>{t('footer_text.version')}: 3.0.0</Typography>
        </Box>
    );
};

export default Footer;