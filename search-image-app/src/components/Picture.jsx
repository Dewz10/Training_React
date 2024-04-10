export default function Picture(props) {
    return (
        <>
        <img src={props.urls.small} alt={props.description}/>
        </>
    );
}