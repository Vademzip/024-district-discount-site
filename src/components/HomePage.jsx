import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {
    addBuiltDistrict,
    addLayDistrict,
    deleteBuiltDistrict,
    deleteLayDistrict,
    resetDistricts,
    selectAllDistricts
} from "../features/NewDistrict/newDistrictSlice.js";
import MyLayDistrict from "../features/MyDistrict/MyLayDistrict.jsx";
import {
    resetResearchedState,
    selectCountOfResearchedDistricts,
    selectResearchedDistricts
} from "../features/ResearchedDistricts/researchedDistricts-slice.js";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useDrop} from "react-dnd";
import TrashBinOpenWhite from "/public/TrashBinOpenWhite.png"
import TrashBinOpenBlack from "/public/TrashBinOpenBlack.png"
import TrashBinCloseWhite from "/public/TrashBinCloseWhite.png"
import TrashBinCloseBlack from "/public/TrashBinCloseBlack.png"
import {useTranslation} from "react-i18next";
import ResearchedDistrictPanel, {ResearchedDistricts} from "./ResearchedDistrictPanel.jsx";
import ToastNotification from "./ToastNotification.jsx";
import MyDistrictsBlock from "./MyDistrictsBlock.jsx";
import SetNewDistrictPanel from "./SetNewDistrictPanel.jsx";


const GridContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 20px;
    @media (max-width: 700px) {
        justify-content: center;
    }
`


const StyledButton = styled.button`
  font-weight: 600;
  font-size: 18px;
  color: white;
  display: block;
  margin: 10px auto;
  padding: 15px;
  border: none;
  border-radius: 25px;
  background: orange;
  cursor: pointer;
`
export const addBuiltDistrictsFunc = (district, govPlazaCount, dipQuarterCount, ResearchedDistrictsState, dispatch, t) => {
    const isResearched = `is${district}Researched`
    if (district === 'GovernmentPlaza') {
        if (govPlazaCount > 0) {
            toast.error(t('toast_notification.already_built_government_plaza'), {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return
        }
    }
    if (district === 'DiplomaticQuarter') {
        if (dipQuarterCount > 0) {
            toast.error(t('toast_notification.already_built_diplomatic_quartal'), {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return
        }
    }
    ResearchedDistrictsState[isResearched]
        ? dispatch(addBuiltDistrict(district))
        : toast.error(t('toast_notification.not_researched_district'), {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
}
export const addLayDistrictsFunc = (district, govPlazaCount, dipQuarterCount, ResearchedDistrictsState, dispatch, t) => {
    const isResearched = `is${district}Researched`

    if (district === 'GovernmentPlaza') {
        if (govPlazaCount > 0) {
            toast.error(t('toast_notification.already_built_government_plaza'), {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return
        }
    }
    if (district === 'DiplomaticQuarter') {
        if (dipQuarterCount > 0) {
            toast.error(t('toast_notification.already_built_diplomatic_quartal'), {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return
        }
    }
    ResearchedDistrictsState[isResearched]
        ? dispatch(addLayDistrict(district))
        : toast.error(t('toast_notification.not_researched_district'), {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
}


const HomePage = ({theme}) => {
    const dispatch = useDispatch()
    const ResearchedDistrictsState = useSelector(selectResearchedDistricts)
    const [discountDistrictArray, setDiscountDistrictArray] = useState({});
    const researchedDistrictsCount = useSelector(selectCountOfResearchedDistricts)
    const AllDistricts = useSelector(selectAllDistricts)
    const builtDistrictsCount = AllDistricts.builtDistrict.count
    const governmentPlazaCount = AllDistricts.builtDistrict.districts.GovernmentPlaza + AllDistricts.layDistrict.districts.GovernmentPlaza
    const diplomaticQuarterCount = AllDistricts.builtDistrict.districts.DiplomaticQuarter + AllDistricts.layDistrict.districts.DiplomaticQuarter
    const {t} = useTranslation();
    const moveLayDistrictToTrashBin = (district, dispatch) => {
        if (districtCount(true, district)) {
            dispatch(deleteLayDistrict(district))
        } else {
            toast.error(`${t('toast_notification.not_layed_district')}`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const moveBuiltDistrictToTrashBin = (district, dispatch) => {
        if (districtCount(false, district)) {
            dispatch(deleteBuiltDistrict(district))
        } else {
            toast.error(`${t('toast_notification.not_finished_district')}`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const districtCount = (isLayDistrict, districtName) => {
        if (isLayDistrict)
            return AllDistricts.layDistrict.districts[districtName]
        else
            return AllDistricts.builtDistrict.districts[districtName]
    }

    const [{isOverTrashBin}, trashBinRef] = useDrop({
        accept: ['builtDistrictMove', 'layDistrictMove'],
        drop: ({districtName, type}) => {
            if (type === 'builtDistrictMove')
                moveBuiltDistrictToTrashBin(districtName, dispatch)
            if (type === 'layDistrictMove')
                moveLayDistrictToTrashBin(districtName, dispatch)
        },
        collect: (monitor) => ({
            isOverTrashBin: monitor.isOver()
        })
    })

    useEffect(() => {
        const tempArray = {};
        for (const key in AllDistricts.builtDistrict.districts) {
            const nameOfDistrict = `is${key}Researched`
            if (builtDistrictsCount >= researchedDistrictsCount)
                if (ResearchedDistrictsState[nameOfDistrict])
                    if (builtDistrictsCount / researchedDistrictsCount > (AllDistricts.builtDistrict.districts[key] + AllDistricts.layDistrict.districts[key])) {
                        if (key === 'GovernmentPlaza') {
                            if (governmentPlazaCount < 1) {
                                tempArray[key] = 1
                            }
                        } else if (key === 'DiplomaticQuarter') {
                            if (diplomaticQuarterCount < 1) {
                                tempArray[key] = 1
                            }
                        } else {
                            tempArray[key] = Math.ceil(builtDistrictsCount / researchedDistrictsCount - (AllDistricts.builtDistrict.districts[key] + AllDistricts.layDistrict.districts[key]))
                        }
                    }
        }
        setDiscountDistrictArray(tempArray)
    }, [ResearchedDistrictsState, AllDistricts])

    return (
        <>
            <ToastNotification/>
            <GridContainer>
                <ResearchedDistrictPanel/>
                <MyDistrictsBlock AllDistricts={AllDistricts} ResearchedDistrictsState={ResearchedDistrictsState}
                                  diplomaticQuarterCount={diplomaticQuarterCount}
                                  governmentPlazaCount={governmentPlazaCount}/>
                <ResearchedDistricts>
                    <div>{t('table_names.Discount districts')}</div>
                    {Object.keys(discountDistrictArray).length
                      ? Object.entries(discountDistrictArray).map(([districtName, districtCount]) => <MyLayDistrict
                        key={`discountDistrict_${districtName}`} districtName={districtName}
                        districtCount={districtCount} discountPanel/>)
                      : (<h6><br/><br/>{t('empty_discount_text')}</h6>)
                    }
                </ResearchedDistricts>
                <SetNewDistrictPanel governmentPlazaCount={governmentPlazaCount}
                                     diplomaticQuarterCount={diplomaticQuarterCount}/>
            </GridContainer>
            <StyledButton onClick={() => {
                dispatch(resetResearchedState())
                dispatch(resetDistricts())
                toast(`${t('toast_notification.reset_all_done')}`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            }>{t('Reset all')}</StyledButton>
            <div data-theme={theme} className={'trashBinIcon'} ref={trashBinRef}>
                {isOverTrashBin ? <img className={'trashBinIconOpen'}
                                       src={theme === 'dark' ? TrashBinOpenWhite : TrashBinOpenBlack}
                                       alt={'trash bin icon'}/> :
                  <img className={'trashBinIconClose'} data-theme={theme}
                       src={theme === 'dark' ? TrashBinCloseWhite : TrashBinCloseBlack} alt={'delete trash bin icon'}/>}
            </div>
        </>

    );
};

export default HomePage;