
function ProfilePicture(){

    const imageUrl='./src/assets/OIP.jpeg';

    const handelClick = (e)=> { e.target.style.display="none"};

    return(
        <img src={imageUrl} onClick={(e)=>{ handelClick(e) }} className="Image" />
    );

}

export default ProfilePicture;