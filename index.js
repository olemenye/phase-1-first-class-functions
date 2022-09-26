const receivesAFunction = (callbbckFunc) => {
    return callbbckFunc();
}
const returnsANamedFunction = () => {
    function AFunc() {
        // Your Code Here!!
    }
    return AFunc;
}
const returnsAnAnonymousFunction = () => {
    return () => {};
}


