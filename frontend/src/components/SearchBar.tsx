import {ChangeEvent} from "react";

type SearchBarProps = {
    onSearchTextChange(searchText: string): void
}


export default function SearchBar(props: SearchBarProps) {

    const onSearchTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        props.onSearchTextChange(event.target.value)
    }


    return (
        <div>
            <form>
                <input id="search" type="search" pattern=".*\S.*"
                       required
                       placeholder="search anything"
                       onChange={onSearchTextChange}/>
            </form>
        </div>
    )


}