import TechStack from "./TechStack";

function Profile(props) {
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'center', backgroundColor: 'crimson', borderRadius: '150px'}}>
                <img src="https://cutewallpaper.org/cdn-cgi/mirage/879d3f56044898301ccabab4a8a90586cd5663eca603a14193df05b49a03034b/1280/21/anime-boy-profile-pictures/Anime-Boys-Drawception-Profile.jpg" alt="profile_image" height={200} width={200} style={{borderRadius: '100px'}}></img><br/>
            </div>
            <div style={{marginTop: '-20px'}}>
                <p style={{textAlign: 'center', fontSize: '20px', color: 'black', backgroundColor: 'lightgray', borderRadius: '150px'}}>

                My name is {props.name} and I am a {props.job} and I formerly work as {props.past_job} at Konohagakure.<br/><br/>

                At the moment I am currently studying these following Tech Stacks at KodeGo Bootcamp.<br/>
            <TechStack></TechStack>
</p>
            </div>

        </>
    )
}

export default Profile;