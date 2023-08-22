import getUsers from "../actions/getUsers";
import SideBar from "../components/sideBar/SideBar";
import UserList from "./UserList";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers();
  return (
    <SideBar>
      <div className="h-full">
        <UserList users={users} />
        {children}
      </div>
    </SideBar>
  );
}
