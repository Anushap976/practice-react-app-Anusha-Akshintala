
const ProfileCard = (props) => {
    return (
        <div className="profile-card">
            <h3>Name: {props.name}</h3>
            <p><strong>Age:</strong> {props.age}</p>
            <p><strong>Bio:</strong> {props.bio}</p>
        </div>
    );
};

export default ProfileCard;
