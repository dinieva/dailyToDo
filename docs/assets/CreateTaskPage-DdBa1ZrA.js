import{d as x,u as h,r as u,o as b,c as g,a as t,w as i,v as c,g as w,b as S,h as y,i as T,p as k,j as D,_ as I}from"./index-C0hQshi2.js";import{u as j}from"./toDoStore-CBpkXyJU.js";const s=a=>(k("data-v-18454c05"),a=a(),D(),a),V={class:"h-screen w-screen m-auto flex flex-col justify-start items-center gap-5"},q=s(()=>t("div",{class:"w-96 flex flex-col justify-center items-start p-5"},[t("h1",{class:"text-3xl"},"Создать задачу")],-1)),B=s(()=>t("option",{disabled:"",value:""},"Приоритет",-1)),C=s(()=>t("option",{value:"Высокий"},"Высокий",-1)),M=s(()=>t("option",{value:"Средний"},"Средний",-1)),N=s(()=>t("option",{value:"Низкий"},"Низкий",-1)),U=[B,C,M,N],F=["min"],P=["disabled"],E=x({__name:"CreateTaskPage",setup(a){const p=T(),f=j(),v=h(),l=u(""),d=u(""),n=u(v.dateFormate),m=new Date().toISOString().split("T")[0],_=async(r,e,o)=>{r&&e&&o&&(f.addNewTask(r,e,o),p.push("/dailyToDo"))};return(r,e)=>(b(),g("div",V,[q,t("form",{action:"#",class:"flex flex-col justify-center gap-7 w-96",onSubmit:e[3]||(e[3]=y(o=>_(l.value,d.value,n.value),["prevent"])),valid:"false"},[i(t("input",{type:"text",autofocus:"",name:"text",minlength:"1",placeholder:"Описание","onUpdate:modelValue":e[0]||(e[0]=o=>l.value=o),class:"border rounded-full p-4",required:""},null,512),[[c,l.value,void 0,{trim:!0}]]),i(t("select",{name:"category",id:"category",class:"border rounded-full p-4","onUpdate:modelValue":e[1]||(e[1]=o=>d.value=o),required:""},U,512),[[w,d.value]]),i(t("input",{type:"date",id:"start",class:"border rounded-full p-4",placeholder:"Дата",min:S(m),"onUpdate:modelValue":e[2]||(e[2]=o=>n.value=o),required:""},null,8,F),[[c,n.value]]),t("button",{disabled:d.value==""||l.value.length==0||!n.value,class:"h-10 w-52 bg-cyan-200 text-xl text-center rounded-full font-semibold m-auto"}," Создать ",8,P)],32)]))}}),$=I(E,[["__scopeId","data-v-18454c05"]]);export{$ as default};
