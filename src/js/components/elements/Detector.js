import React from 'react';
import {useSelector} from "react-redux";

const Detector = () => {
    const {detector} = useSelector(state => state.gameplay)
    return (
        <div className={'detector'}>
            {detector > 0 && <div className={'detector__field detector__field--1'}/>}
            {detector > 1 && <div className={'detector__field detector__field--2'}/>}
            {detector > 2 && <div className={'detector__field detector__field--3'}/>}
            {detector > 3 && <div className={'detector__field detector__field--4'}/>}
            {detector > 4 && <div className={'detector__field detector__field--5'}/>}
            {detector > 5 && <div className={'detector__field detector__field--6'}/>}
            {detector > 6 && <div className={'detector__field detector__field--7'}/>}
            {detector > 7 && <div className={'detector__field detector__field--8'}/>}
        </div>
    );
}

export default Detector;