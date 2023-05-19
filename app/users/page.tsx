import { Metadata } from "next";
import Style from "./styles.module.css";
import getAllUsers from "../lib/getAllUsers";

export const metadata: Metadata = {
  title: "WebSpace | Users",
};

export default async function Users() {
  const UserData: Promise<User[]> = getAllUsers();
  const users = await UserData;

  const component = (
    <section>
      {users.map((user) => {
        return (
          <>
            <div key={user.id}>
              <h2>{user.name}</h2>
              <div>
                <p>{user.email}</p>
              </div>
            </div>
          </>
        );
      })}
    </section>
  );

  return (
    <main className="main">
      <h1 className="topic">Users</h1>
      {component}
    </main>
  );
}
