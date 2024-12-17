import{d,o as a,c as n,a as t,w as m,n as u,q as c,t as i,s as _,h,b as f,_ as p,m as k,F as b,f as g}from"./index-07vlEiNB.js";import{u as w}from"./toDoStore-gJyTSa3m.js";const y={class:"flex items-center justify-between gap-3 p-2 border-b-2 border-gray-300"},D={class:"flex justify-between items-center"},v={class:"flex flex-col pl-2"},x={key:0,class:"text-m text-gray-400"},$=d({__name:"ToDoItem",props:{showDate:{default:()=>!1},task:{}},setup(r){const o=w();return(e,s)=>(a(),n("li",y,[t("div",D,[m(t("input",{type:"checkbox","onUpdate:modelValue":s[0]||(s[0]=l=>e.task.done=l),class:"accent-slate-50 focus:accent-slate-500"},null,512),[[u,e.task.done]]),t("div",{class:c(["ml-1 w-2 h-10",{important:e.task.category=="Высокий","medium-important":e.task.category=="Средний","low-important":e.task.category=="Низкий"}])},null,2),t("div",v,[t("span",{class:c(["text-base",{"line-through":e.task.done}])},i(e.task.text),3),e.showDate?(a(),n("span",x,i(e.task.date),1)):_("",!0)])]),t("button",{onClick:s[1]||(s[1]=h(l=>f(o).deleteTask(e.task),["stop"])),class:"w-5 h-5 bg-trash bg-center bg-no-repeat bg-contain hover:scale-125"})]))}}),T=p($,[["__scopeId","data-v-3c6dc03f"]]),F=d({__name:"ToDoList",props:{showDateProps:{type:Boolean,default:!1},todosList:{}},setup(r){return(o,e)=>(a(!0),n(b,null,k(o.todosList,s=>(a(),n("ul",{key:s.id},[g(T,{task:s,showDate:o.showDateProps},null,8,["task","showDate"])]))),128))}}),C={},N=t("h1",{class:"font-bold text-center text-2xl mb-4"},"У вас нет задач",-1),B=t("div",{class:"w-96 h-64 bg-no-tasks bg-center bg-no-repeat bg-contain"},null,-1),L=t("h3",{class:"font-medium text-center text-lg text-gray-300 mt-4"}," Выберите другой день или создайте задачу ",-1),V=[N,B,L];function I(r,o){return a(),n("div",null,V)}const M=p(C,[["render",I]]);export{M as N,F as _};
