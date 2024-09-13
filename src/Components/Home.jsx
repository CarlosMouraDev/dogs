import Feed from "./Feed/Feed";
import Head from "../Interface/Head";

export default function Home() {
  return (
    <section className="container mainContainer">
      <Head title="Fotos" description="Home do site" />
      <Feed />
    </section>
  );
}
