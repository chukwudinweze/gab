import PusherServer from "pusher";
import PusherClient from "pusher-js";

export const pusherServer = new PusherServer({
  key: "0e9f7a441100a8636563",
  appId: "1660391",
  secret: "f53c5bab22331cd34dd8",
  cluster: "mt1",
  useTLS: true,
});

export const pusherClient = new PusherClient("0e9f7a441100a8636563", {
  cluster: "mt1",
  channelAuthorization: {
    endpoint: "/api/pusher/auth",
    transport: "ajax",
  },
  forceTLS: true,
});
