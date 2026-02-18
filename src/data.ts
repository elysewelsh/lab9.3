import type { Task } from "./types"

export  const ogTasks: Task[] = [
{
  id: "AC",
  title: "See Alice Cooper Live",
  description: "Does this guy know how to party or what?",
  status: "pending",
  priority: 'low',
  dueDate: "November",
}
,
{
  id: "GR",
  title: "Refuse Gun Rack",
  description: "I don't even own ah gun, let alone many guns that would necessitate an entire rack.",
  status: "completed",
  priority: 'low',
  dueDate: "Yesterday",
}
,
{
  id: "GA",
  title: "Play Epic Drum Solo",
  description: "Thanks. I like to play.",
  status: "completed",
  priority: 'high',
  dueDate: "Last Month",
}
,
{
  id: "DE",
  title: "Visit Delaware",
  description: "Hi. I'm in...Delaware",
  status: "in-progress",
  priority: 'low',
  dueDate: "2027",
}
,
{
  id: "WC",
  title: "Buy Excalibur",
  description: "No stairway!",
  status: "in-progress",
  priority:'high',
  dueDate: "ASAP",
}
,
{
  id: "BR",
  title: "Road Trip",
  description: "If you're gonna spew, spew into this.",
  status: "pending",
  priority: 'medium',
  dueDate:"Tonight",
}
]