import getUsers from "../actions/getUsers";
import SideBar from "../components/sideBar/SideBar";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers();
  return (
    <SideBar>
      <div className="h-full">bbb{children}</div>
    </SideBar>
  );
}
