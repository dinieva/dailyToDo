import{u as r,k as l,r as u,x as f,l as n}from"./index-07vlEiNB.js";const i=r(),d=l("toDoStore",{state:()=>{const e=u(JSON.parse(localStorage.getItem("tasks")||"[]"));return f(()=>{localStorage.setItem("tasks",JSON.stringify(e.value))}),{allTasks:e,addNewTask(t,a,s){let o={id:Date.now(),text:t,category:a,done:!1,date:s};e.value.push(o),localStorage.setItem("tasks",JSON.stringify(e.value))},deleteTask(t){return e.value=e.value.filter(a=>a.id!=t.id),e.value},tasksOfTheDay:n(function(){return e.value.filter(t=>t.date===i.dateFormate)})}}});export{d as u};