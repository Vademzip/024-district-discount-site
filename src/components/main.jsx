import React, {useEffect, useState} from 'react';
import HolySite from "/public/Holy_Site.webp"
import styled from "styled-components";
import ResearchedDistrictsItem from "../features/ResearchedDistricts/ResearchedDistricts.jsx";
import NewDistrict from "../features/NewDistrict/NewDistrict.jsx";
import {useDispatch, useSelector} from "react-redux";
import {
    addBuiltDistrict,
    addLayDistrict,
    resetDistricts,
    selectAllDistricts, selectBuiltDistrictCount, selectDiplomaticQuarterCount,
    selectGovernmentPlazaCount, selectLayDistrictCount
} from "../features/NewDistrict/newDistrictSlice.js";
import MyLayDistrict from "../features/MyDistrict/MyLayDistrict.jsx";
import {
    resetResearchedState,
    selectCountOfResearchedDistricts,
    selectResearchedDistricts
} from "../features/ResearchedDistricts/researchedDistricts-slice.js";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useDrop} from "react-dnd";
import MyBuiltDistrict from "../features/MyDistrict/MyBuiltDistrict.jsx";
import {deleteBuiltDistrict, deleteLayDistrict} from "../features/MyDistrict/MyDistrictSlice.js";
import TrashBinOpenWhite from "/public/TrashBinOpenWhite.png"
import TrashBinOpenBlack from "/public/TrashBinOpenBlack.png"
import TrashBinCloseWhite from "/public/TrashBinCloseWhite.png"
import TrashBinCloseBlack from "/public/TrashBinCloseBlack.png"


const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 20px;
  @media (max-width: 700px) {
    justify-content: center;
  }
`

export const DistrictsName = {
    HolySite: 'HolySite',
    Campus: 'Campus',
    Preserve: 'Preserve',
    GovernmentPlaza: 'GovernmentPlaza',
    EntertainmentComplex: 'EntertainmentComplex',
    TheaterSquare: 'TheaterSquare',
    Encampment: 'Encampment',
    CommercialHub: 'CommercialHub',
    Harbor: 'Harbor',
    DiplomaticQuarter: 'DiplomaticQuarter',
    IndustrialZone: 'IndustrialZone',
    WaterPark: 'WaterPark',
    Aerodrome: 'Aerodrome'
}

const DistrictImage = styled.img`
  max-width: 64px;

  &:hover {
    cursor: pointer;
  }

`

const ResearchedDistricts = styled.div`
  height: 300px;
  text-align: center;
  font-size: 24px;
  width: 324px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  @media (max-width: 900px) {
    width: auto;
    height: auto;
  }
`

const SetDistrict = styled.div`
  display: flex;
  text-align: center;
  font-size: 24px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  @media (max-width: 700px) {
    flex-direction: column;
    align-content: center;
    width: auto;
  }
`
const SetDistrictsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 900px) {
    justify-content: center
  }
`

const MyDistrictsList = styled.div`
  height: 300px;
  text-align: center;
  font-size: 24px;
  width: 324px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 900px) {
    width: auto;
    height: auto;
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
export const addBuiltDistrictsFunc = (district, govPlazaCount, dipQuarterCount, ResearchedDistrictsState, dispatch) => {
    const isResearched = `is${district}Researched`
    if (district === 'GovernmentPlaza') {
        if (govPlazaCount > 0) {
            toast.error('🦄 Вы уже заложили или построили правительственную площадь..', {
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
            toast.error('🦄 Вы уже заложили или построили дипломатический квартал..', {
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
        : toast.error('🦄 Вы ещё не открыли данный район..', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
}
export const addLayDistrictsFunc = (district, govPlazaCount, dipQuarterCount, ResearchedDistrictsState, dispatch) => {
    const isResearched = `is${district}Researched`

    if (district === 'GovernmentPlaza') {
        if (govPlazaCount > 0) {
            toast.error('🦄 Вы уже заложили или построили правительственную площадь..', {
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
            toast.error('🦄 Вы уже заложили или построили дипломатический квартал..', {
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
        : toast.error('🦄 Вы ещё не открыли данный район..', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
}


const Main = ({theme}) => {
    const dispatch = useDispatch()
    const ResearchedDistrictsState = useSelector(selectResearchedDistricts)
    const [discountDistrictArray, setDiscountDistrictArray] = useState([]);
    const researchedDistrictsCount = useSelector(selectCountOfResearchedDistricts)
    const AllDistricts = useSelector(selectAllDistricts)
    const builtDistrictsCount = AllDistricts.builtDistrict.count
    const layDistrictsCount = AllDistricts.layDistrict.count
    const governmentPlazaCount = AllDistricts.builtDistrict.districts.GovernmentPlaza + AllDistricts.layDistrict.districts.GovernmentPlaza
    const diplomaticQuarterCount = AllDistricts.builtDistrict.districts.DiplomaticQuarter + AllDistricts.layDistrict.districts.DiplomaticQuarter
    const [showTrashBin, setShowTrashBin] = useState(false)


    const moveLayDistrictToBuiltDistrict = (district, dispatch) => {
        if (districtCount(true, district)) {
            dispatch(addBuiltDistrict(district))
            dispatch(deleteLayDistrict(district))
        } else {
            toast.error('🦄 Вы ещё не заложили этот район...', {
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

    const moveLayDistrictToTrashBin = (district, dispatch) => {
        if (districtCount(true, district)) {
            dispatch(deleteLayDistrict(district))
        } else {
            toast.error('🦄 Вы ещё не заложили этот район...', {
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
            toast.error('🦄 Вы ещё не построили этот район...', {
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


    const moveBuiltDistrictToLayDistrict = (district, dispatch) => {
        if (districtCount(false, district)) {
            dispatch(addLayDistrict(district))
            dispatch(deleteBuiltDistrict(district))
        } else {
            toast.error('🦄 Вы ещё не построили этот район...', {
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

    const [{isOverLayDistrict}, layDistrictDropRef] = useDrop({
        accept: ['newDistrict', 'builtDistrictMove'],
        drop: ({districtName, type, districtCount}) => {
            if (type === 'newDistrict')
                addLayDistrictsFunc(districtName, governmentPlazaCount, diplomaticQuarterCount, ResearchedDistrictsState, dispatch)
            if (type === "builtDistrictMove")
                moveBuiltDistrictToLayDistrict(districtName, dispatch, districtCount)
        },
        collect: (monitor) => ({
            isOverLayDistrict: monitor.isOver()
        })
    })

    const [{isOverBuiltDistrict}, builtDistrictDropRef] = useDrop({
        accept: ['newDistrict', 'layDistrictMove'],
        drop: ({districtName, type}) => {
            if (type === 'newDistrict')
                addBuiltDistrictsFunc(districtName, governmentPlazaCount, diplomaticQuarterCount, ResearchedDistrictsState, dispatch)
            if (type === 'layDistrictMove')
                moveLayDistrictToBuiltDistrict(districtName, dispatch)
        },
        collect: (monitor) => ({
            isOverBuiltDistrict: monitor.isOver()
        })
    })

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


    for (const builtDistrictName in AllDistricts.builtDistrict.districts) {
        const builtDistrictCount = AllDistricts.builtDistrict.districts[builtDistrictName];
    }


    const builtDistricts = Object.entries(AllDistricts.builtDistrict.districts).map(([districtName, districtCount]) => (

        <div key={districtName}>
            <MyBuiltDistrict showTrashBin={setShowTrashBin} districtName={districtName} districtCount={districtCount}/>
        </div>
    ));
    const layDistricts = Object.entries(AllDistricts.layDistrict.districts).map(([districtName, districtCount]) => (
        <div key={districtName}>
            <MyLayDistrict showTrashBin={setShowTrashBin} districtName={districtName} districtCount={districtCount}/>
        </div>
    ));


    useEffect(() => {
        const tempArray = [];
        for (const key in AllDistricts.builtDistrict.districts) {
            const nameOfDistrict = `is${key}Researched`
            if (builtDistrictsCount >= researchedDistrictsCount)
                if (ResearchedDistrictsState[nameOfDistrict])
                    if (builtDistrictsCount / researchedDistrictsCount > (AllDistricts.builtDistrict.districts[key] + AllDistricts.layDistrict.districts[key])) {
                        if (key === 'GovernmentPlaza') {
                            if (governmentPlazaCount < 1) {
                                tempArray.push(key)
                            }
                        } else if (key === 'DiplomaticQuarter') {
                            if (diplomaticQuarterCount < 1) {
                                tempArray.push(key)
                            }
                        } else {
                            tempArray.push(key)
                        }
                    }
        }
        setDiscountDistrictArray(tempArray)
    }, [ResearchedDistrictsState, AllDistricts])

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <ToastContainer/>
            <GridContainer>
                <div>
                    <ResearchedDistricts>
                        <div>Изученные районы</div>
                        <ResearchedDistrictsItem districtName={DistrictsName.HolySite}/>
                        <ResearchedDistrictsItem districtName={DistrictsName.Campus}/>
                        <ResearchedDistrictsItem districtName={DistrictsName.Preserve}/>
                        <ResearchedDistrictsItem districtName={DistrictsName.Encampment}/>
                        <ResearchedDistrictsItem districtName={DistrictsName.CommercialHub}/>
                        <ResearchedDistrictsItem districtName={DistrictsName.EntertainmentComplex}/>
                        <ResearchedDistrictsItem districtName={DistrictsName.TheaterSquare}/>
                        <ResearchedDistrictsItem districtName={DistrictsName.Harbor}/>
                        <ResearchedDistrictsItem districtName={DistrictsName.GovernmentPlaza}/>
                        <ResearchedDistrictsItem districtName={DistrictsName.DiplomaticQuarter}/>
                        <ResearchedDistrictsItem districtName={DistrictsName.IndustrialZone}/>
                        <ResearchedDistrictsItem districtName={DistrictsName.WaterPark}/>
                        <ResearchedDistrictsItem districtName={DistrictsName.Aerodrome}/>
                    </ResearchedDistricts>
                </div>
                <div className={'myDistrict'}>
                    <MyDistrictsList ref={layDistrictDropRef}
                                     className={`${isOverLayDistrict ? 'activeCategory' : ''}`}>
                        <div>Заложенные районы</div>
                        {layDistricts}
                    </MyDistrictsList>
                    <MyDistrictsList ref={builtDistrictDropRef}
                                     className={`${isOverBuiltDistrict ? 'activeCategory' : ''}`}>
                        <div>Построенные районы</div>
                        {builtDistricts}
                    </MyDistrictsList>
                </div>
                <MyDistrictsList>
                    <div>Скидочные райончики</div>
                    {discountDistrictArray.map((item, index) => <div>
                            <MyLayDistrict key={index} districtName={item}/>
                        </div>
                    )}
                </MyDistrictsList>
                <div>
                    <SetDistrict>
                        <div style={{alignSelf: 'center', height: '100%'}}>Добавить новый район</div>
                        <SetDistrictsBlock>
                            <NewDistrict govPlazaCount={governmentPlazaCount} dipQuarterCount={diplomaticQuarterCount}
                                         districtName={DistrictsName.HolySite}/>
                            <NewDistrict govPlazaCount={governmentPlazaCount} dipQuarterCount={diplomaticQuarterCount}
                                         districtName={DistrictsName.Campus}/>
                            <NewDistrict govPlazaCount={governmentPlazaCount} dipQuarterCount={diplomaticQuarterCount}
                                         districtName={DistrictsName.Preserve}/>
                            <NewDistrict govPlazaCount={governmentPlazaCount} dipQuarterCount={diplomaticQuarterCount}
                                         districtName={DistrictsName.Encampment}/>
                            <NewDistrict govPlazaCount={governmentPlazaCount} dipQuarterCount={diplomaticQuarterCount}
                                         districtName={DistrictsName.CommercialHub}/>
                            <NewDistrict govPlazaCount={governmentPlazaCount} dipQuarterCount={diplomaticQuarterCount}
                                         districtName={DistrictsName.EntertainmentComplex}/>
                            <NewDistrict govPlazaCount={governmentPlazaCount} dipQuarterCount={diplomaticQuarterCount}
                                         districtName={DistrictsName.TheaterSquare}/>
                            <NewDistrict govPlazaCount={governmentPlazaCount} dipQuarterCount={diplomaticQuarterCount}
                                         districtName={DistrictsName.Harbor}/>
                            <NewDistrict govPlazaCount={governmentPlazaCount} dipQuarterCount={diplomaticQuarterCount}
                                         districtName={DistrictsName.GovernmentPlaza}/>
                            <NewDistrict govPlazaCount={governmentPlazaCount} dipQuarterCount={diplomaticQuarterCount}
                                         districtName={DistrictsName.DiplomaticQuarter}/>
                            <NewDistrict govPlazaCount={governmentPlazaCount} dipQuarterCount={diplomaticQuarterCount}
                                         districtName={DistrictsName.IndustrialZone}/>
                            <NewDistrict govPlazaCount={governmentPlazaCount} dipQuarterCount={diplomaticQuarterCount}
                                         districtName={DistrictsName.WaterPark}/>
                            <NewDistrict govPlazaCount={governmentPlazaCount} dipQuarterCount={diplomaticQuarterCount}
                                         districtName={DistrictsName.Aerodrome}/>
                        </SetDistrictsBlock>
                    </SetDistrict>
                </div>
            </GridContainer>
            <StyledButton onClick={() => {
                dispatch(resetResearchedState())
                dispatch(resetDistricts())
                toast('🦄 Данные успешно сброшены!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            }>Сбросить всё</StyledButton>
            {showTrashBin &&
                <div data-theme={theme} className={'trashBinIcon'} ref={trashBinRef}>
                    {isOverTrashBin ? <img className={'trashBinIconOpen'}
                                           src={theme === 'dark' ? TrashBinOpenWhite : TrashBinOpenBlack}/> :
                        <img className={'trashBinIconClose'} data-theme={theme}
                             src={theme === 'dark' ? TrashBinCloseWhite : TrashBinCloseBlack}/>}
                </div>
            }
        </>

    );
};

export default Main;