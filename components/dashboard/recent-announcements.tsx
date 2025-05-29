const announcements = [
  {
    id: 1,
    title: "Midterm Schedule Update",
    course: "CS101",
    date: "2025-04-05",
    content: "The midterm exam has been rescheduled to April 20th. Please adjust your study plans accordingly.",
  },
  {
    id: 2,
    title: "New Resource Available",
    course: "MATH202",
    date: "2025-04-04",
    content: "Additional practice problems have been uploaded to the course portal.",
  },
  {
    id: 3,
    title: "Guest Lecture Announcement",
    course: "HIS205",
    date: "2025-04-03",
    content: "We will have a guest lecturer from Oxford University next week.",
  },
];

export default function RecentAnnouncements() {
  return (
    <div className="space-y-4">
      {announcements.map((announcement) => (
        <div key={announcement.id} className="space-y-2 rounded-md border p-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">{announcement.title}</h4>
            <span className="text-xs text-muted-foreground">
              {announcement.course}
            </span>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {announcement.content}
          </p>
          <p className="text-xs text-muted-foreground">
            {new Date(announcement.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      ))}
    </div>
  );
}