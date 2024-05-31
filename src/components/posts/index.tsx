import { useState } from 'react'

interface IListElement {
    titolo: string,
}
function ListElement(props: IListElement) {
    return (
        <li>{props.titolo}</li>
    )
}

export default ListElement;