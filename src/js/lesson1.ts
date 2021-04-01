

export type Child = {

}

export type Props = {
    name : string
    age : number
    city : string
    children : Array<Child>
    showName : (name : string ) => void
}
function showName ( name : string) {
    console.log("")
}

export function component (props : Props){
    props.showName(props.name);
}


export const testObject : Props = {
    name : "Alex",
    age : 33,
    city : 'Minsk',
    children : [],
    showName
}

component(testObject)
export {
    showName
}