export default async function file({params}){
    console.log("filePath: ", await params)
    const {file} = await params
    return(
        <h1>path: {file?.join("/")}</h1>
    )
}