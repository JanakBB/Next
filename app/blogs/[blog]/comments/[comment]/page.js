export default async function Comment({params}){
    console.log(await params)
    const {blog} = await params;
    const {comment} = await params;
    return(
        <div>
            This is final comment upon <b>{blog}</b>, that is no <i>{comment}</i> comment
        </div>
    )
}