import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, BookText, Calendar, Clock, FileText, Search, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            <span className="text-xl font-bold">LibraryHub</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/catalog" className="text-sm font-medium hover:underline underline-offset-4">
              Catalog
            </Link>
            <Link href="/e-resources" className="text-sm font-medium hover:underline underline-offset-4">
              E-Resources
            </Link>
            <Link href="/dashboard" className="text-sm font-medium hover:underline underline-offset-4">
              My Account
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Modern Library Management System</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Access books, e-resources, and academic materials with our comprehensive library system.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/catalog">
                    <Button size="lg" className="w-full">
                      Browse Catalog
                    </Button>
                  </Link>
                  <Link href="/dashboard">
                    <Button size="lg" variant="outline" className="w-full">
                      My Dashboard
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-video overflow-hidden rounded-xl">
                  <img
                    src="/placeholder.svg?height=500&width=800"
                    alt="Library Management System"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Key Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our library system offers a comprehensive set of features to enhance your academic experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <Search className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Advanced Search</h3>
                <p className="text-center text-muted-foreground">
                  Search for books by title, author, subject, and keywords with powerful filtering options.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <BookText className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">E-Resources</h3>
                <p className="text-center text-muted-foreground">
                  Access digital resources like e-books, papers, and syllabi online or download for offline use.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <Clock className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Real-Time Tracking</h3>
                <p className="text-center text-muted-foreground">
                  Track your current borrowings, due dates, and book availability in real-time.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <Calendar className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Reminder System</h3>
                <p className="text-center text-muted-foreground">
                  Receive automated notifications about due dates, overdue books, and library events.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <FileText className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Report Generation</h3>
                <p className="text-center text-muted-foreground">
                  Generate reports based on user activity, borrowed books, and other metrics.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Multi-User Access</h3>
                <p className="text-center text-muted-foreground">
                  Different roles with appropriate permissions for students, faculty, librarians, and administrators.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            <span className="text-lg font-semibold">LibraryHub</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} LibraryHub. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
