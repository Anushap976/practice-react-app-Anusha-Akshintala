
const ProfileCard = ({ name, age, bio }) => {
    return (
        <div className="profile-card">
            <h3>Name: {name}</h3>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Bio:</strong> {bio}</p>
        </div>
    );
};

export default ProfileCard;
