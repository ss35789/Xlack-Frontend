import React from'react';
import styled from'styled-components';
import {enterRoom} from'../features/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

export interface SidebarInfo{
    Icon?: any;
    title: string;
    id?: number;
}
function SidebarOption({Icon,title,id}:SidebarInfo){
    const dispatch=useDispatch();

    const selectChannel=()=>{
        if(id){
            dispatch(enterRoom(id))
        }
    }

    return(
        <SidebarOptionContainer
            onClick={selectChannel}
        >
            {Icon && <Icon fontSize='small' style={{padding : 10}}></Icon>}
            {Icon ? (<h3>{title}</h3>) : 
                <SidebarOptionChannel>
                    <span>#</span>{title}
                </SidebarOptionChannel>
            }
        </SidebarOptionContainer>
    )
}
export default SidebarOption;

const SidebarOptionContainer=styled.div`
    display : flex;
    font-size: 12px;
    padding :10px;
    align-items: center;
    cursor: pointer;

    :hover{
        opacity: 0.9;
        background-color:#340e36;
    }
   
    >h3{
        font-weight:500;
    }

    >h3 >span{
        padding: 15px;
    }
`;
const SidebarOptionChannel=styled.h3`
    padding: 10px 0;
    font-weight: 300;
`;