import './TextComponent.css'
function TextComponent(props){
    return(
        <>
            <p className={props.def?"demo my-3":"my-3"}
                
            >{props.title}</p>
        </>
    )
}
export default TextComponent