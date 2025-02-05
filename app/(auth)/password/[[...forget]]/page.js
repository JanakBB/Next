export default async function({params}) {
    const {forget} = await params
    return(
        <>
            <h3>
                This is password route with forget route: <u>{forget}</u>
            </h3>
        </>
    )
}