const Users = ({ usersData }) => {
  return (
    <div>
      <h1>Users</h1>
      <div>
        {usersData.lenth ? usersData.map((user) => {
            console.log('user*** ', user)
            const {userName, country, random} = user
            console.log('random*** ', random)
          return <div key={userName}>
            <h2>{userName} lives in {country} {random}</h2>
            </div>
        }) : <h3>Users not yet updated here</h3> }
      </div>
    </div>
  );
};

export default Users;
