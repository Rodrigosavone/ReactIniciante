import Item from "./Item"

function List () {

    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca ="Audi" ano_lancamento={1964}/>
                <Item marca ="Chevrolet" ano_lancamento={1950}/>
                <Item/>
            </ul>
        </>
    )
}

export default List