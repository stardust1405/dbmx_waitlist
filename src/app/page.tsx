import { LandingPage } from "./page.client";
import { connection } from "next/server";
import { getNotionDatabaseRowCount } from "~/lib/utils";

export const dyamic = "force-dynamic";

export default async function Home() {
  // forces the page to be dyamically rendered
  await connection();
  const waitlistPeople = await getNotionDatabaseRowCount(
    process.env.NOTION_DB!
  );

  return <LandingPage waitlistPeople={waitlistPeople} />;
}
