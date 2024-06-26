export type Filter = {
    name: "все",
    value: "id",
 } |
 {
    name: "по дате",
    value: "sortedDate",
  } |
  {
    name: "выполненные",
    value: "completed",
  } | 
  {
    name: "активные",
    value: "active",
  }

  export type FilterValue = "id" | "sortedDate" | "completed" | "active"