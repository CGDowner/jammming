import React from 'react';
import styles from './Track.module.css'

function Track(props) {
    
    function renderAction() {
        if(props.isRemoval) {
            return <button className={styles["Track-action"]} onClick={passTrack}>+</button>
        } else {
            return <button className={styles["Track-action"]} onClick={passTrackToRemove}>-</button>
        }
    
    }
    
    function passTrack() {
        props.onAdd(props.track);
    }

    function passTrackToRemove() {
        props.onRemove(props.track);
    }

    return (
        <div className={styles.Track}>
            <div className={styles["Track-information"]}>
            {/* <h3> Track name will ho here </h3> */}
            <h3>{props.track.name}</h3>
            {/* <p> Track artist will go here </p> / <p> Track album will go here </p> */}
            <p>{props.track.artist} | {props.track.album}</p>
            </div>  
            {renderAction()}
        </div>
    )
}

export default Track;