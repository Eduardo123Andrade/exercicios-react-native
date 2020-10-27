export default (props) => {
    if(props.teste){
        console.log('here', props.children)
        return props.children
    }
    else 
        return false
}