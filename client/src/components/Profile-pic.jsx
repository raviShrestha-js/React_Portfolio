import profileImage from "../images/profile-3d-ravi.png";

const ProfilePicture = () => {
  return (
    <div className="profile-picture-container">
      <img
        src={profileImage}
        alt="Profile"
        className="profile-picture"
      />
    </div>
  );
};

export default ProfilePicture;
