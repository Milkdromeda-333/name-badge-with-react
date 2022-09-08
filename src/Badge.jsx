function Badge(props) {
    return (
        <div className="badge">
            <div className="badge--header">
                <h2 className="badge--header">{props.firstName + " " + props.lastName}</h2>
                <div className="badge--body">
                    <span>{props.email}</span>
                    <span>{props.placeOfBirth}</span>
                    <span>{props.phoneNum}</span>
                    <span>{props.favoriteMeal}</span>
                    <span>{props.introduction}</span>
                </div>
            </div>
        </div>
    );
}

export default Badge;