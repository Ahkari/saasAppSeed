import {
    HOME_INCREASE ,
    HOME_DECREASE
} from '../constants'



export function home_increase(n) {
    return {
        type : HOME_INCREASE ,
        count : n
    }

}

export function home_decrease(n) {
    return {
        type : HOME_DECREASE ,
        count : n
    }
}