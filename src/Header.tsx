import { observer } from "mobx-react"


export const Header = observer( ({store})=> {
    return <h1>Hello { store.firstName }</h1>
});