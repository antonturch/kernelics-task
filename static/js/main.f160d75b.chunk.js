(this["webpackJsonpkernelics-task"]=this["webpackJsonpkernelics-task"]||[]).push([[0],{29:function(t,e,a){t.exports={todolist:"Todolist_todolist__2hW8m",buttonGroup:"Todolist_buttonGroup__1MgBv",tasksLi:"Todolist_tasksLi__DhAXc",task_controls:"Todolist_task_controls__2rMYb",btn_active:"Todolist_btn_active__3FKQQ",task_list:"Todolist_task_list__37ulM"}},36:function(t,e,a){t.exports={input:"AddItemForm_input__2Fxmd",task_add_button:"AddItemForm_task_add_button__1N3EZ",add_task_form:"AddItemForm_add_task_form__2iBzI",task_input:"AddItemForm_task_input__3W5-g",error_message:"AddItemForm_error_message__36NVD"}},47:function(t,e,a){t.exports={task_list:"Task_task_list__2qYw1",task_item_remove:"Task_task_item_remove__23zcV",task_strike:"Task_task_strike__T35Q6"}},49:function(t,e,a){t.exports={page_controls:"HeaderNavlinkButtons_page_controls__3rht8",btn_active:"HeaderNavlinkButtons_btn_active__zce2n"}},55:function(t,e,a){t.exports={input_todolist:"EditableSpan_input_todolist__3YwVf"}},69:function(t,e,a){t.exports={add_todolist_block:"AddTodolistPage_add_todolist_block__3RzT5"}},82:function(t,e,a){},92:function(t,e,a){"use strict";a.r(e);var s=a(0),n=a.n(s),c=a(23),i=a.n(c),o=(a(82),a(29)),l=a.n(o),d=a(6),r=a(36),u=a.n(r),j=a(2),b=n.a.memo((function(t){var e=t.addItemHandler,a=t.type,n=Object(s.useState)(""),c=Object(d.a)(n,2),i=c[0],o=c[1],l=Object(s.useState)(""),r=Object(d.a)(l,2),b=r[0],_=r[1];return Object(j.jsxs)("div",{className:u.a.add_task_form,children:[Object(j.jsxs)("div",{className:u.a.task_input,children:[Object(j.jsx)("input",{className:u.a.input,type:"text",placeholder:"New ".concat(a),value:i,onChange:function(t){_("");var e=t.currentTarget.value;o(e)},onKeyPress:function(t){13===t.charCode&&""!==i.trim()?(e(i),o("")):_("Please enter ".concat(a," title"))},autoFocus:!0}),Object(j.jsx)("div",{className:u.a.error_message,children:b})]}),Object(j.jsx)("button",{className:u.a.task_add_button,onClick:function(){""!==i.trim()?(e(i),o("")):_("Please enter ".concat(a," title"))},children:Object(j.jsx)("svg",{viewBox:"0 0 40 40",children:Object(j.jsx)("path",{d:"M10 20 L30 20 M20 10 L20 30"})})})]})})),_=a(26),O=a(9),k=a(7),m=a(11),f=a(117),x=(Object(f.a)(),Object(f.a)(),"CHANGE-FILTER-VALUE"),p="DELETE-TODOLIST",h="ADD-TODOLIST",v="CHANGE-TODOLIST-TITLE",T=[],I="CHANGE-TASK-STATUS",N="DELETE-TASK",g="ADD-TASK",C="CHANGE-TASK-TITLE",A={},y=a(47),w=a.n(y),S=n.a.memo((function(t){var e=t.task,a=(t.setNewTaskTitle,t.deleteTask),s=t.changeTaskStatus,n=function(){return s(e.taskId)};return Object(j.jsxs)("li",{className:w.a.task_list,children:[Object(j.jsx)("input",{type:"checkbox",checked:e.status,onChange:n}),Object(j.jsxs)("label",{onClick:n,children:[e.title,Object(j.jsx)("span",{className:w.a.task_strike})]}),Object(j.jsx)("button",{className:w.a.task_item_remove,onClick:function(){return a(e.taskId)},children:Object(j.jsx)("svg",{viewBox:"0 0 40 40",children:Object(j.jsx)("path",{d:"M15 15 L25 25 M25 15 L15 25"})})})]},e.taskId)})),E=a(55),L=a.n(E),F=function(t){var e=t.title,a=t.setNewItemHandler,n=Object(s.useState)(!1),c=Object(d.a)(n,2),i=c[0],o=c[1],l=Object(s.useState)(e),r=Object(d.a)(l,2),u=r[0],b=r[1];return Object(j.jsx)(j.Fragment,{children:i?Object(j.jsx)("input",{className:L.a.input_todolist,type:"text",value:u,onChange:function(t){b(t.currentTarget.value)},onBlur:function(){o(!1),a(u)},autoFocus:!0}):Object(j.jsx)("span",{className:L.a.todolist_title,onDoubleClick:function(){return o(!0)},children:u})})},D=a(115),H=a(116),B=a(68),M=a.n(B),z=n.a.memo((function(t){var e=t.todolist,a=Object(_.c)((function(t){return t.tasks[e.id]})),n=Object(_.b)(),c=Object(s.useCallback)((function(t){var a;n((a=e.id,{type:g,todolistId:a,newTaskTitle:t}))}),[n,e.id]),i=Object(s.useCallback)((function(t){var a;n((a=e.id,{type:x,todolistId:a,filterValue:t}))}),[n,e.id]),o=Object(s.useCallback)((function(){var t;n((t=e.id,{type:p,todolistId:t}))}),[n,e.id]),d=Object(s.useCallback)((function(t){n(function(t,e){return{type:v,todolistId:t,newTodolistTitle:e}}(e.id,t))}),[n,e.id]),r=Object(s.useCallback)((function(t,a){n(function(t,e,a){return{type:C,todolistId:t,taskId:e,newTaskTitle:a}}(e.id,t,a))}),[n,e.id]),u=Object(s.useCallback)((function(t){return n(function(t,e){return{type:I,todolistId:t,taskId:e}}(e.id,t))}),[n,e.id]),O=Object(s.useCallback)((function(t){return n(function(t,e){return{type:N,todolistId:t,taskId:e}}(e.id,t))}),[n,e.id]);return Object(j.jsxs)("div",{className:l.a.todolist,children:[Object(j.jsxs)("h3",{style:{textAlign:"center"},children:[Object(j.jsx)(F,{title:e.title,setNewItemHandler:d}),Object(j.jsx)(D.a,{title:"Delete",children:Object(j.jsx)(H.a,{"aria-label":"delete",size:"small",children:Object(j.jsx)(M.a,{onClick:o,fontSize:"small"})})})]}),Object(j.jsx)(b,{addItemHandler:c,type:"task"}),Object(j.jsxs)("div",{className:l.a.task_controls,children:[Object(j.jsx)("button",{className:"all"===e.filter?l.a.btn_active:"",onClick:function(){return i("all")},children:"All"}),Object(j.jsx)("button",{className:"active"===e.filter?l.a.btn_active:"",onClick:function(){return i("active")},children:"Active"}),Object(j.jsx)("button",{className:"completed"===e.filter?l.a.btn_active:"",onClick:function(){return i("completed")},children:"Completed"})]}),Object(j.jsx)("ul",{className:l.a.task_list,children:function(){var t;switch(e.filter){case"active":t=a.filter((function(t){return!1===t.status}));break;case"completed":t=a.filter((function(t){return!0===t.status}));break;default:t=a}return t.map((function(t){return Object(j.jsx)(S,{task:t,setNewTaskTitle:r,changeTaskStatus:u,deleteTask:O},t.taskId)}))}()})]})})),G=a(118),K=n.a.memo((function(){var t=Object(_.c)((function(t){return t.todolists}));return Object(j.jsx)(G.a,{container:!0,spacing:3,style:{justifyContent:"center"},children:t.map((function(t){return Object(j.jsx)(G.a,{item:!0,maxWidth:"400px",children:Object(j.jsx)(z,{todolist:t})},t.id)}))})})),P=a(41),V=a(5),Q=a(69),W=a.n(Q),Y=n.a.memo((function(){var t=Object(_.b)(),e=Object(s.useCallback)((function(e){t(function(t,e){return{type:h,todolistId:t,todolistTitle:e}}(Object(f.a)(),e))}),[t]);return Object(j.jsx)("div",{className:W.a.add_todolist_block,children:Object(j.jsx)("div",{children:Object(j.jsx)(b,{addItemHandler:e,type:"todolist"})})})})),J=a(49),R=a.n(J),U=n.a.memo((function(){var t=Object(s.useState)("add"),e=Object(d.a)(t,2),a=e[0],n=e[1];return Object(j.jsxs)("div",{className:R.a.page_controls,children:[Object(j.jsx)(P.b,{to:"/add",children:Object(j.jsx)("button",{onClick:function(){return n("add")},className:"add"===a?R.a.btn_active:"",children:"Add todolist"})}),Object(j.jsx)(P.b,{to:"/todolists",children:Object(j.jsx)("button",{onClick:function(){return n("todolists")},className:"todolists"===a?R.a.btn_active:"",children:"Todolists page"})})]})}));var q=function(){return Object(j.jsxs)(P.a,{children:[Object(j.jsx)(U,{}),Object(j.jsxs)(V.c,{children:[Object(j.jsx)(V.a,{path:"/add",element:Object(j.jsx)(Y,{})}),Object(j.jsx)(V.a,{path:"/todolists",element:Object(j.jsx)(K,{})})]})]})},X=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,119)).then((function(e){var a=e.getCLS,s=e.getFID,n=e.getFCP,c=e.getLCP,i=e.getTTFB;a(t),s(t),n(t),c(t),i(t)}))},Z=a(57),$=Object(Z.a)({todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case x:var a=t.map((function(t){return t.id===e.todolistId?Object(m.a)(Object(m.a)({},t),{},{filter:e.filterValue}):t}));return a;case p:return t.filter((function(t){return t.id!==e.todolistId}));case h:var s={id:e.todolistId,title:e.todolistTitle,filter:"all"};return[s].concat(Object(O.a)(t));case v:return t.map((function(t){return t.id===e.todolistId?Object(m.a)(Object(m.a)({},t),{},{title:e.newTodolistTitle}):t}));default:return t}},tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case I:return Object(m.a)(Object(m.a)({},t),{},Object(k.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.taskId===e.taskId?Object(m.a)(Object(m.a)({},t),{},{status:!t.status}):t}))));case N:return Object(m.a)(Object(m.a)({},t),{},Object(k.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.taskId!==e.taskId}))));case g:var a={todolistId:e.todolistId,taskId:Object(f.a)(),title:e.newTaskTitle,status:!1};return Object(m.a)(Object(m.a)({},t),{},Object(k.a)({},e.todolistId,[a].concat(Object(O.a)(t[e.todolistId]))));case C:return Object(m.a)(Object(m.a)({},t),{},Object(k.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.taskId===e.taskId?Object(m.a)(Object(m.a)({},t),{},{title:e.newTaskTitle}):t}))));case p:var s=Object(m.a)({},t);return delete s[e.todolistId],s;case h:return Object(m.a)(Object(k.a)({},e.todolistId,[]),t);default:return t}}}),tt=Object(Z.b)($);i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(_.a,{store:tt,children:Object(j.jsx)(q,{})})}),document.getElementById("root")),X()}},[[92,1,2]]]);
//# sourceMappingURL=main.f160d75b.chunk.js.map