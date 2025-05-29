"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import {
  Github,
  GitPullRequest,
  MessageSquare,
  Clock,
  CheckCircle2,
  XCircle,
  Search,
  Tag,
  BarChart3,
} from "lucide-react";
import { format } from "date-fns";

interface PullRequest {
  id: string;
  title: string;
  number: number;
  repository: string;
  status: "open" | "merged" | "closed";
  author: string;
  createdAt: string;
  updatedAt: string;
  comments: number;
  labels: string[];
  url: string;
}

const mockPRs: PullRequest[] = [
  {
    id: "1",
    title: "Add authentication feature",
    number: 123,
    repository: "my-app",
    status: "open",
    author: "janesmith",
    createdAt: "2025-04-01T10:00:00Z",
    updatedAt: "2025-04-02T15:30:00Z",
    comments: 5,
    labels: ["feature", "in-review"],
    url: "https://github.com/org/repo/pull/123",
  },
  {
    id: "2",
    title: "Fix navigation bug",
    number: 124,
    repository: "my-app",
    status: "merged",
    author: "janesmith",
    createdAt: "2025-03-28T09:00:00Z",
    updatedAt: "2025-03-29T14:20:00Z",
    comments: 3,
    labels: ["bug", "priority"],
    url: "https://github.com/org/repo/pull/124",
  },
];

export default function GitHubPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [newPRLink, setNewPRLink] = useState("");

  const handleAddPR = () => {
    if (!newPRLink) {
      toast.error("Please enter a PR link");
      return;
    }
    toast.success("PR added successfully");
    setNewPRLink("");
  };

  const handleApprove = (prId: string) => {
    toast.success("PR approved successfully");
  };

  const handleMerge = (prId: string) => {
    toast.success("PR merged successfully");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">GitHub Integration</h1>
        <p className="text-muted-foreground">
          Manage your pull requests and GitHub activity
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open PRs</CardTitle>
            <GitPullRequest className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">
              2 awaiting review
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Review Comments</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">
              +8 since last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Time to Merge</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4d</div>
            <p className="text-xs text-muted-foreground">
              -0.8d from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Merge Rate</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">
              +5% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Add Pull Request</CardTitle>
          <CardDescription>
            Paste a GitHub pull request link to start tracking
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input
              placeholder="https://github.com/org/repo/pull/123"
              value={newPRLink}
              onChange={(e) => setNewPRLink(e.target.value)}
            />
            <Button onClick={handleAddPR}>Add PR</Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="all">All PRs</TabsTrigger>
            <TabsTrigger value="open">Open</TabsTrigger>
            <TabsTrigger value="merged">Merged</TabsTrigger>
            <TabsTrigger value="closed">Closed</TabsTrigger>
          </TabsList>
          <div className="flex items-center space-x-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search PRs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[200px]"
            />
          </div>
        </div>

        <TabsContent value="all" className="space-y-4">
          <ScrollArea className="h-[600px] pr-4">
            {mockPRs.map((pr) => (
              <Card key={pr.id} className="mb-4">
                <CardHeader className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-base">
                        <a
                          href={pr.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {pr.title}
                        </a>
                      </CardTitle>
                      <CardDescription>
                        #{pr.number} opened by {pr.author} in {pr.repository}
                      </CardDescription>
                    </div>
                    <Badge
                      variant={
                        pr.status === "merged"
                          ? "default"
                          : pr.status === "closed"
                          ? "destructive"
                          : "outline"
                      }
                    >
                      {pr.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pr.labels.map((label) => (
                      <Badge key={label} variant="outline">
                        <Tag className="h-3 w-3 mr-1" />
                        {label}
                      </Badge>
                    ))}
                  </div>
                  <Separator className="my-4" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        {pr.comments} comments
                      </div>
                      <div>
                        Updated {format(new Date(pr.updatedAt), "MMM d, yyyy")}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleApprove(pr.id)}
                      >
                        <CheckCircle2 className="h-4 w-4 mr-2" />
                        Approve
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => handleMerge(pr.id)}
                      >
                        Merge
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </ScrollArea>
        </TabsContent>

        <TabsContent value="open">
          <Card>
            <CardHeader>
              <CardTitle>Open Pull Requests</CardTitle>
            </CardHeader>
            <CardContent>
              {mockPRs.filter((pr) => pr.status === "open").length === 0 ? (
                <p className="text-muted-foreground">No open pull requests</p>
              ) : (
                <ScrollArea className="h-[500px]">
                  {/* Filter and display open PRs */}
                </ScrollArea>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="merged">
          <Card>
            <CardHeader>
              <CardTitle>Merged Pull Requests</CardTitle>
            </CardHeader>
            <CardContent>
              {mockPRs.filter((pr) => pr.status === "merged").length === 0 ? (
                <p className="text-muted-foreground">No merged pull requests</p>
              ) : (
                <ScrollArea className="h-[500px]">
                  {/* Filter and display merged PRs */}
                </ScrollArea>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="closed">
          <Card>
            <CardHeader>
              <CardTitle>Closed Pull Requests</CardTitle>
            </CardHeader>
            <CardContent>
              {mockPRs.filter((pr) => pr.status === "closed").length === 0 ? (
                <p className="text-muted-foreground">No closed pull requests</p>
              ) : (
                <ScrollArea className="h-[500px]">
                  {/* Filter and display closed PRs */}
                </ScrollArea>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}