import Meta from "../components/Meta";
import Nav from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-gray-50 dark:text-white dark:bg-gray-900 min-h-screen">
      <Meta title="Home" />
      <Nav />
      <main className="m-6">
        <div className="container mx-auto">
          <h1 className="title mb-3">Cox Mill High School Hack Club.</h1>
          <p>YOOOOOO!!! THE THEME IS WORKING!! NEXT.JS + TAILWINDCSS BAYBEEE</p>
          {/* <button className="btn my-3">
            <a href="https://www.google.com">
              Take me there!
            </a>
          </button> */}
        </div>
      </main>
    </div>
  );
}
