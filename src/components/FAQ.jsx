import React from 'react';
import {useTranslation} from "react-i18next";
import step_1_ru_dark from "/public/step1_ru.mp4"
import step_1_en_dark from "/public/step1_en_dark.mp4"
import step_2_1_ru_dark from "/public/step2_1_ru_dark.mp4"
import step_2_2_ru_dark from "/public/step2_2_ru_dark.mp4"
import step_2_1_en_dark from "/public/step2_1_en_dark.mp4"
import step_2_2_en_dark from "/public/step2_2_en_dark.mp4"
import step_3_ru_dark from "/public/step3_ru_dark.mp4"
import step_3_en_dark from "/public/step3_en_dark.mp4"
import move_district1_ru_dark from "/public/moveDistrict1_ru.mp4"
import move_district2_ru_dark from "/public/moveDistrict2_ru.mp4"
import move_district1_en_dark from "/public/moveDistrict1_en.mp4"
import move_district2_en_dark from "/public/moveDistrict2_en.mp4"
import delete_district1_ru_dark from "/public/deleteDistrict1_ru.mp4"
import delete_district2_ru_dark from "/public/deleteDistrict2_ru.mp4"
import delete_district1_en_dark from "/public/deleteDistrict1_en.mp4"
import delete_district2_en_dark from "/public/deleteDistrict2_en.mp4"
import {Box} from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp.js";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({theme}) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem'}}/>}
        {...props}
    />
))(({theme}) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
const Faq = ({theme}) => {
    const [expanded, setExpanded] = React.useState('panel1');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const {t, i18n} = useTranslation();
    const currentLanguage = i18n.language
    return (
        <div>
            <div className={'container'}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > div': {
                        textAlign: 'left',
                        width: '100%'
                    },
                    '& video': {
                        width: '300px'
                    },
                    '@media (max-width: 600px)' :{
                    padding : "10px"
                }
                }}>
                    <Box sx={{fontSize: '18px', fontWeight: "600", marginTop: "25px"}}>{t('guide.step1')}</Box>
                    <video autoPlay muted loop preload={'auto'} src={currentLanguage === 'ru' ? step_1_ru_dark : step_1_en_dark}/>
                    <Box sx={{fontSize: '18px', fontWeight: "600", marginTop: "25px"}}>{t('guide.step2')}</Box>

                    <Accordion className={'accordion_item'} data-theme={theme} expanded={expanded === 'panel1'}
                               onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography>{t('guide.actions_button')}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{
                            '& video': {
                                height: '300px',
                                width: '100%'
                            }
                        }}>
                            <video autoPlay muted loop src={currentLanguage === 'ru' ? step_2_1_ru_dark : step_2_1_en_dark}/>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={'accordion_item'} data-theme={theme} expanded={expanded === 'panel2'}
                               onChange={handleChange('panel2')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography>{t('guide.dnd')}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{
                            '& video': {
                                height: '300px',
                                width: '100%'
                            }
                        }}>
                            <video autoPlay muted loop src={currentLanguage === 'ru' ? step_2_2_ru_dark : step_2_2_en_dark}/>
                        </AccordionDetails>
                    </Accordion>
                    <Box sx={{fontSize: '18px', fontWeight: "600", marginTop: "25px"}}>{t('guide.step3')}</Box>
                    <video autoPlay muted loop preload={'auto'} src={currentLanguage === 'ru' ? step_3_ru_dark : step_3_en_dark}/>
                    <Box sx={{fontSize: '18px', fontWeight: "600", marginTop: "25px"}}>{t('guide.moveDistrict')}</Box>
                    <Accordion className={'accordion_item'} data-theme={theme} expanded={expanded === 'panel3'}
                               onChange={handleChange('panel3')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography>{t('guide.actions_button')}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{
                            '& video': {
                                height: '300px',
                                width: '100%'
                            }
                        }}>
                            <video autoPlay muted loop
                                   src={currentLanguage === 'ru' ? move_district1_ru_dark : move_district1_en_dark}/>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={'accordion_item'} data-theme={theme} expanded={expanded === 'panel4'}
                               onChange={handleChange('panel4')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography>{t('guide.dnd')}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{
                            '& video': {
                                height: '300px',
                                width: '100%'
                            }
                        }}>
                            <video autoPlay muted loop
                                   src={currentLanguage === 'ru' ? move_district2_ru_dark : move_district2_en_dark}/>
                        </AccordionDetails>
                    </Accordion>
                    <Box sx={{fontSize: '18px', fontWeight: "600", marginTop: "25px"}}>{t('guide.deleteDistrict')}</Box>
                    <Accordion className={'accordion_item'} data-theme={theme} expanded={expanded === 'panel6'}
                               onChange={handleChange('panel6')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography>{t('guide.actions_button')}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{
                            '& video': {
                                height: '300px',
                                width: '100%'
                            }
                        }}>
                            <video autoPlay muted loop
                                   src={currentLanguage === 'ru' ? delete_district1_ru_dark : delete_district1_en_dark}/>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={'accordion_item'} data-theme={theme} expanded={expanded === 'panel7'}
                               onChange={handleChange('panel7')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography>{t('guide.dnd')}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{
                            '& video': {
                                height: '300px',
                                width: '100%'
                            }
                        }}>
                            <video autoPlay muted loop
                                   src={currentLanguage === 'ru' ? delete_district2_ru_dark : delete_district2_en_dark}/>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </div>
        </div>
    )
        ;
};

export default Faq;