"use strict";define("dummy/app",["exports","ember","ember-load-initializers","dummy/config/environment","dummy/resolver"],function(e,n,t,o,r){var p=n.default.Application,a=void 0;n.default.MODEL_FACTORY_INJECTIONS=!0,a=p.extend({modulePrefix:o.default.modulePrefix,podModulePrefix:o.default.podModulePrefix,Resolver:r.default}),(0,t.default)(a,o.default.modulePrefix),e.default=a}),define("dummy/components/code-block",["exports","ember-prism/components/code-block"],function(e,n){e.default=n.default}),define("dummy/components/code-inline",["exports","ember-prism/components/code-inline"],function(e,n){e.default=n.default}),define("dummy/fixtures/contributors",["exports"],function(e){e.default=[{id:"422902",name:"Matthew Dahl",username:"sandersky"},{id:"18398999",name:"sdesros",username:"sdesros"},{id:"8236686",name:"Michael Carroll",username:"juwara0"},{id:"2244653",name:"Phil Nachum",username:"pnachum"},{id:"9026198",name:"Steven Glanzer",username:"sglanzer"},{id:"9057680",name:"Eric White",username:"EWhite613"},{id:"1192053",name:"Ian Storz",username:"ianstarz"},{id:"35697",name:"Justin Bowes",username:"justinbowes"},{id:"411788",name:"Adam Meadows",username:"job13er"},{id:"7063255",name:"Seena Rowhani",username:"srowhani"}]}),define("dummy/fixtures/validators",["exports"],function(e){e.default=[{description:"Property can be of any type.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    bar: PropTypes.any,\n    baz: PropTypes.any.isRequired,\n    foo: PropTypes.any({required: true}),\n    spam: PropTypes.any({updatable: false})\n  }\n})\n    ",name:"any"},{description:"Property must be an array.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    bar: PropTypes.array,\n    baz: PropTypes.array.isRequired,\n    foo: PropTypes.array({required: true}),\n    spam: PropTypes.array({updatable: false})\n  }\n})\n    ",name:"array"},{description:"Property must be an array of given type.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    bar: PropTypes.arrayOf(PropTypes.string),\n    baz: PropTypes.arrayOf(PropTypes.string).isRequired,\n    foo: PropTypes.arrayOf(PropTypes.string, {required: true}),\n    spam: PropTypes.arrayOf(PropTypes.string, {updatable: false})\n  }\n})\n    ",name:"arrayOf"},{description:"Property must be a boolean.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    bar: PropTypes.bool,\n    baz: PropTypes.bool.isRequired,\n    foo: PropTypes.bool({required: true}),\n    spam: PropTypes.bool({updatable: false})\n  }\n})\n    ",name:"bool"},{description:"Property must be a date.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    bar: PropTypes.date,\n    baz: PropTypes.date.isRequired,\n    foo: PropTypes.date({required: true}),\n    spam: PropTypes.date({updatable: false})\n  }\n})\n    ",name:"date"},{description:"Property must be an instance of Element.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    bar: PropTypes.element,\n    baz: PropTypes.element.isRequired,\n    foo: PropTypes.element({required: true}),\n    spam: PropTypes.element({updatable: false})\n  }\n})\n    ",name:"element"},{description:"Property must be from {{component}} helper.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    bar: PropTypes.EmberComponent,\n    baz: PropTypes.EmberComponent.isRequired,\n    foo: PropTypes.EmberComponent({required: true}),\n    spam: PropTypes.EmberComponent({updatable: false})\n  }\n})\n    ",hbs:"\n{{my-component\n  bar={{component 'foo-bar'}}\n  baz={{component 'foo-bar' 'test' 'spam'}}\n  foo={{component prop1='test' prop2='spam'}}\n}}\n    ",name:"EmberComponent"},{description:"Property must be an Ember.Object.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    bar: PropTypes.EmberObject,\n    baz: PropTypes.EmberObject.isRequired,\n    foo: PropTypes.EmberObject({required: true}),\n    spam: PropTypes.EmberObject({updatable: false})\n  }\n})\n    ",name:"EmberObject"},{description:"Property must be a function.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    bar: PropTypes.func,\n    baz: PropTypes.func.isRequired,\n    foo: PropTypes.func({required: true}),\n    spam: PropTypes.func({updatable: false})\n  }\n})\n    ",name:"func"},{description:"Property must be an instance of given class.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    bar: PropTypes.instanceOf(HTMLElement),\n    baz: PropTypes.instanceOf(HTMLElement).isRequired\n    foo: PropTypes.instanceOf(HTMLElement, {required: true}),\n    spam: PropTypes.instanceOf(HTMLElement, {updatable: false})\n  }\n})\n    ",name:"instanceOf"},{description:"Property must be null. This is typically useful in conjunction with oneOfType.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    bar: PropTypes.oneOfType([\n      PropTypes.null,\n      PropTypes.string\n    ])\n  }\n})\n    ",name:"null"},{description:"Property must be a number.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    bar: PropTypes.number,\n    baz: PropTypes.number.isRequired,\n    foo: PropTypes.number({required: true}),\n    spam: PropTypes.number({updatable: false})\n  }\n})\n    ",name:"number"},{description:"Property must be an object.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    bar: PropTypes.object,\n    baz: PropTypes.object.isRequired,\n    foo: PropTypes.object({required: true}),\n    spam: PropTypes.object({updatable: false})\n  }\n})\n    ",name:"object"},{description:"Property value must be in set of possible values.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    bar: PropTypes.oneOf(['bar', 'baz']),\n    baz: PropTypes.oneOf(['bar', 'baz']).isRequired,\n    foo: PropTypes.oneOf(\n      [\n        'bar',\n        'baz'\n      ],\n      {\n        required: true\n      }\n    ),\n    spam: PropTypes.oneOf(\n      [\n        'bar',\n        'baz'\n      ],\n      {\n        updatable: false\n      }\n    )\n  }\n})\n    ",name:"oneOf"},{description:"Property type must be in set of possible types.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    bar: PropTypes.oneOfType([\n      PropTypes.null,\n      PropTypes.string\n    ]),\n    baz: PropTypes.oneOfType([\n      PropTypes.null,\n      PropTypes.string\n    ]).isRequired,\n    foo: PropTypes.oneOfType(\n      [\n        PropTypes.null,\n        PropTypes.string\n      ],\n      {\n        required: true\n      }\n    ),\n    spam: PropTypes.oneOfType(\n      [\n        PropTypes.null,\n        PropTypes.string\n      ],\n      {\n        updatable: false\n      }\n    )\n  }\n})\n    ",name:"oneOfType"},{description:"Property must be a regular expression.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    bar: PropTypes.regexp,\n    baz: PropTypes.regexp.isRequired,\n    foo: PropTypes.regexp({required: true}),\n    spam: PropTypes.regexp({updatable: false})\n  }\n})\n    ",name:"regexp"},{description:"Property must be an Object of the given shape.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    bar: PropTypes.shape({\n      bar: PropTypes.number.isRequired,\n      baz: PropTypes.string\n    }),\n    baz: PropTypes.shape({\n      bar: PropTypes.number.isRequired,\n      baz: PropTypes.string\n    }).isRequired,\n    foo: PropTypes.shape(\n      {\n        bar: PropTypes.number.isRequired,\n        baz: PropTypes.string\n      },\n      {\n        required: true\n      }\n    ),\n    spam: PropTypes.shape(\n      {\n        bar: PropTypes.number.isRequired,\n        baz: PropTypes.string\n      },\n      {\n        updatable: false\n      }\n    )\n  }\n})\n    ",name:"shape"},{description:"Property must be a string.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    bar: PropTypes.string,\n    baz: PropTypes.string.isRequired,\n    foo: PropTypes.string({required: true}),\n    spam: PropTypes.string({updatable: false})\n  }\n})\n    ",name:"string"},{description:"Property must be a symbol.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    bar: PropTypes.symbol,\n    baz: PropTypes.symbol.isRequired,\n    foo: PropTypes.symbol({required: true}),\n    spam: PropTypes.symbol({updatable: false})\n  }\n})\n    ",name:"symbol"}]}),define("dummy/initializers/component-prop-types",["exports","ember-prop-types/initializers/component-prop-types"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return n.initialize}})}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,n){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",n.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,n,t){function o(){var e=arguments[1]||arguments[0];if(!1!==t.default.exportApplicationGlobal){var o;if("undefined"!=typeof window)o=window;else if("undefined"!=typeof global)o=global;else{if("undefined"==typeof self)return;o=self}var r,p=t.default.exportApplicationGlobal;r="string"==typeof p?p:n.default.String.classify(t.default.modulePrefix),o[r]||(o[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete o[r]}}))}}e.initialize=o,e.default={name:"export-application-global",initialize:o}}),define("dummy/resolver",["exports","ember-resolver"],function(e,n){e.default=n.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,n,t){var o=n.default.Router,r=o.extend({location:t.default.locationType,rootURL:t.default.rootURL});r.map(function(){}),e.default=r}),define("dummy/routes/application",["exports","ember","dummy/fixtures/contributors","dummy/fixtures/validators"],function(e,n,t,o){var r=n.default.Route;e.default=r.extend({model:function(){return{config:"\n'ember-prop-types': {\n  // When true components will throw an error if they are missing propTypes. (Default is false)\n  requireComponentPropTypes: true,\n\n  // Validate properties coming from a spread property (default is undefined)\n  spreadProperty: 'options',\n\n  // Throw errors instead of logging warnings (default is false)\n  throwErrors: true,\n\n  // Validate properties (default is true for all environments except \"production\")\n  validate: true,\n\n  // Validate properties when they are updated (default is false)\n  validateOnUpdate: true\n}\n",contributors:t.default,defaultsExample:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    baz: PropTypes.number,\n    foo: PropTypes.string\n  },\n\n  getDefaultProps () {\n    return {\n      baz: 1,\n      foo: 'bar'\n    }\n  }\n})\n\n",validators:o.default}}})}),define("dummy/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"8jSO2wky",block:'{"statements":[["open-element","div",[]],["static-attr","class","flex header"],["flush-element"],["text","\\n  "],["open-element","h1",[]],["flush-element"],["text","ember-prop-types"],["close-element"],["text","\\n  "],["open-element","a",[]],["static-attr","href","https://github.com/ciena-blueplanet/ember-prop-types/blob/master/LICENSE.md"],["flush-element"],["text","\\n    "],["open-element","img",[]],["static-attr","alt","MIT License"],["static-attr","src","mit-d9d55730279d560591b31d4b0aab52b2.png"],["flush-element"],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","a",[]],["static-attr","href","https://github.com/ciena-blueplanet/ember-prop-types"],["flush-element"],["text","\\n    "],["open-element","img",[]],["static-attr","alt","Github"],["static-attr","src","octocat-e020986dbdafe5c1e97be521f17a28d8.png"],["flush-element"],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n\\n"],["open-element","p",[]],["flush-element"],["text","\\n  This project aims to improve the developer experience of property management within Ember\\n  apps and addons by implementing the entire React proptype API with a few additional\\n  validators. By using "],["open-element","em",[]],["flush-element"],["text","ember-prop-types"],["close-element"],["text"," a developer is informed when a property\\n  being fed to a component is not of the expected type, as well as allows a developer to group\\n  all default property values under a single method.\\n"],["close-element"],["text","\\n\\n"],["open-element","p",[]],["flush-element"],["text","\\n  "],["open-element","em",[]],["flush-element"],["text","ember-prop-types"],["close-element"],["text"," comes with a few configuration options which can be set in "],["open-element","em",[]],["flush-element"],["text","config/environment.js"],["close-element"],["text","\\n  for all environments or specific environments. Below is an example configuration with comments as to what each\\n  option is for:\\n  "],["block",["code-block"],null,[["language"],["javascript"]],6],["text","\\n"],["close-element"],["text","\\n\\n"],["open-element","h2",[]],["flush-element"],["text","Validators"],["close-element"],["text","\\n\\n"],["open-element","div",[]],["static-attr","class","flex"],["flush-element"],["text","\\n"],["block",["each"],[["get",["model","validators"]]],null,5],["close-element"],["text","\\n\\n"],["open-element","h2",[]],["flush-element"],["text","Default Values"],["close-element"],["text","\\n\\n"],["open-element","div",[]],["static-attr","class","flex"],["flush-element"],["text","\\n  "],["open-element","section",[]],["flush-element"],["text","\\n    "],["open-element","dt",[]],["flush-element"],["text","getDefaultProps()"],["close-element"],["text","\\n    "],["open-element","dl",[]],["flush-element"],["text","Method to get default property values."],["close-element"],["text","\\n    "],["block",["code-block"],null,[["language"],["javascript"]],1],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n\\n"],["open-element","h2",[]],["flush-element"],["text","Contributors"],["close-element"],["text","\\n\\n"],["open-element","div",[]],["static-attr","class","contributors flex"],["flush-element"],["text","\\n"],["block",["each"],[["get",["model","contributors"]]],null,0],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","a",[]],["dynamic-attr","href",["helper",["concat"],["https://github.com/",["get",["contributor","username"]]],null],null],["flush-element"],["text","\\n      "],["open-element","img",[]],["dynamic-attr","alt",["unknown",["contributor","username"]],null],["dynamic-attr","src",["helper",["concat"],["https://avatars3.githubusercontent.com/u/",["get",["contributor","id"]]],null],null],["flush-element"],["close-element"],["text","\\n      "],["open-element","br",[]],["flush-element"],["close-element"],["text","\\n      "],["append",["unknown",["contributor","name"]],false],["text","\\n    "],["close-element"],["text","\\n"]],"locals":["contributor"]},{"statements":[["append",["unknown",["model","defaultsExample"]],false]],"locals":[]},{"statements":[["append",["unknown",["validator","hbs"]],false]],"locals":[]},{"statements":[["text","        "],["open-element","h4",[]],["flush-element"],["text","Consumption in Templae"],["close-element"],["text","\\n        "],["block",["code-block"],null,[["language"],["handlebars"]],2],["text","\\n"]],"locals":[]},{"statements":[["append",["unknown",["validator","example"]],false]],"locals":[]},{"statements":[["text","    "],["open-element","section",[]],["flush-element"],["text","\\n      "],["open-element","dt",[]],["flush-element"],["append",["unknown",["validator","name"]],false],["close-element"],["text","\\n      "],["open-element","dl",[]],["flush-element"],["append",["unknown",["validator","description"]],false],["close-element"],["text","\\n      "],["open-element","h4",[]],["flush-element"],["text","Component Definition"],["close-element"],["text","\\n      "],["block",["code-block"],null,[["language"],["javascript"]],4],["text","\\n"],["block",["if"],[["get",["validator","hbs"]]],null,3],["text","    "],["close-element"],["text","\\n"]],"locals":["validator"]},{"statements":[["append",["unknown",["model","config"]],false]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/templates/components/code-block",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"bZwRO0aI",block:'{"statements":[["open-element","code",[]],["dynamic-attr","class",["unknown",["languageClass"]],null],["flush-element"],["yield","default"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":["default"],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/components/code-block.hbs"}})}),define("dummy/config/environment",["ember"],function(e){try{var n="dummy/config/environment",t=document.querySelector('meta[name="'+n+'"]').getAttribute("content"),o=JSON.parse(unescape(t)),r={default:o};return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(e){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app").default.create({});