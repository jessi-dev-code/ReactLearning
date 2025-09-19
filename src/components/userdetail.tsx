const userdetail = [
    {
        name :"Jessi",
        age:20
    },
    {
        name :"Kunwar",
        age:23
    },
]

export default function Userdetail(){
    <>
    <h1>User Details</h1>
    <ul>
        {
        userdetail.map((profile,index) => {
            return <li>{profile.name}</li>
        })
        }   
    </ul>  
    </>
}
