import ProfileMain from "../../components/ProfileComponents/ProfileMain";
import Navbar from "../../components/navbar/Navbar";

const Profile = ({ params }) => {
  const userid = params.userid;
  return (
    <>
      <Navbar />
      <ProfileMain userId={userid}/>
    </>
  );
};

export default Profile;
