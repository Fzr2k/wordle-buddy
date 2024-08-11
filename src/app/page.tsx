import Form from "./form";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Form />
      </main>
    </div>
  );
}
