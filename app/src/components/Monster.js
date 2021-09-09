import React, { useEffect } from "react";
import { connect } from "react-redux";
import {getMonster, fetchFail} from '../store/actions'

const Monster = (props) => {
    const {monster, isFetching, error} = props;
    
    useEffect(() => {
        props.getMonster();
    }, []);

    if (error) {
        return <h2>We got and error: {error}</h2>
    }

    if (isFetching) {
        return <h2>Researching your monster!</h2>
    }

    const handleClick = () => {
        props.getMonster()
    }

    return(
        <div className="monster">
            <div>
                <h2>{monster.name}</h2>
                <h3>{monster.type} monster</h3>
                <h3>{monster.species}</h3>
                <p>{monster.description}</p>
            </div>
            <button onClick={handleClick}>Research New Monster</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        monster: state.monster,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {getMonster, fetchFail})(Monster)