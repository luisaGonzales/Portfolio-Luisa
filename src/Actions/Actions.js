import store from '../Store/Store';

export const states = () => {
    const a  = store.getState().language;
    if (a == "español") {
        console.log(store.getState().español);
    } else if (a == "english") {
        console.log(store.getState().english);
    } 
    let b = store.getState();

    console.log("a", a);
    console.log("b", b);

}

