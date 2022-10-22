import useAuth from "../hooks/useAuth"

const Profile = () => {
    const {user} = useAuth();

    return (
        <div>
            <h1>Messages</h1>
            {user?.messages?.map((message) => {
                return (
                    <>
                        <div>{message.content}</div>
                        <div>Sent By: {message.fromUser.username}</div>
                    </>
                ) 
                
            })}
        </div>
    )
}



export default Profile