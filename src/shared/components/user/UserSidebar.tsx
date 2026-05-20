import UserRoute from "./UserRoute";

const userNavigation = [
  { url: "/dashboard/profile", text: "Perfil" },
  { url: "/dashboard/security", text: "Seguridad" },
];

export default function UserSidebar() {
  return (
    <div className="space-y-3">
      <nav className="flex flex-col">
        {userNavigation.map((link) => (
          <UserRoute key={link.url} link={link} />
        ))}
      </nav>
    </div>
  );
}
