function Badge(props) {
    return (
        <div className="badge border">
            <div className="badge--header">
                <h2 className="badge--header">{props.firstName + " " + props.lastName}</h2>

                <div className="badge--body border">
                    <span id="email">Email: {props.email}</span>
                    <span id="placeOfBirth">Place of birth: {props.placeOfBirth}</span>
                    <span id="phoneNum">Phone number: {props.phoneNum}</span>
                    <span id="faveMeal">Favorite meal: {props.favoriteMeal}</span>
                    <span className="border" id="intro">{props.introduction}</span>
                </div>
            </div>
        </div>
    );
}

export default Badge;