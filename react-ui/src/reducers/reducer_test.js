
    let test = "component 1 test";

    export default function (state = test,action){
        const {type, data} = action;
        switch(type){
            case "TEST":
            return state = "component 1 is working , BYACH"
            default:
            return state;
        }
    }