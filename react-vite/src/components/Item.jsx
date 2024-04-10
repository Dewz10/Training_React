export default function Item(props) {
    const {title,description} = props;
    return (
        <section>
            <div className="content">
                <h4>{title}</h4>
                <button>แสดง</button>
            </div>
            <p>{description}</p>
            <hr/>
        </section>
    );
}