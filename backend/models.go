package main

// Todo represents a task with a description and status
type Todo struct {
	ID        string `json:"id"`
	Name      string `json:"name"`
	Completed bool   `json:"completed"`
}
