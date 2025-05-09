"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, ChevronLeft, Clock, Download, FileText, History, Library, User } from "lucide-react"

// Mock data for demonstration
const borrowedBooks = [
  {
    id: 1,
    title: "Introduction to Computer Science",
    author: "John Smith",
    borrowDate: "2023-04-15",
    dueDate: "2023-05-15",
    status: "overdue",
    coverImage: "/placeholder.svg?height=80&width=60",
  },
  {
    id: 2,
    title: "Modern Physics",
    author: "Sarah Brown",
    borrowDate: "2023-04-28",
    dueDate: "2023-05-28",
    status: "active",
    coverImage: "/placeholder.svg?height=80&width=60",
  },
  {
    id: 3,
    title: "Principles of Economics",
    author: "Robert Williams",
    borrowDate: "2023-05-02",
    dueDate: "2023-06-02",
    status: "active",
    coverImage: "/placeholder.svg?height=80&width=60",
  },
]

const reservedBooks = [
  {
    id: 4,
    title: "Advanced Mathematics for Engineers",
    author: "Emily Johnson",
    reserveDate: "2023-05-05",
    availableDate: "2023-05-20",
    status: "pending",
    coverImage: "/placeholder.svg?height=80&width=60",
  },
]

const borrowHistory = [
  {
    id: 5,
    title: "Organic Chemistry",
    author: "Michael Davis",
    borrowDate: "2023-02-10",
    returnDate: "2023-03-10",
    status: "returned",
    coverImage: "/placeholder.svg?height=80&width=60",
  },
  {
    id: 6,
    title: "World History: Ancient Civilizations",
    author: "Jennifer Wilson",
    borrowDate: "2023-01-15",
    returnDate: "2023-02-15",
    status: "returned",
    coverImage: "/placeholder.svg?height=80&width=60",
  },
]

const eResources = [
  {
    id: 1,
    title: "Introduction to Machine Learning",
    author: "David Lee",
    type: "E-Book",
    accessDate: "2023-05-01",
    size: "15 MB",
    coverImage: "/placeholder.svg?height=80&width=60",
  },
  {
    id: 2,
    title: "Database Systems: Concepts and Design",
    author: "Maria Rodriguez",
    type: "PDF",
    accessDate: "2023-04-20",
    size: "8 MB",
    coverImage: "/placeholder.svg?height=80&width=60",
  },
  {
    id: 3,
    title: "Artificial Intelligence: A Modern Approach",
    author: "Stuart Russell & Peter Norvig",
    type: "E-Book",
    accessDate: "2023-05-05",
    size: "22 MB",
    coverImage: "/placeholder.svg?height=80&width=60",
  },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("borrowed")

  // Calculate days remaining or overdue
  const calculateDaysStatus = (dueDate) => {
    const today = new Date()
    const due = new Date(dueDate)
    const diffTime = due - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays < 0) {
      return { days: Math.abs(diffDays), isOverdue: true }
    }
    return { days: diffDays, isOverdue: false }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              <span className="text-xl font-bold">LibraryHub</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/catalog" className="text-sm font-medium hover:underline underline-offset-4">
              Catalog
            </Link>
            <Link href="/e-resources" className="text-sm font-medium hover:underline underline-offset-4">
              E-Resources
            </Link>
            <Link href="/dashboard" className="text-sm font-medium underline underline-offset-4">
              My Account
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4 mr-2" />
              John Doe
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-8">
        <div className="flex items-center mb-6">
          <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-foreground mr-4">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold">My Dashboard</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Borrowed Books</CardTitle>
              <Library className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{borrowedBooks.length}</div>
              <p className="text-xs text-muted-foreground">
                {borrowedBooks.filter((book) => calculateDaysStatus(book.dueDate).isOverdue).length} overdue
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Reserved Books</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{reservedBooks.length}</div>
              <p className="text-xs text-muted-foreground">
                Next available in {reservedBooks.length > 0 ? "15 days" : "N/A"}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">E-Resources</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{eResources.length}</div>
              <p className="text-xs text-muted-foreground">Last accessed on May 5, 2023</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Borrowing Limit</CardTitle>
              <History className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{borrowedBooks.length}/5</div>
              <Progress value={borrowedBooks.length * 20} className="h-2 mt-2" />
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="borrowed" className="space-y-4" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="borrowed">Borrowed Books</TabsTrigger>
            <TabsTrigger value="reserved">Reserved Books</TabsTrigger>
            <TabsTrigger value="history">Borrowing History</TabsTrigger>
            <TabsTrigger value="e-resources">E-Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="borrowed" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Currently Borrowed Books</CardTitle>
                <CardDescription>You have {borrowedBooks.length} books currently checked out.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[80px]">Cover</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Borrow Date</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {borrowedBooks.map((book) => {
                      const { days, isOverdue } = calculateDaysStatus(book.dueDate)
                      return (
                        <TableRow key={book.id}>
                          <TableCell>
                            <img
                              src={book.coverImage || "/placeholder.svg"}
                              alt={`Cover of ${book.title}`}
                              className="w-12 h-16 object-cover rounded"
                            />
                          </TableCell>
                          <TableCell>
                            <div className="font-medium">{book.title}</div>
                            <div className="text-sm text-muted-foreground">{book.author}</div>
                          </TableCell>
                          <TableCell>{book.borrowDate}</TableCell>
                          <TableCell>{book.dueDate}</TableCell>
                          <TableCell>
                            {isOverdue ? (
                              <Badge variant="destructive">Overdue by {days} days</Badge>
                            ) : (
                              <Badge variant="outline">{days} days remaining</Badge>
                            )}
                          </TableCell>
                          <TableCell className="text-right">
                            <Button size="sm">Renew</Button>
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reserved" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Reserved Books</CardTitle>
                <CardDescription>You have {reservedBooks.length} books on hold.</CardDescription>
              </CardHeader>
              <CardContent>
                {reservedBooks.length > 0 ? (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[80px]">Cover</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Reserve Date</TableHead>
                        <TableHead>Available Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {reservedBooks.map((book) => (
                        <TableRow key={book.id}>
                          <TableCell>
                            <img
                              src={book.coverImage || "/placeholder.svg"}
                              alt={`Cover of ${book.title}`}
                              className="w-12 h-16 object-cover rounded"
                            />
                          </TableCell>
                          <TableCell>
                            <div className="font-medium">{book.title}</div>
                            <div className="text-sm text-muted-foreground">{book.author}</div>
                          </TableCell>
                          <TableCell>{book.reserveDate}</TableCell>
                          <TableCell>{book.availableDate}</TableCell>
                          <TableCell>
                            <Badge>Waiting</Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="outline" size="sm">
                              Cancel
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <div className="text-center py-6">
                    <p className="text-muted-foreground">You don't have any reserved books.</p>
                    <Button className="mt-4" asChild>
                      <Link href="/catalog">Browse Catalog</Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Borrowing History</CardTitle>
                <CardDescription>Your past borrowing activity.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[80px]">Cover</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Borrow Date</TableHead>
                      <TableHead>Return Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {borrowHistory.map((book) => (
                      <TableRow key={book.id}>
                        <TableCell>
                          <img
                            src={book.coverImage || "/placeholder.svg"}
                            alt={`Cover of ${book.title}`}
                            className="w-12 h-16 object-cover rounded"
                          />
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">{book.title}</div>
                          <div className="text-sm text-muted-foreground">{book.author}</div>
                        </TableCell>
                        <TableCell>{book.borrowDate}</TableCell>
                        <TableCell>{book.returnDate}</TableCell>
                        <TableCell>
                          <Badge variant="outline">Returned</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="e-resources" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>E-Resources</CardTitle>
                <CardDescription>Digital resources you have access to.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[80px]">Cover</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Last Accessed</TableHead>
                      <TableHead>Size</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {eResources.map((resource) => (
                      <TableRow key={resource.id}>
                        <TableCell>
                          <img
                            src={resource.coverImage || "/placeholder.svg"}
                            alt={`Cover of ${resource.title}`}
                            className="w-12 h-16 object-cover rounded"
                          />
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">{resource.title}</div>
                          <div className="text-sm text-muted-foreground">{resource.author}</div>
                        </TableCell>
                        <TableCell>{resource.type}</TableCell>
                        <TableCell>{resource.accessDate}</TableCell>
                        <TableCell>{resource.size}</TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" className="mr-2">
                            Read
                          </Button>
                          <Button variant="outline" size="icon">
                            <Download className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
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
        </div>
      </footer>
    </div>
  )
}
