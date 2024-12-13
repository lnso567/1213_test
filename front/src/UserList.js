import React from 'react';
import './UserList.css'; // 導入 CSS 檔案

const usersData = [
    {
      "id": 1,
      "name": "Webster Powlowski",
      "company": "Wilkinson, Becker and Hartmann",
      "username": "Skylar_Altenwerth89",
      "email": "Pinkie.Brekke@yahoo.com",
      "address": "76530 Riverside Avenue",
      "zip": "77645",
      "state": "Vermont",
      "country": "Antarctica",
      "phone": "692-699-9642 x4538",
      "photo": "https://json-server.dev/ai-profiles/50.png"
    },
    {
      "id": 2,
      "name": "Felipa Faker Attribute Error: person.astName is not supported",
      "company": "Fahey - Dicki",
      "username": "Elody52",
      "email": "Dorcas.Abernathy51@yahoo.com",
      "address": "466 South Street",
      "zip": "80374",
      "state": "Massachusetts",
      "country": "Bahamas",
      "phone": "(828) 424-5195 x87203",
      "photo": "https://json-server.dev/ai-profiles/32.png"
    },
    {
      "id": 3,
      "name": "Giovanni Ruecker",
      "company": "Kohler, Jenkins and Skiles",
      "username": "Reuben43",
      "email": "Alexis_Borer@hotmail.com",
      "address": "66839 Richie Meadows",
      "zip": "52494",
      "state": "Maryland",
      "country": "Haiti",
      "phone": "371.708.0183",
      "photo": "https://json-server.dev/ai-profiles/9.png"
    },
    {
      "id": 4,
      "name": "Bethel Wisoky-Ratke",
      "company": "Haag, Schmitt and Frami",
      "username": "Sadie_Kerluke",
      "email": "Macie.Greenfelder83@gmail.com",
      "address": "53236 Mulberry Street",
      "zip": "12723-8905",
      "state": "Arizona",
      "country": "Niue",
      "phone": "206.888.6223 x777",
      "photo": "https://json-server.dev/ai-profiles/92.png"
    },
    {
      "id": 5,
      "name": "Mina Reinger",
      "company": "Abernathy, Harvey and Schroeder",
      "username": "Alanis76",
      "email": "Bernice.Gislason21@yahoo.com",
      "address": "5502 Denesik Mall",
      "zip": "14921-6085",
      "state": "Maryland",
      "country": "Suriname",
      "phone": "306.555.3657 x82341",
      "photo": "https://json-server.dev/ai-profiles/86.png"
    },
    {
      "id": 6,
      "name": "Janice McGlynn",
      "company": "Leffler - Rolfson",
      "username": "Jeromy_Boyer24",
      "email": "Carolyne73@yahoo.com",
      "address": "489 Koss Drives",
      "zip": "54492",
      "state": "Arkansas",
      "country": "Cocos (Keeling) Islands",
      "phone": "937-332-6807 x152",
      "photo": "https://json-server.dev/ai-profiles/4.png"
    },
    {
      "id": 7,
      "name": "Miguel Hermiston",
      "company": "Orn - Volkman",
      "username": "Ludwig65",
      "email": "Jason_Hamill@hotmail.com",
      "address": "692 Ila Pike",
      "zip": "06781",
      "state": "Maryland",
      "country": "Heard Island and McDonald Islands",
      "phone": "499-647-2304 x167",
      "photo": "https://json-server.dev/ai-profiles/99.png"
    },
    {
      "id": 8,
      "name": "Davion Murray",
      "company": "Mosciski Group",
      "username": "Emery.Kunde52",
      "email": "Guillermo.Buckridge-Ullrich52@hotmail.com",
      "address": "5387 Tromp Crescent",
      "zip": "49561",
      "state": "Massachusetts",
      "country": "Norway",
      "phone": "1-677-933-4371 x88526",
      "photo": "https://json-server.dev/ai-profiles/64.png"
    },
    {
      "id": 9,
      "name": "Davin Bernier",
      "company": "Farrell, Harvey and Dibbert",
      "username": "Minnie5",
      "email": "Guido.Greenholt@hotmail.com",
      "address": "7827 Old State Road",
      "zip": "16994",
      "state": "California",
      "country": "Bahamas",
      "phone": "(858) 957-1904",
      "photo": "https://json-server.dev/ai-profiles/98.png"
    },
    {
      "id": 10,
      "name": "Cora Ziemann",
      "company": "Mitchell, Walsh and Weimann",
      "username": "Darian.Huels95",
      "email": "Adrien.Greenholt6@yahoo.com",
      "address": "2573 Erika Unions",
      "zip": "16123-7907",
      "state": "Oregon",
      "country": "New Zealand",
      "phone": "1-240-535-4678",
      "photo": "https://json-server.dev/ai-profiles/97.png"
    }
  ];


const UserList = () => {

    return (
      <div>
      <h1>Users</h1>
      <div className="user-list">
        {usersData.map((user) => (
          <div key={user.id} className="user-card">
            <div>
              <img src={user.photo} alt={`${user.name}'s photo`} />
              <div>
                <h2>{user.name}</h2>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Company:</strong> {user.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;