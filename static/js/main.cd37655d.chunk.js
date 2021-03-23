(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={contacts:"ContactList_contacts__3YRQJ",item:"ContactList_item__3GStt",btn:"ContactList_btn__C8yZT",notification:"ContactList_notification__24nGV"}},,,,,,function(t,e,n){t.exports={form:"ContactForm_form__2Xtv8",btn:"ContactForm_btn__2oRPR"}},,function(t,e,n){t.exports={title:"PageTitle_title__AYmud"}},function(t,e,n){t.exports={statistics:"Title_statistics__1HglC",good:"Title_good__2p_nK",neutral:"Title_neutral__3KBXF",bad:"Title_bad__1wLsw",border:"Title_border__3jPov"}},function(t,e,n){t.exports={container:"Section_container__1FTVN",title:"Section_title__1HWUe"}},,function(t,e,n){t.exports={filter:"Filter_filter__3MXUP"}},,,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),i=n(9),r=n.n(i),o=n(15),s=n(3),l=n(4),u=n(6),b=n(5),d=n(10),f=n.n(d),j=n(0),m=function(t){var e=t.title;return Object(j.jsx)("h1",{className:f.a.title,children:e})};m.defaultProps={title:""};var h=m,p=n(11),_=n.n(p),O=function(t){var e=t.title;return e&&Object(j.jsx)("h2",{className:_.a.title,children:e})};O.defaultProps={title:""};var v=O,x=n(12),C=n.n(x),g=function(t){var e=t.children;return Object(j.jsx)("section",{children:Object(j.jsx)("div",{className:C.a.container,children:e})})},y=n(13),S=n(25),N=n(8),k=n.n(N),w=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(y.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=Object(S.a)(),a=t.state,c=a.name,i=a.number;if(c){var r={id:n,name:c,number:i};t.props.submitHandler(r),t.reset()}},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:k.a.form,onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{children:["Name",Object(j.jsx)("input",{type:"name",name:"name",value:this.state.name,onChange:this.handleInputChange,required:!0})]}),Object(j.jsxs)("label",{children:["Number",Object(j.jsx)("input",{type:"tel",name:"number",value:this.state.number,onChange:this.handleInputChange,required:!0})]}),Object(j.jsx)("button",{type:"submit",className:k.a.btn,children:"Add contact"})]})}}]),n}(a.Component),T=n(14),P=n.n(T),L=function(t){var e=t.filterValue,n=t.filterUpdate;return Object(j.jsx)("div",{className:P.a.filter,children:Object(j.jsxs)("label",{children:["Find contacts by name",Object(j.jsx)("input",{type:"text",name:"filter",value:e,onChange:n,autoComplete:"off",required:!0})]})})};L.defaultProps={filterValue:""};var F=L,H=n(2),U=n.n(H),D=function(t){var e=t.filtered,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:U.a.contacts,children:e.length?e.map((function(t){return Object(j.jsxs)("li",{className:U.a.item,children:[Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:[t.name,":"]}),Object(j.jsx)("p",{children:t.number})]}),Object(j.jsx)("button",{className:U.a.btn,onClick:function(){n(t.id)},children:"Delete"})]},t.id)})):Object(j.jsx)("li",{className:U.a.notification,children:"No contact found"})})},I=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.submitHandler=function(e){var n=t.state.contacts,a=n.find((function(t){return t.name===e.name}));a?alert("".concat(a.name," is already in contacts.")):t.setState({contacts:[e].concat(Object(o.a)(n))})},t.filterUpdate=function(e){var n=e.currentTarget.value;t.setState({filter:n})},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this,e=this.state.contacts.filter((function(e){var n=e.name,a=e.number;return n.toLowerCase().includes(t.state.filter.toLocaleLowerCase())||a.includes(t.state.filter)}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h,{title:"React. HomeWork-2.2. Phone Book"}),Object(j.jsxs)(g,{children:[Object(j.jsx)(v,{title:"Phone Book"}),Object(j.jsx)(w,{submitHandler:this.submitHandler}),Object(j.jsx)(v,{title:"\u0421ontacts"}),Object(j.jsx)(F,{filterValue:this.state.filter,filterUpdate:this.filterUpdate}),Object(j.jsx)(D,{filtered:e,onDeleteContact:this.deleteContact})]})]})}}]),n}(a.Component);n(21),n(22);r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.cd37655d.chunk.js.map