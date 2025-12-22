import Menu from "../components/Menu";


export default function Home() {
  return (
    <>
      <Menu
        exam1Url="https://exam1-axba.vercel.app/"
        git1Url="https://github.com/jahel925/finalexam"
      />

      <main className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-3xl font-bold tracking-tight">Final Exam Project</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Built with Next.js, Tailwind CSS, shadcn/ui, and lucide-react.
        </p>
      </main>
    </>
  );
}
