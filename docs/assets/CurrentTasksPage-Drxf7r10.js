import{d as c,u as d,o as r,c as l,a as t,w as f,v as _,b as e,e as p,t as i,f as m}from"./index-DPMfaCTU.js";import{u}from"./toDoStore-CagCSymR.js";import{_ as x,N as h}from"./NoTask-CwG22O68.js";const y={class:"h-screen w-screen m-auto flex flex-col justify-start items-center gap-5"},k={class:"w-96 flex flex-col justify-center items-start p-5"},D={class:"w-96 flex justify-between items-center"},g=t("h1",{class:"block text-3xl"},"Текущие задачи",-1),w={key:1,class:"flex flex-col justify-between gap-10 w-96 pl-5"},v={class:"flex gap-5"},T={class:"text-xl text-gray-300"},S={class:"text-xl text-gray-300"},O=c({__name:"CurrentTasksPage",setup(b){const a=d(),o=u();return(j,n)=>(r(),l("div",y,[t("div",k,[t("div",D,[g,f(t("input",{type:"date","onUpdate:modelValue":n[0]||(n[0]=s=>e(a).dateFormate=s),class:"cursor-pointer",onChange:n[1]||(n[1]=s=>e(a).date=new Date(e(a).dateFormate))},null,544),[[_,e(a).dateFormate]])])]),e(o).tasksOfTheDay.length==0?(r(),p(h,{key:0})):(r(),l("div",w,[t("div",v,[t("span",T,"Активные: "+i(e(o).tasksOfTheDay.filter(s=>!s.done).length),1),t("span",S,"Выполненные: "+i(e(o).tasksOfTheDay.filter(s=>s.done).length),1)]),m(x,{todosList:e(o).tasksOfTheDay,showDateProps:!1},null,8,["todosList"])]))]))}});export{O as default};