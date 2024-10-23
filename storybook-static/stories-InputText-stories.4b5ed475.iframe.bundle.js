/*! For license information please see stories-InputText-stories.4b5ed475.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkinput_components=self.webpackChunkinput_components||[]).push([[508],{"./src/stories/InputText.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Error:()=>Error,Quiet:()=>Quiet,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/InputText",component:__webpack_require__("./src/stories/InputText.tsx").S,argTypes:{size:{control:"radio",options:["xs","sm","md","lg","xl"]},quiet:{control:"boolean"},hasError:{control:"boolean"},disabled:{control:"boolean"},darkMode:{control:"boolean"}}},Default={args:{value:"",placeholder:"Enter text...",size:"md",quiet:!1,hasError:!1,disabled:!1,darkMode:!1}},Quiet={args:{...Default.args,quiet:!0}},Error={args:{...Default.args,hasError:!0,placeholder:"This field has an error"}},__namedExportsOrder=["Default","Quiet","Error"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: '',\n    placeholder: 'Enter text...',\n    size: 'md',\n    quiet: false,\n    hasError: false,\n    disabled: false,\n    darkMode: false\n  }\n}",...Default.parameters?.docs?.source}}},Quiet.parameters={...Quiet.parameters,docs:{...Quiet.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    quiet: true\n  }\n}",...Quiet.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    hasError: true,\n    placeholder: 'This field has an error'\n  }\n}",...Error.parameters?.docs?.source}}}},"./src/stories/InputText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>InputText});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const InputText=_ref=>{let{value,onChange,placeholder,disabled,size="md",quiet=!1,hasError=!1,darkMode=!1}=_ref;const sizes={xs:"8px",sm:"10px",md:"12px",lg:"14px",xl:"16px"},inputStyle={padding:sizes[size],fontSize:sizes[size],border:hasError?"1px solid red":quiet?"none":"1px solid #ccc",borderRadius:"4px",width:"50%",backgroundColor:quiet?"transparent":darkMode?"#333":"white",color:darkMode?"white":"black",minWidth:`calc(1.5 * ${sizes[size]})`,overflow:"hidden",textOverflow:"ellipsis"};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{type:"text",value,onChange:e=>onChange(e.target.value),placeholder,disabled,style:inputStyle})};InputText.__docgenInfo={description:"",methods:[],displayName:"InputText",props:{value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},quiet:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasError:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},darkMode:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);