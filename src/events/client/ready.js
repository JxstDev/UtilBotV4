const { ActivityType } = require('discord.js');

let status = [
      {
       type: ActivityType.Custom,
      name: "customstatus1",
      state: "F*ckin Giggity - Sarah"
    },
      {
         type: ActivityType.Custom,
        name: "Customers242",
        state: "Breaking Everything... "
      },
        {
           type: ActivityType.Custom,
          name: "Status Ver213",
          state: "Eating Food!!"
        },
          {
             type: ActivityType.Custom,
            name: "Code 4",
            state: "Much love to MBLR!"
          },
            {
              name: "Support Chody!",
              type: ActivityType.Streaming,
              url: "https://www.twitch.tv/theechody"
            },
              {
                 type: ActivityType.Custom,
                name: "Suggestions",
                state: "SEND ALL SUGGESTIONS TO JXSTDEV!"
              },
              {
                   type: ActivityType.Custom,
                  name: "Suggestions2",
                  state: "SEND ALL SUGGESTIONS TO JXSTDEV!"
                },
                {
                     type: ActivityType.Custom,
                    name: "Suggestions3",
                    state: "SEND ALL SUGGESTIONS TO JXSTDEV!"
                  },
]
module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    console.log(`${client.user.tag} has successfully logged in and is ONLINE!`);

    // Set initial status
    await client.user.setPresence({ activities: [status[0]] });

    // Function to update status periodically
    const updateStatus = async () => {
      const randomIndex = Math.floor(Math.random() * status.length);
      await client.user.setPresence({ activities: [status[randomIndex]] });
      setTimeout(updateStatus, 10000); // Update every 10 seconds (adjust as needed)
    };

    updateStatus();
  }
};



// module.exports = {
//     name: 'ready',
//     once: true,
//     async execute(client) {
//         console.log(`${client.user.tag} has successfully logged in and is ONLINE!`)

//     }
// }