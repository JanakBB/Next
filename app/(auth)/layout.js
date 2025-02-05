export default function ({children}){
    return(
        <>
            <header style={{backgroundColor: "black", color: "white"}}>I'm Auth Header</header>
            {children}
            <footer style={{backgroundColor: "black", color: "white"}}>I'm Auth Footer</footer>
        </>
    )
}