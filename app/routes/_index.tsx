import type { MetaFunction } from "@remix-run/node";
import ColorGame from "../components/ColorGame";
// import GuessGame from "../components/GuessGame";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <ColorGame />
      {/* <GuessGame /> */}
    </div>
  );
}
