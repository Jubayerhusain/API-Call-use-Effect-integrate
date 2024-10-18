/* eslint-disable react/prop-types */
export default function Student({Student}) {
    console.log(Student)
    return(
        <div>
        }
        <div style={
            {
                border:'4px solid Green',
                borderRadius:'15px'
            }
        }>
            <h4>Id: {Student.id}</h4>
            <h4>Name: {Student.name}</h4>
            <h4>User Name: {Student.userName}</h4>
            <p>Email: {Student.email}</p>
            <p>Phone: {Student.phone}</p>
            <p>Website: {Student.website}</p>
            <p>Street: {Student.address.street}</p>
            <p>City: {Student.address.city}</p>
        </div>
        </div>
    )
    
}
// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },