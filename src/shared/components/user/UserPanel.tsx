import LogoutButton from "../ui/LogoutButton";
import UserSidebar from "./UserSidebar";

export default function UserPanel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside
        className="
          hidden md:flex md:flex-col
          md:w-72
          bg-white border-r border-gray-200
          md:sticky md:top-0 md:h-screen
        "
      >
        <div className="flex-1 overflow-y-auto">
          <UserSidebar />
        </div>

        <div className="p-4 border-t border-gray-200">
          <LogoutButton />
        </div>
      </aside>

      <main className="flex-1 flex flex-col">
        <div className="md:flex-1 md:h-screen md:overflow-y-scroll bg-gray-100 p-5">
          <div className="max-w-7xl mx-auto w-full">{children}</div>
        </div>
      </main>
    </div>
  );
}
