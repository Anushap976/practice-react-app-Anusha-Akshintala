import ProfileCard from './ProfileCard';

const ProfileContainer = () => {
    const profiles = [
        { name: 'Alex', age: 25, bio: 'A software engineer who loves hiking.' },
        { name: 'Taylor', age: 30, bio: 'A designer passionate about photography.' },
    ];

    return (
        <div className="profile-container">
            <h2>User Profiles</h2>
            <div className="profile-list">
                {profiles.map((profile, index) => (
                    <ProfileCard
                        key={index}
                        name={profile.name}
                        age={profile.age}
                        bio={profile.bio}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProfileContainer;