const Header = ({
    name,
    date
})=>{
    return(
        <>
        <h1>
            App Name is {name}
        </h1>
        <p>
            Date: {date}
        </p>
        </>
    )
}

export default Header