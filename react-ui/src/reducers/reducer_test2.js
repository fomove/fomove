
    let test2 = "component 2 test";

    export default function (state = test2,action){
        const {type, data} = action;
        switch(type){
            case "TEST2":
            return state = "Hey, im working  too , BYACH"
            default:
            return state;
        }
    }