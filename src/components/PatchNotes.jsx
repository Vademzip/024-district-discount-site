import * as React from 'react';
import {styled} from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {useTranslation} from "react-i18next";

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

export default function PatchNotes({theme}) {
    const [expanded, setExpanded] = React.useState('panel1');
    const {t, i18n} = useTranslation();

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className={'container'}>
            <div className={'accordionContainer'}>
                <Accordion className={'accordion_item'} data-theme={theme} expanded={expanded === 'panel2'}
                           onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>{t('patchnotes.update_2.title')}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={'changeLogText'}>
                            <ul>
                                <li>{t('patchnotes.update_2.content.li_1')}</li>
                                <li>{t('patchnotes.update_2.content.li_2')}</li>
                                <li>{t('patchnotes.update_2.content.li_3')}</li>
                                <li>{t('patchnotes.update_2.content.li_4')}</li>
                                <li>{t('patchnotes.update_2.content.li_5')}</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={'accordion_item'} data-theme={theme} expanded={expanded === 'panel1'}
                           onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>{t('patchnotes.update_1.title')}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={'changeLogText'}>
                            <ul>
                                <li>{t('patchnotes.update_1.content.li_1')}</li>
                                <li>{t('patchnotes.update_1.content.li_2')}</li>
                                <li>{t('patchnotes.update_1.content.li_3')}</li>
                                <li>{t('patchnotes.update_1.content.li_4')}</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </div>
        </div>
    );
}