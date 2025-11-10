import {
  ActivityFlow,
  Annotation,
  AnnotationConstraints,
  AvoidLineOverlapping,
  BasicShape,
  BezierSegment,
  BezierSettings,
  BezierSmoothness,
  BlazorAction,
  BpmnActivity,
  BpmnAnnotation,
  BpmnDataObject,
  BpmnDiagrams,
  BpmnEvent,
  BpmnFlow,
  BpmnGateway,
  BpmnShape,
  BpmnSubEvent,
  BpmnSubProcess,
  BpmnTask,
  BpmnTextAnnotation,
  BpmnTransactionSubProcess,
  Canvas,
  CanvasRenderer,
  ChildArrangement,
  ChildContainer,
  ClassifierMultiplicity,
  ColumnDefinition,
  Command,
  CommandHandler,
  CommandManager,
  ComplexHierarchicalTree,
  ConnectTool,
  ConnectionDataSource,
  ConnectionPointOrigin,
  Connector,
  ConnectorBridging,
  ConnectorConstraints,
  ConnectorDrawingTool,
  ConnectorEditing,
  ConnectorFixedUserHandle,
  ConnectorProperties,
  ConnectorSegment,
  ConnectorShape,
  Container,
  ContextMenuSettings,
  ControlPointsVisibility,
  CrudAction,
  CustomCursorAction,
  DataBinding,
  DataMappingItems,
  DataSource,
  Decorator,
  Diagram,
  DiagramAction,
  DiagramConnectorSegment,
  DiagramConnectorShape,
  DiagramConstraints,
  DiagramContextMenu,
  DiagramElement,
  DiagramEvent,
  DiagramEventHandler,
  DiagramGradient,
  DiagramRenderer,
  DiagramShape,
  DiagramShapeStyle,
  DiagramTools,
  DiagramTooltip,
  Ej1Serialization,
  ElementAction,
  ExpandTool,
  FixedUserHandle,
  FixedUserHandleTool,
  FlipDirection,
  FlowShape,
  FlowchartLayout,
  FlowchartLayoutSettings,
  FreeHandTool,
  Gradient,
  GraphForceNode,
  GraphLayoutManager,
  GridCell,
  GridPanel,
  GridRow,
  Gridlines,
  GroupableView,
  Header,
  HierarchicalTree,
  Html,
  Hyperlink,
  Image,
  ImageElement,
  KeyGesture,
  KeyModifiers,
  Keys,
  LabelDragTool,
  LabelProperties,
  LabelResizeTool,
  LabelRotateTool,
  LabelTool,
  Lane,
  Layout,
  LayoutAnimation,
  LineDistribution,
  LineRouting,
  LinearGradient,
  Margin,
  Matrix,
  MatrixTypes,
  MethodArguments,
  MindMap,
  MoveTool,
  MultiplicityLabel,
  Native,
  NoOfSegments,
  Node,
  NodeConstraints,
  NodeDrawingTool,
  NodeFixedUserHandle,
  NodeProperties,
  OrthogonalSegment,
  Overview,
  Palette,
  Path,
  PathAnnotation,
  PathElement,
  PathPort,
  Phase,
  Point,
  PointPort,
  PolyLineDrawingTool,
  PolygonDrawingTool,
  Port,
  PortConstraints,
  PortProperties,
  PortVisibility,
  PrintAndExport,
  RadialGradient,
  RadialTree,
  RealAction,
  Rect,
  RelationShip,
  RenderMode,
  RendererAction,
  ResizeTool,
  RotateTool,
  RowDefinition,
  Ruler,
  ScrollActions,
  SelectTool,
  Selector,
  SelectorConstraints,
  Shadow,
  Shape,
  ShapeAnnotation,
  ShapeStyle,
  Size,
  SnapConstraints,
  SnapSettings,
  Snapping,
  StackPanel,
  Stop,
  StraightSegment,
  StrokeStyle,
  SwimLane,
  SymbolDragSize,
  SymbolPalette,
  SymbolPaletteInfo,
  SymbolPreview,
  SymbolSize,
  SymmetricLayout,
  Text,
  TextDrawingTool,
  TextElement,
  TextStyle,
  Thickness,
  ThumbsConstraints,
  ToolBase,
  Transform,
  UmlActivityShape,
  UmlClass,
  UmlClassAttribute,
  UmlClassMethod,
  UmlClassifierShape,
  UmlEnumeration,
  UmlEnumerationMember,
  UmlInterface,
  UmlSequenceActivationBox,
  UmlSequenceDiagram,
  UmlSequenceFragment,
  UmlSequenceFragmentCondition,
  UmlSequenceFragmentType,
  UmlSequenceMessage,
  UmlSequenceMessageType,
  UmlSequenceParticipant,
  UndoRedo,
  UserHandle,
  Vector,
  ZoomPanTool,
  addChildToContainer,
  alignChildBasedOnaPoint,
  alignElement,
  alignLabelOnSegments,
  arrangeChild,
  attributes,
  bBoxText,
  bezierPoints,
  canMeasureDecoratorPath,
  canResizeCorner,
  canShowControlPoints,
  canShowCorner,
  changeOldFlipDirectionType,
  checkBrowserInfo,
  checkChildNodeInContainer,
  checkParentAsContainer,
  checkPort,
  checkPortRestriction,
  cloneArray,
  cloneBlazorObject,
  cloneObject,
  cloneSelectedObjects,
  completeRegion,
  contains,
  containsBounds,
  contextMenuBeforeItemRender,
  contextMenuClick,
  contextMenuOpen,
  cornersPointsBeforeRotation,
  createElement,
  createHelper,
  deserialize,
  extendArray,
  extendObject,
  findAngle,
  findAnnotation,
  findBounds,
  findConnectorPoints,
  findDistance,
  findMargin,
  findNearestPoint,
  findNodeByName,
  findObjectIndex,
  findObjectType,
  findParentInSwimlane,
  findPath,
  findPoint,
  findPort,
  findPortIndex,
  findPortToolToActivate,
  findToolToActivate,
  flipConnector,
  getAlignedPosition,
  getAlignedPositionForPorts,
  getAnnotationPosition,
  getBasicShape,
  getBezierBounds,
  getBezierDirection,
  getBezierPoints,
  getBounds,
  getBpmnGatewayShapePathData,
  getBpmnLoopShapePathData,
  getBpmnShapePathData,
  getBpmnTaskShapePathData,
  getBpmnTriggerShapePathData,
  getChild,
  getCollectionChangeEventArguements,
  getConnectorArrowType,
  getConnectorDirection,
  getCursor,
  getDecoratorShape,
  getDirection,
  getDropEventArguements,
  getElement,
  getFlippedPoint,
  getFlowShape,
  getFreeHandPath,
  getFunction,
  getIconShape,
  getInOutConnectPorts,
  getIndex,
  getInternalProperties,
  getIntersection,
  getIntersectionPoints,
  getInterval,
  getLineSegment,
  getObjectFromCollection,
  getObjectType,
  getOffset,
  getOffsetOfConnector,
  getOffsetOfPorts,
  getOppositeDirection,
  getOuterBounds,
  getPathOffset,
  getPathString,
  getPoint,
  getPoints,
  getPolygonPath,
  getPortDirection,
  getPortShape,
  getPortsPosition,
  getPreviewSize,
  getRectanglePath,
  getSegmentThumbShapeHorizontal,
  getSegmentThumbShapeVertical,
  getSpaceValue,
  getString,
  getSwimLaneChildren,
  getSymbolSize,
  getTemplateEngine,
  getTooltipOffset,
  getUMLActivityShapes,
  getUMLFinalNode,
  getUserHandlePosition,
  getValue,
  groupHasType,
  hasSelection,
  hasSingleConnection,
  identityMatrix,
  initFixedUserHandlesSymbol,
  initTooltip,
  insertObject,
  intersect2,
  intersect3,
  isDiagramChild,
  isEmptyVector,
  isLabelFlipped,
  isNullOrUndefined,
  isObject,
  isPointOverConnector,
  isSelected,
  isUndefined,
  menuClass,
  middleElement,
  moveChildInStack,
  multiplyMatrix,
  orthoConnection2Segment,
  overFlow,
  parsePathData,
  pathSegmentCollection,
  processPathData,
  randomId,
  removeChildInContainer,
  removeChildNodes,
  removeGradient,
  removeItem,
  removeUnnecessaryNodes,
  renderContainerHelper,
  renderStackHighlighter,
  rotateAfterFlip,
  rotateMatrix,
  rotatePoint,
  rotateSize,
  scaleElement,
  scaleMatrix,
  scalePathData,
  selectionHasConnector,
  serialize,
  setConnectorDefaults,
  setPortsEdges,
  setSwimLaneDefaults,
  setTemplateEngine,
  setUMLActivityDefaults,
  setValue,
  sort,
  sortNodeCollection,
  splitArrayCollection,
  swapBounds,
  templateCompiler,
  textAlignToString,
  transformPath,
  transformPointByMatrix,
  transformPointsByMatrix,
  translateMatrix,
  updateCanvasBounds,
  updateConnector,
  updateContent,
  updateDefaultValues,
  updateHyperlink,
  updateLaneBoundsAfterAddChild,
  updateLaneBoundsWithSelector,
  updateLayoutValue,
  updatePathElement,
  updatePortEdges,
  updateScrollSettingsOffset,
  updateShape,
  updateShapeContent,
  updateStyle,
  updateTooltip,
  updateUmlActivityNode,
  updateZindex,
  updatedSegment,
  upgrade,
  whiteSpaceToString,
  wordBreakToString
} from "./chunk-PKNTWWLD.js";
import {
  CommonModule
} from "./chunk-XJMCVQ3E.js";
import "./chunk-NXEEZTHS.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Injector,
  NgModule,
  Renderer2,
  ViewContainerRef,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵloadQuery,
  ɵɵqueryRefresh
} from "./chunk-NSPYTIWK.js";
import {
  __decorate
} from "./chunk-HKGWJUTY.js";
import "./chunk-7GOANPIK.js";

// node_modules/@syncfusion/ej2-angular-base/src/util.js
function applyMixins(derivedClass, baseClass) {
  baseClass.forEach(function(baseClass2) {
    Object.getOwnPropertyNames(baseClass2.prototype).forEach(function(name) {
      if (!Object.prototype.hasOwnProperty.call(derivedClass.prototype, name) || baseClass2.isFormBase && name !== "constructor") {
        derivedClass.prototype["".concat(name)] = baseClass2.prototype["".concat(name)];
      }
    });
  });
}
function ComponentMixins(baseClass) {
  return function(derivedClass) {
    applyMixins(derivedClass, baseClass);
  };
}
function registerEvents(eventList, obj, direct) {
  var ngEventsEmitter = {};
  if (eventList && eventList.length) {
    for (var _i = 0, eventList_1 = eventList; _i < eventList_1.length; _i++) {
      var event_1 = eventList_1[_i];
      if (direct === true) {
        obj.propCollection["".concat(event_1)] = new EventEmitter(false);
        obj["".concat(event_1)] = obj.propCollection["".concat(event_1)];
      } else {
        ngEventsEmitter["".concat(event_1)] = new EventEmitter(false);
      }
    }
    if (direct !== true) {
      obj.setProperties(ngEventsEmitter, true);
    }
  }
}
function clearTemplate(_this, templateNames, index) {
  var _a;
  var regTemplates = Object.keys(_this.registeredTemplate);
  if (regTemplates.length) {
    var regProperties = templateNames && templateNames.filter(function(val) {
      return /\./g.test(val) ? false : true;
    });
    var tabaccordionTemp = /tab|accordion|toolbar/.test((_a = _this.getModuleName) === null || _a === void 0 ? void 0 : _a.call(_this));
    for (var _i = 0, _b = regProperties && regProperties || regTemplates; _i < _b.length; _i++) {
      var registeredTemplate = _b[_i];
      if (index && index.length) {
        for (var e = 0; e < index.length; e++) {
          if (tabaccordionTemp) {
            for (var m = 0; m < _this.registeredTemplate["".concat(registeredTemplate)].length; m++) {
              var value = _this.registeredTemplate["".concat(registeredTemplate)][parseInt(m.toString(), 10)];
              if (value && value === index["".concat(e)]) {
                value.destroy();
                _this.registeredTemplate["".concat(registeredTemplate)].splice(m, 1);
              }
            }
          } else {
            for (var m = 0; m < _this.registeredTemplate.template.length; m++) {
              var value = _this.registeredTemplate.template[parseInt(m.toString(), 10)].rootNodes[0];
              if (value === index["".concat(e)]) {
                var rt = _this.registeredTemplate["".concat(registeredTemplate)];
                rt[parseInt(m.toString(), 10)].destroy();
              }
            }
          }
        }
      } else {
        if (_this.registeredTemplate["".concat(registeredTemplate)]) {
          for (var _c = 0, _d = _this.registeredTemplate["".concat(registeredTemplate)]; _c < _d.length; _c++) {
            var rt = _d[_c];
            if (!rt.destroyed) {
              if (rt._view) {
                var pNode = rt._view.renderer.parentNode(rt.rootNodes[0]);
                if (!isNullOrUndefined(pNode)) {
                  for (var m = 0; m < rt.rootNodes.length; m++) {
                    pNode.appendChild(rt.rootNodes[parseInt(m.toString(), 10)]);
                  }
                }
              }
              rt.destroy();
            }
          }
        }
      }
      if (!tabaccordionTemp || !index) {
        delete _this.registeredTemplate["".concat(registeredTemplate)];
      }
    }
  }
  var _loop_1 = function(tagObject2) {
    if (tagObject2.instance) {
      tagObject2.instance.clearTemplate(templateNames && templateNames.filter(function(val) {
        var regExp = RegExp;
        return new regExp(tagObject2.name).test(val) ? true : false;
      }));
    }
  };
  for (var _e = 0, _f = _this.tagObjects; _e < _f.length; _e++) {
    var tagObject = _f[_e];
    _loop_1(tagObject);
  }
}
function setValue2(nameSpace, value, object) {
  var keys = nameSpace.replace(/\[/g, ".").replace(/\]/g, "").split(".");
  var fromObj = object || {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[parseInt(i.toString(), 10)];
    if (i + 1 === keys.length) {
      fromObj["".concat(key)] = value === void 0 ? {} : value;
    } else if (fromObj["".concat(key)] === void 0) {
      fromObj["".concat(key)] = {};
    }
    fromObj = fromObj["".concat(key)];
  }
  return fromObj;
}

// node_modules/@syncfusion/ej2-angular-base/src/complex-array-base.js
var refRegex = /Ref$/;
var ComplexBase = (
  /** @class */
  function() {
    function ComplexBase2() {
      this.hasChanges = false;
      this.propCollection = {};
      this.dataSource = {};
      this.tags = [];
      this.tagObjects = [];
    }
    ComplexBase2.prototype.ngOnInit = function() {
      this.registeredTemplate = {};
      for (var _i = 0, _a = this.tags; _i < _a.length; _i++) {
        var tag = _a[_i];
        var objInstance = getValue("child" + tag.substring(0, 1).toUpperCase() + tag.substring(1), this);
        if (objInstance) {
          this.tagObjects.push({
            instance: objInstance,
            name: tag
          });
        }
      }
      var templateProperties = Object.keys(this);
      for (var i = 0; i < templateProperties.length; i++) {
        var tempProp = getValue(templateProperties[parseInt(i.toString(), 10)], this);
        if (typeof tempProp === "object" && tempProp && tempProp.elementRef) {
          if (!getValue(templateProperties[parseInt(i.toString(), 10)].indexOf("Ref") !== -1 ? templateProperties[parseInt(i.toString(), 10)] : templateProperties[parseInt(i.toString(), 10)] + "Ref", this)) {
            setValue(templateProperties[parseInt(i.toString(), 10)].indexOf("Ref") !== -1 ? templateProperties[parseInt(i.toString(), 10)] : templateProperties[parseInt(i.toString(), 10)] + "Ref", tempProp, this);
          }
          if (getValue("viewContainerRef", this) && !getValue("_viewContainerRef", tempProp.elementRef.nativeElement) && !getValue("propName", tempProp.elementRef.nativeElement)) {
            setValue("_viewContainerRef", getValue("viewContainerRef", this), tempProp.elementRef.nativeElement);
            setValue("propName", templateProperties[parseInt(i.toString(), 10)].replace("Ref", ""), tempProp.elementRef.nativeElement);
          }
        }
      }
      templateProperties = Object.keys(this);
      templateProperties = templateProperties.filter(function(val) {
        return /Ref$/i.test(val);
      });
      for (var _b = 0, templateProperties_1 = templateProperties; _b < templateProperties_1.length; _b++) {
        var tempName = templateProperties_1[_b];
        var propName = tempName.replace("Ref", "");
        setValue(propName.replace("_", "."), getValue(propName, this), this.propCollection);
      }
      var propList = Object.keys(this);
      if (this.directivePropList) {
        for (var k = 0; k < this.directivePropList.length; k++) {
          var dirPropName = this.directivePropList[parseInt(k.toString(), 10)];
          if (propList.indexOf(dirPropName) !== -1 && (getValue(dirPropName, this) === false || getValue(dirPropName, this))) {
            setValue(dirPropName, getValue(dirPropName, this), this.propCollection);
          }
        }
        this.hasChanges = true;
      }
      this.isInitChanges = true;
    };
    ComplexBase2.prototype.registerEvents = function(eventList) {
      registerEvents(eventList, this, true);
    };
    ComplexBase2.prototype.ngOnChanges = function(changes) {
      for (var _i = 0, _a = Object.keys(changes); _i < _a.length; _i++) {
        var propName = _a[_i];
        var changedVal = changes["".concat(propName)];
        this.propCollection["".concat(propName)] = changedVal.currentValue;
      }
      this.isUpdated = false;
      this.hasChanges = true;
    };
    ComplexBase2.prototype.clearTemplate = function(templateNames) {
      clearTemplate(this, templateNames);
    };
    ComplexBase2.prototype.getProperties = function() {
      for (var _i = 0, _a = this.tagObjects; _i < _a.length; _i++) {
        var tagObject = _a[_i];
        this.propCollection[tagObject.name] = tagObject.instance.getProperties();
      }
      return this.propCollection;
    };
    ComplexBase2.prototype.isChanged = function() {
      var result = this.hasChanges;
      if (!isNullOrUndefined(this.propCollection[this.property])) {
        var tempProps = this.propCollection[this.property];
        var props = Object.keys(tempProps[0]);
        for (var d = 0; d < props.length; d++) {
          if (!isNullOrUndefined(this.propCollection[props[parseInt(d.toString(), 10)]])) {
            var val = getValue(props[parseInt(d.toString(), 10)], this);
            var propVal = this.propCollection[this.property][0][props[parseInt(d.toString(), 10)]];
            if (!isNullOrUndefined(val) && this.propCollection[props[parseInt(d.toString(), 10)]] !== val && propVal !== val) {
              setValue(props[parseInt(d.toString(), 10)], val, this.propCollection[this.property][0]);
              setValue(props[parseInt(d.toString(), 10)], val, this.propCollection);
              this.hasChanges = true;
              this.isUpdated = false;
            }
          }
        }
      }
      for (var _i = 0, _a = this.tagObjects; _i < _a.length; _i++) {
        var item = _a[_i];
        result = result || item.instance.hasChanges;
      }
      return result || this.hasChanges;
    };
    ComplexBase2.prototype.ngAfterContentChecked = function() {
      this.hasChanges = this.isChanged();
      if (this.isInitChanges || this.hasChanges) {
        var templateProperties = Object.keys(this);
        templateProperties = templateProperties.filter(function(val) {
          return refRegex.test(val);
        });
        for (var _i = 0, templateProperties_2 = templateProperties; _i < templateProperties_2.length; _i++) {
          var tempName = templateProperties_2[_i];
          var propName = tempName.replace("Ref", "");
          setValue(propName.replace("_", "."), getValue(propName, this), this.propCollection);
        }
      }
    };
    ComplexBase2.prototype.ngAfterViewChecked = function() {
      if (this.isUpdated) {
        this.hasChanges = false;
      }
    };
    ComplexBase2.prototype.ngAfterViewInit = function() {
      this.isInitChanges = false;
    };
    ComplexBase2.prototype.ngOnDestroy = function() {
      this.directivePropList = [];
    };
    return ComplexBase2;
  }()
);
var ArrayBase = (
  /** @class */
  function() {
    function ArrayBase2(propertyName) {
      this.list = [];
      this.hasChanges = false;
      this.propertyName = propertyName;
    }
    ArrayBase2.prototype.ngOnInit = function() {
      this.isInitChanges = true;
    };
    ArrayBase2.prototype.ngAfterContentInit = function() {
      var _this = this;
      var index = 0;
      this.list = this.children.map(function(child) {
        child.dirIndex = index++;
        child.property = _this.propertyName;
        return child;
      });
      this.hasChanges = true;
    };
    ArrayBase2.prototype.getProperties = function() {
      var onlyProp = [];
      for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
        var item = _a[_i];
        onlyProp.push(item.getProperties());
      }
      return onlyProp;
    };
    ArrayBase2.prototype.isChanged = function() {
      var _this = this;
      var result = false;
      var index = 0;
      var isSourceChanged = false;
      var childrenDataSource = this.children.map(function(child) {
        return child;
      });
      if (this.list.length === this.children.length) {
        for (var i = 0; i < this.list.length; i++) {
          if (this.list[parseInt(i.toString(), 10)].propCollection.dataSource) {
            if (this.list[parseInt(i.toString(), 10)].dataSource && this.list[parseInt(i.toString(), 10)].propCollection.dataSource !== this.list[parseInt(i.toString(), 10)].dataSource) {
              this.list[parseInt(i.toString(), 10)].propCollection.dataSource = this.list[parseInt(i.toString(), 10)].dataSource;
              this.list[parseInt(i.toString(), 10)].hasChanges = true;
            }
            if (this.list[parseInt(i.toString(), 10)].property !== "series") {
              isSourceChanged = JSON.stringify(this.list[parseInt(i.toString(), 10)].propCollection.dataSource) !== JSON.stringify(childrenDataSource[parseInt(i.toString(), 10)].propCollection.dataSource);
            }
          }
          isSourceChanged = this.list[parseInt(i.toString(), 10)].hasChanges !== childrenDataSource[parseInt(i.toString(), 10)].hasChanges;
        }
      }
      this.hasNewChildren = this.list.length !== this.children.length || isSourceChanged ? true : null;
      if (this.hasNewChildren) {
        this.list = this.children.map(function(child) {
          child.dirIndex = index++;
          child.property = _this.propertyName;
          return child;
        });
      }
      for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
        var item = _a[_i];
        result = result || item.hasChanges;
      }
      return !!this.list.length && result;
    };
    ArrayBase2.prototype.clearTemplate = function(templateNames) {
      var _this = this;
      for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
        var item = _a[_i];
        item.clearTemplate(templateNames && templateNames.map(function(val) {
          var regExp = RegExp;
          return new regExp(_this.propertyName).test(val) ? val.replace(_this.propertyName + ".", "") : val;
        }));
      }
    };
    ArrayBase2.prototype.ngAfterContentChecked = function() {
      this.hasChanges = this.isChanged();
      for (var i = 0; i < this.list.length; i++) {
        if (getValue("childColumns", this.list[parseInt(i.toString(), 10)]) && getValue("property", this.list[parseInt(i.toString(), 10)]) === "columns") {
          setValue("columns", getValue("childColumns", this.list[parseInt(i.toString(), 10)]).getProperties(), this.list[parseInt(i.toString(), 10)].propCollection);
        }
        this.list[parseInt(i.toString(), 10)].isUpdated = true;
      }
    };
    ArrayBase2.prototype.ngAfterViewInit = function() {
      this.isInitChanges = false;
    };
    ArrayBase2.prototype.ngOnDestroy = function() {
      this.list = [];
    };
    return ArrayBase2;
  }()
);

// node_modules/@syncfusion/ej2-angular-base/src/component-base.js
var ComponentBase = (
  /** @class */
  function() {
    function ComponentBase2() {
      this.isProtectedOnChange = true;
      this.isFormInit = true;
    }
    ComponentBase2.prototype.saveChanges = function(key, newValue, oldValue) {
      if (this.isProtectedOnChange) {
        return;
      }
      this.oldProperties["".concat(key)] = oldValue;
      this.changedProperties["".concat(key)] = newValue;
      this.finalUpdate();
      var changeTime = setTimeout(this.dataBind.bind(this));
      var clearUpdate = function() {
        clearTimeout(changeTime);
      };
      this.finalUpdate = clearUpdate;
    };
    ComponentBase2.prototype.ngOnInit = function(isTempRef) {
      var tempOnThis = isTempRef || this;
      tempOnThis.registeredTemplate = {};
      tempOnThis.ngBoundedEvents = {};
      tempOnThis.isAngular = true;
      tempOnThis.isFormInit = true;
      if (isTempRef) {
        this.tags = isTempRef.tags;
      }
      tempOnThis.tags = this.tags || [];
      tempOnThis.complexTemplate = this.complexTemplate || [];
      tempOnThis.tagObjects = [];
      tempOnThis.ngAttr = this.getAngularAttr(tempOnThis.element);
      tempOnThis.createElement = function(tagName, prop) {
        var ele = tempOnThis.srenderer ? tempOnThis.srenderer.createElement(tagName) : createElement(tagName);
        if (typeof prop === "undefined") {
          return ele;
        }
        ele.innerHTML = prop.innerHTML ? prop.innerHTML : "";
        if (prop.className !== void 0) {
          ele.className = prop.className;
        }
        if (prop.id !== void 0) {
          ele.id = prop.id;
        }
        if (prop.styles !== void 0) {
          ele.setAttribute("style", prop.styles);
        }
        if (tempOnThis.ngAttr !== void 0) {
          ele.setAttribute(tempOnThis.ngAttr, "");
        }
        if (prop.attrs !== void 0) {
          attributes(ele, prop.attrs);
        }
        return ele;
      };
      for (var _i = 0, _a = tempOnThis.tags; _i < _a.length; _i++) {
        var tag = _a[_i];
        var tagObject = {
          instance: getValue("child" + tag.substring(0, 1).toUpperCase() + tag.substring(1), tempOnThis),
          name: tag
        };
        tempOnThis.tagObjects.push(tagObject);
      }
      var complexTemplates = Object.keys(tempOnThis);
      for (var i = 0; i < complexTemplates.length; i++) {
        var compProp = getValue(complexTemplates[parseInt(i.toString(), 10)], tempOnThis);
        if (typeof compProp === "object" && compProp && compProp.elementRef) {
          if (typeof compProp === "object" && compProp && compProp.elementRef && complexTemplates[parseInt(i.toString(), 10)].indexOf("_") !== -1 && complexTemplates[parseInt(i.toString(), 10)].indexOf("Ref") === -1) {
            setValue(complexTemplates[parseInt(i.toString(), 10)] + "Ref", compProp, tempOnThis);
          }
          if (tempOnThis.viewContainerRef && !getValue("_viewContainerRef", compProp.elementRef.nativeElement) && !getValue("propName", compProp.elementRef.nativeElement)) {
            setValue("_viewContainerRef", tempOnThis.viewContainerRef, compProp.elementRef.nativeElement);
            setValue("propName", complexTemplates[parseInt(i.toString(), 10)].replace("Ref", ""), compProp.elementRef.nativeElement);
          }
        }
      }
      complexTemplates = Object.keys(tempOnThis);
      complexTemplates = complexTemplates.filter(function(val2) {
        return /Ref$/i.test(val2) && /_/i.test(val2);
      });
      for (var _b = 0, complexTemplates_1 = complexTemplates; _b < complexTemplates_1.length; _b++) {
        var tempName = complexTemplates_1[_b];
        var propName = tempName.replace("Ref", "");
        var val = {};
        setValue(propName.replace("_", "."), getValue(propName, tempOnThis), val);
        tempOnThis.setProperties(val, true);
      }
    };
    ComponentBase2.prototype.getAngularAttr = function(ele) {
      var attributes2 = ele.attributes;
      var length = attributes2.length;
      var ngAr;
      for (var i = 0; i < length; i++) {
        if (/_ngcontent/g.test(attributes2[parseInt(i.toString(), 10)].name)) {
          ngAr = attributes2[parseInt(i.toString(), 10)].name;
        }
      }
      return ngAr;
    };
    ComponentBase2.prototype.ngAfterViewInit = function(isTempRef) {
      var tempAfterViewThis = isTempRef || this;
      var regExp = /ejs-tab|ejs-accordion/g;
      if (regExp.test(tempAfterViewThis.ngEle.nativeElement.outerHTML)) {
        tempAfterViewThis.ngEle.nativeElement.style.visibility = "hidden";
      }
      var templateProperties = Object.keys(tempAfterViewThis);
      templateProperties = templateProperties.filter(function(val) {
        return /Ref$/i.test(val);
      });
      var ngtempRef = tempAfterViewThis.getModuleName() === "DocumentEditor";
      for (var _i = 0, templateProperties_1 = templateProperties; _i < templateProperties_1.length; _i++) {
        var tempName = templateProperties_1[_i];
        var propName = tempName.replace("Ref", "");
        setValue(propName.replace("_", "."), getValue(propName + "Ref", tempAfterViewThis), tempAfterViewThis);
      }
      var appendToComponent = function(tempAfterViewThis2) {
        if (typeof window !== "undefined" && tempAfterViewThis2.element) {
          tempAfterViewThis2.appendTo(tempAfterViewThis2.element);
          tempAfterViewThis2.ngEle.nativeElement.style.visibility = "";
        }
      };
      if (!ngtempRef && !tempAfterViewThis.getModuleName().includes("btn")) {
        setTimeout(function() {
          appendToComponent(tempAfterViewThis);
        });
      } else {
        appendToComponent(tempAfterViewThis);
      }
    };
    ComponentBase2.prototype.ngOnDestroy = function(isTempRef) {
      var tempOnDestroyThis = isTempRef || this;
      setTimeout(function() {
        if (typeof window !== "undefined" && tempOnDestroyThis.element.classList.contains("e-control")) {
          if (tempOnDestroyThis.ngOnFocus !== void 0 && tempOnDestroyThis.ngOnBlur !== void 0) {
            var ele = tempOnDestroyThis.inputElement || tempOnDestroyThis.element;
            ele.removeEventListener("focus", tempOnDestroyThis.ngOnFocusBound);
            ele.removeEventListener("blur", tempOnDestroyThis.ngOnBlurBound);
            tempOnDestroyThis.ngOnFocusBound = null;
            tempOnDestroyThis.ngOnBlurBound = null;
          }
          tempOnDestroyThis.destroy();
          tempOnDestroyThis.clearTemplate(null);
          setTimeout(function() {
            for (var _i = 0, _a = Object.keys(tempOnDestroyThis); _i < _a.length; _i++) {
              var key = _a[_i];
              var value = tempOnDestroyThis["".concat(key)];
              if (value && /object/.test(typeof value) && Object.keys(value).length !== 0) {
                if (/properties|changedProperties|childChangedProperties|oldProperties|moduleLoader/.test(key)) {
                  for (var _b = 0, _c = Object.keys(tempOnDestroyThis["".concat(key)]); _b < _c.length; _b++) {
                    var propKey = _c[_b];
                    var propValue = value["".concat(propKey)];
                    if (propValue && /object/.test(typeof propValue) && Object.keys(propValue).length !== 0 && (propValue.parent || propValue.parentObj)) {
                      tempOnDestroyThis["".concat(key)]["".concat(propKey)] = null;
                    }
                  }
                } else {
                  if (value.parent || value.parentObj) {
                    tempOnDestroyThis["".concat(key)] = null;
                  }
                }
              }
            }
          });
        }
      });
    };
    ComponentBase2.prototype.clearTemplate = function(templateNames, index) {
      clearTemplate(this, templateNames, index);
    };
    ComponentBase2.prototype.ngAfterContentChecked = function(isTempRef) {
      var tempAfterContentThis = isTempRef || this;
      for (var _i = 0, _a = tempAfterContentThis.tagObjects; _i < _a.length; _i++) {
        var tagObject = _a[_i];
        if (!isUndefined(tagObject.instance) && (tagObject.instance.isInitChanges || tagObject.instance.hasChanges || tagObject.instance.hasNewChildren)) {
          var propObj = {};
          if (tagObject.instance.isInitChanges) {
            var complexDirProps = void 0;
            var list = getValue("instance.list", tagObject);
            if (list && list.length) {
              complexDirProps = list[0].directivePropList;
            }
            var skip = true;
            if (tempAfterContentThis.getModuleName && tempAfterContentThis.getModuleName() === "gantt") {
              skip = false;
            }
            if (complexDirProps && skip && complexDirProps.indexOf(tagObject.instance.propertyName) === -1) {
              var compDirPropList = Object.keys(tagObject.instance.list[0].propCollection);
              for (var h = 0; h < tagObject.instance.list.length; h++) {
                tagObject.instance.list["".concat(h)].propCollection[tagObject.instance.propertyName] = [];
                var obj = {};
                for (var k = 0; k < compDirPropList.length; k++) {
                  var complexPropName = compDirPropList[parseInt(k.toString(), 10)];
                  obj["".concat(complexPropName)] = tagObject.instance.list["".concat(h)].propCollection["".concat(complexPropName)];
                }
                var _loop_1 = function(i2) {
                  var tag2 = tagObject.instance.list["".concat(h)].tags[parseInt(i2.toString(), 10)];
                  var childObj = getValue("child" + tag2.substring(0, 1).toUpperCase() + tag2.substring(1), tagObject.instance.list["".concat(h)]);
                  if (childObj) {
                    var innerchildObj = tagObject.instance.list["".concat(h)]["child" + tag2.substring(0, 1).toUpperCase() + tag2.substring(1)];
                    var updateChildTag_1 = function(innerchild) {
                      var innerLevelTag = [];
                      if (innerchild) {
                        for (var j = 0; j < innerchild.list.length; j++) {
                          var innerTag = innerchild.list[0].tags[0];
                          if (innerTag) {
                            var innerchildTag = getValue("child" + innerTag.substring(0, 1).toUpperCase() + innerTag.substring(1), innerchild.list[parseInt(j.toString(), 10)]);
                            if (innerchildTag) {
                              innerchild.list[parseInt(j.toString(), 10)].tagObjects.push({
                                instance: innerchildTag,
                                name: innerTag
                              });
                              innerLevelTag.push(innerchildTag);
                            }
                          }
                        }
                      }
                      if (innerLevelTag.length !== 0) {
                        for (var l = 0; l < innerLevelTag.length; l++) {
                          updateChildTag_1(innerLevelTag[parseInt(l.toString(), 10)]);
                        }
                      }
                    };
                    updateChildTag_1(innerchildObj);
                    tagObject.instance.list["".concat(h)].tagObjects.push({
                      instance: childObj,
                      name: tag2
                    });
                  }
                };
                for (var i = 0; i < tagObject.instance.list["".concat(h)].tags.length; i++) {
                  _loop_1(i);
                }
                tagObject.instance.list["".concat(h)].propCollection[tagObject.instance.propertyName].push(obj);
              }
            }
            propObj[tagObject.name] = tagObject.instance.getProperties();
            tempAfterContentThis.setProperties(propObj, tagObject.instance.isInitChanges);
          } else {
            var hasDiffLength = false;
            if (tempAfterContentThis[tagObject.name].length !== tagObject.instance.list.length || /diagram|DashboardLayout/.test(tempAfterContentThis.getModuleName())) {
              tempAfterContentThis[tagObject.name] = tagObject.instance.list;
              hasDiffLength = true;
            }
            for (var _b = 0, _c = tagObject.instance.list; _b < _c.length; _b++) {
              var list = _c[_b];
              if (list.tags) {
                for (var _d = 0, _e = list.tags; _d < _e.length; _d++) {
                  var tag = _e[_d];
                  var innerChild = getValue("child" + tag.substring(0, 1).toUpperCase() + tag.substring(1), list);
                  if (innerChild) {
                    list.tagObjects.push({
                      instance: innerChild,
                      name: tag
                    });
                  }
                }
              }
              var curIndex = tagObject.instance.list.indexOf(list);
              var curChild = getValue(tagObject.name, tempAfterContentThis)["".concat(curIndex)];
              var complexTemplates = Object.keys(curChild);
              complexTemplates = complexTemplates.filter(function(val) {
                return /Ref$/i.test(val);
              });
              if (curChild.properties && Object.keys(curChild.properties).length !== 0) {
                for (var _f = 0, complexTemplates_2 = complexTemplates; _f < complexTemplates_2.length; _f++) {
                  var complexPropName = complexTemplates_2[_f];
                  complexPropName = complexPropName.replace(/Ref/, "");
                  curChild.properties["".concat(complexPropName)] = !curChild.properties["".concat(complexPropName)] ? curChild.propCollection["".concat(complexPropName)] : curChild.properties["".concat(complexPropName)];
                }
              }
              if (!isUndefined(curChild) && !isUndefined(curChild.setProperties)) {
                if (/diagram|DashboardLayout/.test(tempAfterContentThis.getModuleName())) {
                  curChild.setProperties(list.getProperties(), true);
                } else {
                  curChild.setProperties(list.getProperties());
                }
              }
              list.isUpdated = true;
            }
            if (/grid/.test(tempAfterContentThis.getModuleName()) && hasDiffLength || /chart/.test(tempAfterContentThis.getModuleName())) {
              propObj[tagObject.name] = tagObject.instance.getProperties();
              tempAfterContentThis.setProperties(propObj, tagObject.instance.isInitChanges);
            }
          }
        }
      }
    };
    ComponentBase2.prototype.registerEvents = function(eventList) {
      registerEvents(eventList, this);
    };
    ComponentBase2.prototype.twoWaySetter = function(newVal, prop) {
      var oldVal = getValue(prop, this.properties);
      if (oldVal === newVal) {
        return;
      }
      this.saveChanges(prop, newVal, oldVal);
      setValue(prop, isNullOrUndefined(newVal) ? null : newVal, this.properties);
      getValue(prop + "Change", this).emit(newVal);
    };
    ComponentBase2.prototype.addTwoWay = function(propList) {
      var _this = this;
      var _loop_2 = function(prop2) {
        getValue(prop2, this_1);
        Object.defineProperty(this_1, prop2, {
          get: function() {
            return getValue(prop2, _this.properties);
          },
          set: function(newVal) {
            return _this.twoWaySetter(newVal, prop2);
          }
        });
        setValue(prop2 + "Change", new EventEmitter(), this_1);
      };
      var this_1 = this;
      for (var _i = 0, propList_1 = propList; _i < propList_1.length; _i++) {
        var prop = propList_1[_i];
        _loop_2(prop);
      }
    };
    ComponentBase2.prototype.addEventListener = function(eventName, handler) {
      var eventObj = getValue(eventName, this);
      if (!isUndefined(eventObj)) {
        if (!this.ngBoundedEvents["".concat(eventName)]) {
          this.ngBoundedEvents["".concat(eventName)] = /* @__PURE__ */ new Map();
        }
        this.ngBoundedEvents["".concat(eventName)].set(handler, eventObj.subscribe(handler));
      }
    };
    ComponentBase2.prototype.removeEventListener = function(eventName, handler) {
      var eventObj = getValue(eventName, this);
      if (!isUndefined(eventObj)) {
        this.ngBoundedEvents["".concat(eventName)].get(handler).unsubscribe();
      }
    };
    ComponentBase2.prototype.trigger = function(eventName, eventArgs, success) {
      var eventObj = getValue(eventName, this);
      var prevDetection = this.isProtectedOnChange;
      this.isProtectedOnChange = false;
      if (eventArgs) {
        eventArgs.name = eventName;
      }
      if (!isUndefined(eventObj)) {
        eventObj.next(eventArgs);
      }
      var localEventObj = getValue("local" + eventName.charAt(0).toUpperCase() + eventName.slice(1), this);
      if (!isUndefined(localEventObj)) {
        localEventObj.call(this, eventArgs);
      }
      this.isProtectedOnChange = prevDetection;
      if (success) {
        this.preventChange = this.isPreventChange;
        success.call(this, eventArgs);
      }
      this.isPreventChange = false;
    };
    return ComponentBase2;
  }()
);

// node_modules/@syncfusion/ej2-angular-base/src/form-base.js
var FormBase = (
  /** @class */
  function() {
    function FormBase2() {
    }
    FormBase2.prototype.propagateChange = function(_) {
      return;
    };
    FormBase2.prototype.propagateTouch = function() {
      return;
    };
    FormBase2.prototype.localChange = function(e) {
      var value = e.checked === void 0 ? e.value : e.checked;
      this.objCheck = isObject(value);
      if (this.isUpdated === true) {
        this.angularValue = this.oldValue;
      }
      if (this.objCheck === true) {
        this.duplicateValue = JSON.stringify(value);
        this.duplicateAngularValue = JSON.stringify(this.angularValue);
        if (this.duplicateValue !== this.duplicateAngularValue && this.propagateChange !== void 0 && value !== void 0) {
          this.propagateChange(value);
          this.angularValue = value;
        }
      } else {
        if (value !== this.angularValue && this.propagateChange !== void 0 && value !== void 0) {
          if (value !== "" && value !== null) {
            this.propagateChange(value);
            this.angularValue = value;
          } else {
            var optionalValue = value;
            this.propagateChange(optionalValue);
            this.angularValue = value;
          }
        }
      }
      this.cdr.markForCheck();
    };
    FormBase2.prototype.registerOnChange = function(registerFunction) {
      this.propagateChange = registerFunction;
    };
    FormBase2.prototype.registerOnTouched = function(registerFunction) {
      this.propagateTouch = registerFunction;
    };
    FormBase2.prototype.twoWaySetter = function(newVal, prop) {
      var oldVal = this.oldValue || getValue(prop, this.properties);
      var ele = this.inputElement || this.element;
      if (ele && oldVal === newVal && this.value === newVal && (ele.value === void 0 || ele.value === "")) {
        return;
      }
      this.saveChanges(prop, newVal, oldVal);
      setValue(prop, isNullOrUndefined(newVal) ? null : newVal, this.properties);
      getValue(prop + "Change", this).emit(newVal);
    };
    FormBase2.prototype.ngAfterViewInit = function(isTempRef) {
      var tempFormAfterViewThis = isTempRef || this;
      tempFormAfterViewThis.ngOnBlurBound = this.ngOnBlur.bind(this);
      tempFormAfterViewThis.ngOnFocusBound = this.ngOnFocus.bind(this);
      if (typeof window !== "undefined") {
        if (tempFormAfterViewThis.getModuleName().includes("dropdowntree")) {
          setTimeout(function() {
            tempFormAfterViewThis.appendTo(tempFormAfterViewThis.element);
          });
        } else {
          tempFormAfterViewThis.appendTo(tempFormAfterViewThis.element);
        }
        var ele = tempFormAfterViewThis.inputElement || tempFormAfterViewThis.element;
        ele.addEventListener("focus", tempFormAfterViewThis.ngOnFocusBound);
        ele.addEventListener("blur", tempFormAfterViewThis.ngOnBlurBound);
      }
      this.isFormInit = false;
    };
    FormBase2.prototype.setDisabledState = function(disabled) {
      this.enabled = !disabled;
      this.disabled = disabled;
    };
    FormBase2.prototype.writeValue = function(value) {
      var regExp = /ejs-radiobutton/g;
      if (this.checked === void 0) {
        this.value = value;
      } else {
        if (this.ngEle) {
          if (typeof value === "boolean") {
            if (regExp.test(this.ngEle.nativeElement.outerHTML)) {
              this.checked = value === this.value;
            } else {
              this.checked = value;
            }
          } else {
            this.checked = value === this.value;
          }
        }
      }
      var isNullValue = this.angularValue == null;
      this.angularValue = value;
      this.isUpdated = true;
      this.preventChange = this.isFormInit ? false : true;
      this.cdr.markForCheck();
      if (value === null) {
        if (isNullValue) {
          this.preventChange = false;
        }
        return;
      }
    };
    FormBase2.prototype.ngOnFocus = function(e) {
      if (this.skipFromEvent !== true) {
        this.focus.emit(e);
      }
      this.cdr.markForCheck();
    };
    FormBase2.prototype.ngOnBlur = function(e) {
      this.propagateTouch();
      if (this.skipFromEvent !== true) {
        this.blur.emit(e);
      }
      this.cdr.markForCheck();
    };
    FormBase2.isFormBase = true;
    return FormBase2;
  }()
);

// node_modules/@syncfusion/ej2-angular-base/src/template.js
var stringCompiler = getTemplateEngine();
function compile(templateEle, helper) {
  if (typeof templateEle === "string" || typeof templateEle === "function" && templateEle.prototype && templateEle.prototype.CSPTemplate) {
    return stringCompiler(templateEle, helper);
  } else {
    var contRef_1 = templateEle.elementRef.nativeElement._viewContainerRef;
    var pName_1 = templateEle.elementRef.nativeElement.propName;
    return function(data, component, propName) {
      var context = {
        $implicit: data
      };
      var conRef = contRef_1 ? contRef_1 : component.viewContainerRef;
      var viewRef = conRef.createEmbeddedView(templateEle, context);
      if (/EJS-MENTION|EJS-DROPDOWNLIST/.test(getValue("currentInstance.element.nodeName", conRef)) || /E-TABITEM/.test(getValue("element.nativeElement.nodeName", conRef)) && getValue("currentInstance.headerTemplateRef", conRef)) {
        viewRef.detectChanges();
      } else {
        viewRef.markForCheck();
      }
      var viewCollection = component && component.registeredTemplate ? component.registeredTemplate : getValue("currentInstance.registeredTemplate", conRef);
      propName = propName && component.registeredTemplate ? propName : pName_1;
      if (typeof viewCollection["".concat(propName)] === "undefined") {
        viewCollection["".concat(propName)] = [];
      }
      viewCollection["".concat(propName)].push(viewRef);
      return viewRef.rootNodes;
    };
  }
}
function Template(defaultValue) {
  return function(target, key) {
    var propertyDescriptor = {
      set: setter(key),
      get: getter(key, defaultValue),
      enumerable: true,
      configurable: true
    };
    Object.defineProperty(target, key, propertyDescriptor);
  };
}
function setter(key) {
  return function(val) {
    if (val === void 0) {
      return;
    }
    setValue(key + "Ref", val, this);
    if (typeof val !== "string" && !(typeof val === "function" && val.prototype && val.prototype.CSPTemplate)) {
      val.elementRef.nativeElement._viewContainerRef = this.viewContainerRef;
      val.elementRef.nativeElement.propName = key;
    } else {
      if (this.saveChanges) {
        this.saveChanges(key, val, void 0);
        this.dataBind();
      }
    }
  };
}
function getter(key, defaultValue) {
  return function() {
    return getValue(key + "Ref", this) || defaultValue;
  };
}
setTemplateEngine({
  compile
});

// node_modules/@syncfusion/ej2-angular-diagrams/fesm2020/syncfusion-ej2-angular-diagrams.mjs
var _c0 = ["annotationTemplate"];
var _c1 = ["nodeTemplate"];
var _c2 = ["fixedUserHandleTemplate"];
var _c3 = ["userHandleTemplate"];
var input$9 = ["addInfo", "id", "lock", "objects", "visible", "zIndex"];
var outputs$c = [];
var LayerDirective = class extends ComplexBase {
  constructor(viewContainerRef) {
    super();
    this.viewContainerRef = viewContainerRef;
    setValue2("currentInstance", this, this.viewContainerRef);
    this.registerEvents(outputs$c);
    this.directivePropList = input$9;
  }
};
LayerDirective.ɵfac = function LayerDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || LayerDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
LayerDirective.ɵdir = ɵɵdefineDirective({
  type: LayerDirective,
  selectors: [["e-layer"]],
  inputs: {
    addInfo: "addInfo",
    id: "id",
    lock: "lock",
    objects: "objects",
    visible: "visible",
    zIndex: "zIndex"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayerDirective, [{
    type: Directive,
    args: [{
      selector: "e-layers>e-layer",
      inputs: input$9,
      outputs: outputs$c,
      queries: {}
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, null);
})();
var LayersDirective = class extends ArrayBase {
  constructor() {
    super("layers");
  }
};
LayersDirective.ɵfac = function LayersDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || LayersDirective)();
};
LayersDirective.ɵdir = ɵɵdefineDirective({
  type: LayersDirective,
  selectors: [["e-layers"]],
  contentQueries: function LayersDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, LayerDirective, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
    }
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayersDirective, [{
    type: Directive,
    args: [{
      selector: "ej-diagram>e-layers",
      queries: {
        children: new ContentChildren(LayerDirective)
      }
    }]
  }], function() {
    return [];
  }, null);
})();
var input$8 = ["action", "cursor"];
var outputs$b = [];
var CustomCursorDirective = class extends ComplexBase {
  constructor(viewContainerRef) {
    super();
    this.viewContainerRef = viewContainerRef;
    setValue2("currentInstance", this, this.viewContainerRef);
    this.registerEvents(outputs$b);
    this.directivePropList = input$8;
  }
};
CustomCursorDirective.ɵfac = function CustomCursorDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CustomCursorDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
CustomCursorDirective.ɵdir = ɵɵdefineDirective({
  type: CustomCursorDirective,
  selectors: [["e-cursormap"]],
  inputs: {
    action: "action",
    cursor: "cursor"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomCursorDirective, [{
    type: Directive,
    args: [{
      selector: "e-cursormaps>e-cursormap",
      inputs: input$8,
      outputs: outputs$b,
      queries: {}
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, null);
})();
var CustomCursorsDirective = class extends ArrayBase {
  constructor() {
    super("customcursor");
  }
};
CustomCursorsDirective.ɵfac = function CustomCursorsDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CustomCursorsDirective)();
};
CustomCursorsDirective.ɵdir = ɵɵdefineDirective({
  type: CustomCursorsDirective,
  selectors: [["e-cursormaps"]],
  contentQueries: function CustomCursorsDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, CustomCursorDirective, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
    }
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomCursorsDirective, [{
    type: Directive,
    args: [{
      selector: "ej-diagram>e-cursormaps",
      queries: {
        children: new ContentChildren(CustomCursorDirective)
      }
    }]
  }], function() {
    return [];
  }, null);
})();
var input$7 = ["alignment", "cornerRadius", "displacement", "fill", "handleStrokeColor", "handleStrokeWidth", "height", "iconStrokeColor", "iconStrokeWidth", "id", "offset", "padding", "pathData", "tooltip", "visibility", "width"];
var outputs$a = [];
var ConnectorFixedUserHandleDirective = class extends ComplexBase {
  constructor(viewContainerRef) {
    super();
    this.viewContainerRef = viewContainerRef;
    setValue2("currentInstance", this, this.viewContainerRef);
    this.registerEvents(outputs$a);
    this.directivePropList = input$7;
  }
};
ConnectorFixedUserHandleDirective.ɵfac = function ConnectorFixedUserHandleDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ConnectorFixedUserHandleDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
ConnectorFixedUserHandleDirective.ɵdir = ɵɵdefineDirective({
  type: ConnectorFixedUserHandleDirective,
  selectors: [["e-connector-fixeduserhandle"]],
  inputs: {
    alignment: "alignment",
    cornerRadius: "cornerRadius",
    displacement: "displacement",
    fill: "fill",
    handleStrokeColor: "handleStrokeColor",
    handleStrokeWidth: "handleStrokeWidth",
    height: "height",
    iconStrokeColor: "iconStrokeColor",
    iconStrokeWidth: "iconStrokeWidth",
    id: "id",
    offset: "offset",
    padding: "padding",
    pathData: "pathData",
    tooltip: "tooltip",
    visibility: "visibility",
    width: "width"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConnectorFixedUserHandleDirective, [{
    type: Directive,
    args: [{
      selector: "e-connector>e-connector-fixeduserhandles>e-connector-fixeduserhandle",
      inputs: input$7,
      outputs: outputs$a,
      queries: {}
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, null);
})();
var ConnectorFixedUserHandlesDirective = class extends ArrayBase {
  constructor() {
    super("fixeduserhandles");
  }
};
ConnectorFixedUserHandlesDirective.ɵfac = function ConnectorFixedUserHandlesDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ConnectorFixedUserHandlesDirective)();
};
ConnectorFixedUserHandlesDirective.ɵdir = ɵɵdefineDirective({
  type: ConnectorFixedUserHandlesDirective,
  selectors: [["e-connector-fixeduserhandles"]],
  contentQueries: function ConnectorFixedUserHandlesDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ConnectorFixedUserHandleDirective, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
    }
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConnectorFixedUserHandlesDirective, [{
    type: Directive,
    args: [{
      selector: "e-connector>e-connector-fixeduserhandles",
      queries: {
        children: new ContentChildren(ConnectorFixedUserHandleDirective)
      }
    }]
  }], function() {
    return [];
  }, null);
})();
var input$6 = ["addInfo", "alignment", "annotationType", "constraints", "content", "displacement", "dragLimit", "height", "horizontalAlignment", "hyperlink", "id", "margin", "offset", "rotateAngle", "rotationReference", "segmentAngle", "style", "template", "tooltip", "type", "verticalAlignment", "visibility", "width"];
var outputs$9 = [];
var ConnectorAnnotationDirective = class extends ComplexBase {
  constructor(viewContainerRef) {
    super();
    this.viewContainerRef = viewContainerRef;
    setValue2("currentInstance", this, this.viewContainerRef);
    this.registerEvents(outputs$9);
    this.directivePropList = input$6;
  }
};
ConnectorAnnotationDirective.ɵfac = function ConnectorAnnotationDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ConnectorAnnotationDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
ConnectorAnnotationDirective.ɵdir = ɵɵdefineDirective({
  type: ConnectorAnnotationDirective,
  selectors: [["e-connector-annotation"]],
  inputs: {
    addInfo: "addInfo",
    alignment: "alignment",
    annotationType: "annotationType",
    constraints: "constraints",
    content: "content",
    displacement: "displacement",
    dragLimit: "dragLimit",
    height: "height",
    horizontalAlignment: "horizontalAlignment",
    hyperlink: "hyperlink",
    id: "id",
    margin: "margin",
    offset: "offset",
    rotateAngle: "rotateAngle",
    rotationReference: "rotationReference",
    segmentAngle: "segmentAngle",
    style: "style",
    template: "template",
    tooltip: "tooltip",
    type: "type",
    verticalAlignment: "verticalAlignment",
    visibility: "visibility",
    width: "width"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConnectorAnnotationDirective, [{
    type: Directive,
    args: [{
      selector: "e-connector>e-connector-annotations>e-connector-annotation",
      inputs: input$6,
      outputs: outputs$9,
      queries: {}
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, null);
})();
var ConnectorAnnotationsDirective = class extends ArrayBase {
  constructor() {
    super("annotations");
  }
};
ConnectorAnnotationsDirective.ɵfac = function ConnectorAnnotationsDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ConnectorAnnotationsDirective)();
};
ConnectorAnnotationsDirective.ɵdir = ɵɵdefineDirective({
  type: ConnectorAnnotationsDirective,
  selectors: [["e-connector-annotations"]],
  contentQueries: function ConnectorAnnotationsDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ConnectorAnnotationDirective, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
    }
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConnectorAnnotationsDirective, [{
    type: Directive,
    args: [{
      selector: "e-connector>e-connector-annotations",
      queries: {
        children: new ContentChildren(ConnectorAnnotationDirective)
      }
    }]
  }], function() {
    return [];
  }, null);
})();
var input$5 = ["addInfo", "allowNodeOverlap", "annotations", "bezierSettings", "bridgeSpace", "connectionPadding", "connectorSpacing", "constraints", "cornerRadius", "dragSize", "excludeFromLayout", "fixedUserHandles", "flip", "flipMode", "hitPadding", "id", "margin", "maxSegmentThumb", "ports", "previewSize", "segmentThumbShape", "segmentThumbSize", "segments", "shape", "sourceDecorator", "sourceID", "sourcePadding", "sourcePoint", "sourcePortID", "style", "symbolInfo", "targetDecorator", "targetID", "targetPadding", "targetPoint", "targetPortID", "tooltip", "type", "visible", "wrapper", "zIndex"];
var outputs$8 = [];
var ConnectorDirective = class extends ComplexBase {
  constructor(viewContainerRef) {
    super();
    this.viewContainerRef = viewContainerRef;
    this.tags = ["fixedUserHandles", "annotations"];
    setValue2("currentInstance", this, this.viewContainerRef);
    this.registerEvents(outputs$8);
    this.directivePropList = input$5;
  }
};
ConnectorDirective.ɵfac = function ConnectorDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ConnectorDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
ConnectorDirective.ɵdir = ɵɵdefineDirective({
  type: ConnectorDirective,
  selectors: [["e-connector"]],
  contentQueries: function ConnectorDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ConnectorFixedUserHandlesDirective, 5);
      ɵɵcontentQuery(dirIndex, ConnectorAnnotationsDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.childFixedUserHandles = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.childAnnotations = _t.first);
    }
  },
  inputs: {
    addInfo: "addInfo",
    allowNodeOverlap: "allowNodeOverlap",
    annotations: "annotations",
    bezierSettings: "bezierSettings",
    bridgeSpace: "bridgeSpace",
    connectionPadding: "connectionPadding",
    connectorSpacing: "connectorSpacing",
    constraints: "constraints",
    cornerRadius: "cornerRadius",
    dragSize: "dragSize",
    excludeFromLayout: "excludeFromLayout",
    fixedUserHandles: "fixedUserHandles",
    flip: "flip",
    flipMode: "flipMode",
    hitPadding: "hitPadding",
    id: "id",
    margin: "margin",
    maxSegmentThumb: "maxSegmentThumb",
    ports: "ports",
    previewSize: "previewSize",
    segmentThumbShape: "segmentThumbShape",
    segmentThumbSize: "segmentThumbSize",
    segments: "segments",
    shape: "shape",
    sourceDecorator: "sourceDecorator",
    sourceID: "sourceID",
    sourcePadding: "sourcePadding",
    sourcePoint: "sourcePoint",
    sourcePortID: "sourcePortID",
    style: "style",
    symbolInfo: "symbolInfo",
    targetDecorator: "targetDecorator",
    targetID: "targetID",
    targetPadding: "targetPadding",
    targetPoint: "targetPoint",
    targetPortID: "targetPortID",
    tooltip: "tooltip",
    type: "type",
    visible: "visible",
    wrapper: "wrapper",
    zIndex: "zIndex"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConnectorDirective, [{
    type: Directive,
    args: [{
      selector: "e-connectors>e-connector",
      inputs: input$5,
      outputs: outputs$8,
      queries: {
        childFixedUserHandles: new ContentChild(ConnectorFixedUserHandlesDirective),
        childAnnotations: new ContentChild(ConnectorAnnotationsDirective)
      }
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, null);
})();
var ConnectorsDirective = class extends ArrayBase {
  constructor() {
    super("connectors");
  }
};
ConnectorsDirective.ɵfac = function ConnectorsDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ConnectorsDirective)();
};
ConnectorsDirective.ɵdir = ɵɵdefineDirective({
  type: ConnectorsDirective,
  selectors: [["e-connectors"]],
  contentQueries: function ConnectorsDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ConnectorDirective, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
    }
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConnectorsDirective, [{
    type: Directive,
    args: [{
      selector: "ej-diagram>e-connectors",
      queries: {
        children: new ContentChildren(ConnectorDirective)
      }
    }]
  }], function() {
    return [];
  }, null);
})();
var input$4 = ["cornerRadius", "fill", "handleStrokeColor", "handleStrokeWidth", "height", "iconStrokeColor", "iconStrokeWidth", "id", "margin", "offset", "padding", "pathData", "tooltip", "visibility", "width"];
var outputs$7 = [];
var NodeFixedUserHandleDirective = class extends ComplexBase {
  constructor(viewContainerRef) {
    super();
    this.viewContainerRef = viewContainerRef;
    setValue2("currentInstance", this, this.viewContainerRef);
    this.registerEvents(outputs$7);
    this.directivePropList = input$4;
  }
};
NodeFixedUserHandleDirective.ɵfac = function NodeFixedUserHandleDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NodeFixedUserHandleDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
NodeFixedUserHandleDirective.ɵdir = ɵɵdefineDirective({
  type: NodeFixedUserHandleDirective,
  selectors: [["e-node-fixeduserhandle"]],
  inputs: {
    cornerRadius: "cornerRadius",
    fill: "fill",
    handleStrokeColor: "handleStrokeColor",
    handleStrokeWidth: "handleStrokeWidth",
    height: "height",
    iconStrokeColor: "iconStrokeColor",
    iconStrokeWidth: "iconStrokeWidth",
    id: "id",
    margin: "margin",
    offset: "offset",
    padding: "padding",
    pathData: "pathData",
    tooltip: "tooltip",
    visibility: "visibility",
    width: "width"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NodeFixedUserHandleDirective, [{
    type: Directive,
    args: [{
      selector: "e-node>e-node-fixeduserhandles>e-node-fixeduserhandle",
      inputs: input$4,
      outputs: outputs$7,
      queries: {}
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, null);
})();
var NodeFixedUserHandlesDirective = class extends ArrayBase {
  constructor() {
    super("fixeduserhandles");
  }
};
NodeFixedUserHandlesDirective.ɵfac = function NodeFixedUserHandlesDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NodeFixedUserHandlesDirective)();
};
NodeFixedUserHandlesDirective.ɵdir = ɵɵdefineDirective({
  type: NodeFixedUserHandlesDirective,
  selectors: [["e-node-fixeduserhandles"]],
  contentQueries: function NodeFixedUserHandlesDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NodeFixedUserHandleDirective, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
    }
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NodeFixedUserHandlesDirective, [{
    type: Directive,
    args: [{
      selector: "e-node>e-node-fixeduserhandles",
      queries: {
        children: new ContentChildren(NodeFixedUserHandleDirective)
      }
    }]
  }], function() {
    return [];
  }, null);
})();
var input$3 = ["addInfo", "annotationType", "constraints", "content", "dragLimit", "height", "horizontalAlignment", "hyperlink", "id", "margin", "offset", "rotateAngle", "rotationReference", "style", "template", "tooltip", "type", "verticalAlignment", "visibility", "width"];
var outputs$6 = [];
var NodeAnnotationDirective = class extends ComplexBase {
  constructor(viewContainerRef) {
    super();
    this.viewContainerRef = viewContainerRef;
    setValue2("currentInstance", this, this.viewContainerRef);
    this.registerEvents(outputs$6);
    this.directivePropList = input$3;
  }
};
NodeAnnotationDirective.ɵfac = function NodeAnnotationDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NodeAnnotationDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
NodeAnnotationDirective.ɵdir = ɵɵdefineDirective({
  type: NodeAnnotationDirective,
  selectors: [["e-node-annotation"]],
  inputs: {
    addInfo: "addInfo",
    annotationType: "annotationType",
    constraints: "constraints",
    content: "content",
    dragLimit: "dragLimit",
    height: "height",
    horizontalAlignment: "horizontalAlignment",
    hyperlink: "hyperlink",
    id: "id",
    margin: "margin",
    offset: "offset",
    rotateAngle: "rotateAngle",
    rotationReference: "rotationReference",
    style: "style",
    template: "template",
    tooltip: "tooltip",
    type: "type",
    verticalAlignment: "verticalAlignment",
    visibility: "visibility",
    width: "width"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NodeAnnotationDirective, [{
    type: Directive,
    args: [{
      selector: "e-node>e-node-annotations>e-node-annotation",
      inputs: input$3,
      outputs: outputs$6,
      queries: {}
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, null);
})();
var NodeAnnotationsDirective = class extends ArrayBase {
  constructor() {
    super("annotations");
  }
};
NodeAnnotationsDirective.ɵfac = function NodeAnnotationsDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NodeAnnotationsDirective)();
};
NodeAnnotationsDirective.ɵdir = ɵɵdefineDirective({
  type: NodeAnnotationsDirective,
  selectors: [["e-node-annotations"]],
  contentQueries: function NodeAnnotationsDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NodeAnnotationDirective, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
    }
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NodeAnnotationsDirective, [{
    type: Directive,
    args: [{
      selector: "e-node>e-node-annotations",
      queries: {
        children: new ContentChildren(NodeAnnotationDirective)
      }
    }]
  }], function() {
    return [];
  }, null);
})();
var input$2 = ["addInfo", "connectionDirection", "constraints", "height", "horizontalAlignment", "id", "inEdges", "margin", "offset", "outEdges", "pathData", "shape", "style", "tooltip", "verticalAlignment", "visibility", "width"];
var outputs$5 = [];
var PortDirective = class extends ComplexBase {
  constructor(viewContainerRef) {
    super();
    this.viewContainerRef = viewContainerRef;
    setValue2("currentInstance", this, this.viewContainerRef);
    this.registerEvents(outputs$5);
    this.directivePropList = input$2;
  }
};
PortDirective.ɵfac = function PortDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PortDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
PortDirective.ɵdir = ɵɵdefineDirective({
  type: PortDirective,
  selectors: [["e-node-port"]],
  inputs: {
    addInfo: "addInfo",
    connectionDirection: "connectionDirection",
    constraints: "constraints",
    height: "height",
    horizontalAlignment: "horizontalAlignment",
    id: "id",
    inEdges: "inEdges",
    margin: "margin",
    offset: "offset",
    outEdges: "outEdges",
    pathData: "pathData",
    shape: "shape",
    style: "style",
    tooltip: "tooltip",
    verticalAlignment: "verticalAlignment",
    visibility: "visibility",
    width: "width"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortDirective, [{
    type: Directive,
    args: [{
      selector: "e-node>e-node-ports>e-node-port",
      inputs: input$2,
      outputs: outputs$5,
      queries: {}
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, null);
})();
var PortsDirective = class extends ArrayBase {
  constructor() {
    super("ports");
  }
};
PortsDirective.ɵfac = function PortsDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PortsDirective)();
};
PortsDirective.ɵdir = ɵɵdefineDirective({
  type: PortsDirective,
  selectors: [["e-node-ports"]],
  contentQueries: function PortsDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PortDirective, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
    }
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortsDirective, [{
    type: Directive,
    args: [{
      selector: "e-node>e-node-ports",
      queries: {
        children: new ContentChildren(PortDirective)
      }
    }]
  }], function() {
    return [];
  }, null);
})();
var input$1 = ["addInfo", "annotations", "backgroundColor", "borderColor", "borderWidth", "branch", "children", "collapseIcon", "columnIndex", "columnSpan", "columns", "constraints", "container", "data", "dragSize", "excludeFromLayout", "expandIcon", "fixedUserHandles", "flip", "flipMode", "height", "horizontalAlignment", "id", "isExpanded", "layoutInfo", "margin", "maxHeight", "maxWidth", "minHeight", "minWidth", "offsetX", "offsetY", "padding", "pivot", "ports", "previewSize", "rotateAngle", "rowIndex", "rowSpan", "rows", "shadow", "shape", "style", "symbolInfo", "tooltip", "verticalAlignment", "visible", "width", "wrapper", "zIndex"];
var outputs$4 = [];
var NodeDirective = class extends ComplexBase {
  constructor(viewContainerRef) {
    super();
    this.viewContainerRef = viewContainerRef;
    this.tags = ["fixedUserHandles", "annotations", "ports"];
    setValue2("currentInstance", this, this.viewContainerRef);
    this.registerEvents(outputs$4);
    this.directivePropList = input$1;
  }
};
NodeDirective.ɵfac = function NodeDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NodeDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
NodeDirective.ɵdir = ɵɵdefineDirective({
  type: NodeDirective,
  selectors: [["e-node"]],
  contentQueries: function NodeDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NodeFixedUserHandlesDirective, 5);
      ɵɵcontentQuery(dirIndex, NodeAnnotationsDirective, 5);
      ɵɵcontentQuery(dirIndex, PortsDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.childFixedUserHandles = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.childAnnotations = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.childPorts = _t.first);
    }
  },
  inputs: {
    addInfo: "addInfo",
    annotations: "annotations",
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
    borderWidth: "borderWidth",
    branch: "branch",
    children: "children",
    collapseIcon: "collapseIcon",
    columnIndex: "columnIndex",
    columnSpan: "columnSpan",
    columns: "columns",
    constraints: "constraints",
    container: "container",
    data: "data",
    dragSize: "dragSize",
    excludeFromLayout: "excludeFromLayout",
    expandIcon: "expandIcon",
    fixedUserHandles: "fixedUserHandles",
    flip: "flip",
    flipMode: "flipMode",
    height: "height",
    horizontalAlignment: "horizontalAlignment",
    id: "id",
    isExpanded: "isExpanded",
    layoutInfo: "layoutInfo",
    margin: "margin",
    maxHeight: "maxHeight",
    maxWidth: "maxWidth",
    minHeight: "minHeight",
    minWidth: "minWidth",
    offsetX: "offsetX",
    offsetY: "offsetY",
    padding: "padding",
    pivot: "pivot",
    ports: "ports",
    previewSize: "previewSize",
    rotateAngle: "rotateAngle",
    rowIndex: "rowIndex",
    rowSpan: "rowSpan",
    rows: "rows",
    shadow: "shadow",
    shape: "shape",
    style: "style",
    symbolInfo: "symbolInfo",
    tooltip: "tooltip",
    verticalAlignment: "verticalAlignment",
    visible: "visible",
    width: "width",
    wrapper: "wrapper",
    zIndex: "zIndex"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NodeDirective, [{
    type: Directive,
    args: [{
      selector: "e-nodes>e-node",
      inputs: input$1,
      outputs: outputs$4,
      queries: {
        childFixedUserHandles: new ContentChild(NodeFixedUserHandlesDirective),
        childAnnotations: new ContentChild(NodeAnnotationsDirective),
        childPorts: new ContentChild(PortsDirective)
      }
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, null);
})();
var NodesDirective = class extends ArrayBase {
  constructor() {
    super("nodes");
  }
};
NodesDirective.ɵfac = function NodesDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NodesDirective)();
};
NodesDirective.ɵdir = ɵɵdefineDirective({
  type: NodesDirective,
  selectors: [["e-nodes"]],
  contentQueries: function NodesDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NodeDirective, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
    }
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NodesDirective, [{
    type: Directive,
    args: [{
      selector: "ej-diagram>e-nodes",
      queries: {
        children: new ContentChildren(NodeDirective)
      }
    }]
  }], function() {
    return [];
  }, null);
})();
var inputs$2 = ["addInfo", "annotationTemplate", "backgroundColor", "bridgeDirection", "commandManager", "connectorDefaults", "connectors", "constraints", "contextMenuSettings", "customCursor", "dataSourceSettings", "diagramSettings", "drawingObject", "enableConnectorSplit", "enablePersistence", "enableRtl", "fixedUserHandleTemplate", "getConnectorDefaults", "getCustomCursor", "getCustomProperty", "getCustomTool", "getDescription", "getNodeDefaults", "height", "historyManager", "layers", "layout", "locale", "mode", "model", "nodeDefaults", "nodeTemplate", "nodes", "pageSettings", "rulerSettings", "scrollSettings", "segmentThumbShape", "segmentThumbSize", "selectedItems", "serializationSettings", "setNodeTemplate", "snapSettings", "tool", "tooltip", "updateSelection", "userHandleTemplate", "width"];
var outputs$3 = ["animationComplete", "click", "collectionChange", "commandExecute", "connectionChange", "contextMenuBeforeItemRender", "contextMenuClick", "contextMenuOpen", "created", "dataLoaded", "doubleClick", "dragEnter", "dragLeave", "dragOver", "drop", "elementDraw", "expandStateChange", "fixedUserHandleClick", "historyChange", "historyStateChange", "keyDown", "keyUp", "layoutUpdated", "load", "loaded", "mouseEnter", "mouseLeave", "mouseOver", "mouseWheel", "onFixedUserHandleMouseDown", "onFixedUserHandleMouseEnter", "onFixedUserHandleMouseLeave", "onFixedUserHandleMouseUp", "onImageLoad", "onUserHandleMouseDown", "onUserHandleMouseEnter", "onUserHandleMouseLeave", "onUserHandleMouseUp", "positionChange", "propertyChange", "rotateChange", "scrollChange", "segmentChange", "segmentCollectionChange", "selectionChange", "sizeChange", "sourcePointChange", "targetPointChange", "textEdit"];
var twoWays$2 = [""];
var DiagramComponent = class DiagramComponent2 extends Diagram {
  constructor(ngEle, srenderer, viewContainerRef, injector) {
    super();
    this.ngEle = ngEle;
    this.srenderer = srenderer;
    this.viewContainerRef = viewContainerRef;
    this.injector = injector;
    this.tags = ["layers", "customCursor", "connectors", "nodes"];
    this.element = this.ngEle.nativeElement;
    this.injectedModules = this.injectedModules || [];
    try {
      let mod = this.injector.get("DiagramsHierarchicalTree");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("DiagramsMindMap");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("DiagramsRadialTree");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("DiagramsComplexHierarchicalTree");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("DiagramsDataBinding");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("DiagramsSnapping");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("DiagramsPrintAndExport");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("DiagramsBpmnDiagrams");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("DiagramsSymmetricLayout");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("DiagramsConnectorBridging");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("DiagramsUndoRedo");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("DiagramsLayoutAnimation");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("DiagramsDiagramContextMenu");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("DiagramsLineRouting");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("DiagramsAvoidLineOverlapping");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("DiagramsConnectorEditing");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("DiagramsLineDistribution");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("DiagramsEj1Serialization");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    try {
      let mod = this.injector.get("DiagramsFlowchartLayout");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    this.registerEvents(outputs$3);
    this.addTwoWay.call(this, twoWays$2);
    setValue2("currentInstance", this, this.viewContainerRef);
    this.context = new ComponentBase();
  }
  ngOnInit() {
    this.context.ngOnInit(this);
  }
  ngAfterViewInit() {
    this.context.ngAfterViewInit(this);
  }
  ngOnDestroy() {
    this.context.ngOnDestroy(this);
  }
  ngAfterContentChecked() {
    this.tagObjects[0].instance = this.childLayers;
    if (this.childCustomCursor) {
      this.tagObjects[1].instance = this.childCustomCursor;
    }
    if (this.childConnectors) {
      this.tagObjects[2].instance = this.childConnectors;
    }
    if (this.childNodes) {
      this.tagObjects[3].instance = this.childNodes;
    }
    this.context.ngAfterContentChecked(this);
  }
};
DiagramComponent.ɵfac = function DiagramComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DiagramComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(Injector));
};
DiagramComponent.ɵcmp = ɵɵdefineComponent({
  type: DiagramComponent,
  selectors: [["ejs-diagram"]],
  contentQueries: function DiagramComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c0, 5);
      ɵɵcontentQuery(dirIndex, _c1, 5);
      ɵɵcontentQuery(dirIndex, _c2, 5);
      ɵɵcontentQuery(dirIndex, _c3, 5);
      ɵɵcontentQuery(dirIndex, LayersDirective, 5);
      ɵɵcontentQuery(dirIndex, CustomCursorsDirective, 5);
      ɵɵcontentQuery(dirIndex, ConnectorsDirective, 5);
      ɵɵcontentQuery(dirIndex, NodesDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.annotationTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nodeTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fixedUserHandleTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.userHandleTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.childLayers = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.childCustomCursor = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.childConnectors = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.childNodes = _t.first);
    }
  },
  inputs: {
    addInfo: "addInfo",
    annotationTemplate: "annotationTemplate",
    backgroundColor: "backgroundColor",
    bridgeDirection: "bridgeDirection",
    commandManager: "commandManager",
    connectorDefaults: "connectorDefaults",
    connectors: "connectors",
    constraints: "constraints",
    contextMenuSettings: "contextMenuSettings",
    customCursor: "customCursor",
    dataSourceSettings: "dataSourceSettings",
    diagramSettings: "diagramSettings",
    drawingObject: "drawingObject",
    enableConnectorSplit: "enableConnectorSplit",
    enablePersistence: "enablePersistence",
    enableRtl: "enableRtl",
    fixedUserHandleTemplate: "fixedUserHandleTemplate",
    getConnectorDefaults: "getConnectorDefaults",
    getCustomCursor: "getCustomCursor",
    getCustomProperty: "getCustomProperty",
    getCustomTool: "getCustomTool",
    getDescription: "getDescription",
    getNodeDefaults: "getNodeDefaults",
    height: "height",
    historyManager: "historyManager",
    layers: "layers",
    layout: "layout",
    locale: "locale",
    mode: "mode",
    model: "model",
    nodeDefaults: "nodeDefaults",
    nodeTemplate: "nodeTemplate",
    nodes: "nodes",
    pageSettings: "pageSettings",
    rulerSettings: "rulerSettings",
    scrollSettings: "scrollSettings",
    segmentThumbShape: "segmentThumbShape",
    segmentThumbSize: "segmentThumbSize",
    selectedItems: "selectedItems",
    serializationSettings: "serializationSettings",
    setNodeTemplate: "setNodeTemplate",
    snapSettings: "snapSettings",
    tool: "tool",
    tooltip: "tooltip",
    updateSelection: "updateSelection",
    userHandleTemplate: "userHandleTemplate",
    width: "width"
  },
  outputs: {
    animationComplete: "animationComplete",
    click: "click",
    collectionChange: "collectionChange",
    commandExecute: "commandExecute",
    connectionChange: "connectionChange",
    contextMenuBeforeItemRender: "contextMenuBeforeItemRender",
    contextMenuClick: "contextMenuClick",
    contextMenuOpen: "contextMenuOpen",
    created: "created",
    dataLoaded: "dataLoaded",
    doubleClick: "doubleClick",
    dragEnter: "dragEnter",
    dragLeave: "dragLeave",
    dragOver: "dragOver",
    drop: "drop",
    elementDraw: "elementDraw",
    expandStateChange: "expandStateChange",
    fixedUserHandleClick: "fixedUserHandleClick",
    historyChange: "historyChange",
    historyStateChange: "historyStateChange",
    keyDown: "keyDown",
    keyUp: "keyUp",
    layoutUpdated: "layoutUpdated",
    load: "load",
    loaded: "loaded",
    mouseEnter: "mouseEnter",
    mouseLeave: "mouseLeave",
    mouseOver: "mouseOver",
    mouseWheel: "mouseWheel",
    onFixedUserHandleMouseDown: "onFixedUserHandleMouseDown",
    onFixedUserHandleMouseEnter: "onFixedUserHandleMouseEnter",
    onFixedUserHandleMouseLeave: "onFixedUserHandleMouseLeave",
    onFixedUserHandleMouseUp: "onFixedUserHandleMouseUp",
    onImageLoad: "onImageLoad",
    onUserHandleMouseDown: "onUserHandleMouseDown",
    onUserHandleMouseEnter: "onUserHandleMouseEnter",
    onUserHandleMouseLeave: "onUserHandleMouseLeave",
    onUserHandleMouseUp: "onUserHandleMouseUp",
    positionChange: "positionChange",
    propertyChange: "propertyChange",
    rotateChange: "rotateChange",
    scrollChange: "scrollChange",
    segmentChange: "segmentChange",
    segmentCollectionChange: "segmentCollectionChange",
    selectionChange: "selectionChange",
    sizeChange: "sizeChange",
    sourcePointChange: "sourcePointChange",
    targetPointChange: "targetPointChange",
    textEdit: "textEdit"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature],
  decls: 0,
  vars: 0,
  template: function DiagramComponent_Template(rf, ctx) {
  },
  encapsulation: 2,
  changeDetection: 0
});
__decorate([Template()], DiagramComponent.prototype, "annotationTemplate", void 0);
__decorate([Template()], DiagramComponent.prototype, "nodeTemplate", void 0);
__decorate([Template()], DiagramComponent.prototype, "fixedUserHandleTemplate", void 0);
__decorate([Template()], DiagramComponent.prototype, "userHandleTemplate", void 0);
DiagramComponent = __decorate([ComponentMixins([ComponentBase])], DiagramComponent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DiagramComponent, [{
    type: Component,
    args: [{
      selector: "ejs-diagram",
      inputs: inputs$2,
      outputs: outputs$3,
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      queries: {
        childLayers: new ContentChild(LayersDirective),
        childCustomCursor: new ContentChild(CustomCursorsDirective),
        childConnectors: new ContentChild(ConnectorsDirective),
        childNodes: new ContentChild(NodesDirective)
      }
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: ViewContainerRef
    }, {
      type: Injector
    }];
  }, {
    annotationTemplate: [{
      type: ContentChild,
      args: ["annotationTemplate"]
    }],
    nodeTemplate: [{
      type: ContentChild,
      args: ["nodeTemplate"]
    }],
    fixedUserHandleTemplate: [{
      type: ContentChild,
      args: ["fixedUserHandleTemplate"]
    }],
    userHandleTemplate: [{
      type: ContentChild,
      args: ["userHandleTemplate"]
    }]
  });
})();
var DiagramModule = class {
};
DiagramModule.ɵfac = function DiagramModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DiagramModule)();
};
DiagramModule.ɵmod = ɵɵdefineNgModule({
  type: DiagramModule,
  declarations: [DiagramComponent, LayerDirective, LayersDirective, CustomCursorDirective, CustomCursorsDirective, ConnectorFixedUserHandleDirective, ConnectorFixedUserHandlesDirective, ConnectorAnnotationDirective, ConnectorAnnotationsDirective, ConnectorDirective, ConnectorsDirective, NodeFixedUserHandleDirective, NodeFixedUserHandlesDirective, NodeAnnotationDirective, NodeAnnotationsDirective, PortDirective, PortsDirective, NodeDirective, NodesDirective],
  imports: [CommonModule],
  exports: [DiagramComponent, LayerDirective, LayersDirective, CustomCursorDirective, CustomCursorsDirective, ConnectorFixedUserHandleDirective, ConnectorFixedUserHandlesDirective, ConnectorAnnotationDirective, ConnectorAnnotationsDirective, ConnectorDirective, ConnectorsDirective, NodeFixedUserHandleDirective, NodeFixedUserHandlesDirective, NodeAnnotationDirective, NodeAnnotationsDirective, PortDirective, PortsDirective, NodeDirective, NodesDirective]
});
DiagramModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DiagramModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [DiagramComponent, LayerDirective, LayersDirective, CustomCursorDirective, CustomCursorsDirective, ConnectorFixedUserHandleDirective, ConnectorFixedUserHandlesDirective, ConnectorAnnotationDirective, ConnectorAnnotationsDirective, ConnectorDirective, ConnectorsDirective, NodeFixedUserHandleDirective, NodeFixedUserHandlesDirective, NodeAnnotationDirective, NodeAnnotationsDirective, PortDirective, PortsDirective, NodeDirective, NodesDirective],
      exports: [DiagramComponent, LayerDirective, LayersDirective, CustomCursorDirective, CustomCursorsDirective, ConnectorFixedUserHandleDirective, ConnectorFixedUserHandlesDirective, ConnectorAnnotationDirective, ConnectorAnnotationsDirective, ConnectorDirective, ConnectorsDirective, NodeFixedUserHandleDirective, NodeFixedUserHandlesDirective, NodeAnnotationDirective, NodeAnnotationsDirective, PortDirective, PortsDirective, NodeDirective, NodesDirective]
    }]
  }], null, null);
})();
var HierarchicalTreeService = {
  provide: "DiagramsHierarchicalTree",
  useValue: HierarchicalTree
};
var MindMapService = {
  provide: "DiagramsMindMap",
  useValue: MindMap
};
var RadialTreeService = {
  provide: "DiagramsRadialTree",
  useValue: RadialTree
};
var ComplexHierarchicalTreeService = {
  provide: "DiagramsComplexHierarchicalTree",
  useValue: ComplexHierarchicalTree
};
var DataBindingService = {
  provide: "DiagramsDataBinding",
  useValue: DataBinding
};
var SnappingService = {
  provide: "DiagramsSnapping",
  useValue: Snapping
};
var PrintAndExportService = {
  provide: "DiagramsPrintAndExport",
  useValue: PrintAndExport
};
var BpmnDiagramsService = {
  provide: "DiagramsBpmnDiagrams",
  useValue: BpmnDiagrams
};
var SymmetricLayoutService = {
  provide: "DiagramsSymmetricLayout",
  useValue: SymmetricLayout
};
var ConnectorBridgingService = {
  provide: "DiagramsConnectorBridging",
  useValue: ConnectorBridging
};
var UndoRedoService = {
  provide: "DiagramsUndoRedo",
  useValue: UndoRedo
};
var LayoutAnimationService = {
  provide: "DiagramsLayoutAnimation",
  useValue: LayoutAnimation
};
var DiagramContextMenuService = {
  provide: "DiagramsDiagramContextMenu",
  useValue: DiagramContextMenu
};
var LineRoutingService = {
  provide: "DiagramsLineRouting",
  useValue: LineRouting
};
var AvoidLineOverlappingService = {
  provide: "DiagramsAvoidLineOverlapping",
  useValue: AvoidLineOverlapping
};
var ConnectorEditingService = {
  provide: "DiagramsConnectorEditing",
  useValue: ConnectorEditing
};
var LineDistributionService = {
  provide: "DiagramsLineDistribution",
  useValue: LineDistribution
};
var Ej1SerializationService = {
  provide: "DiagramsEj1Serialization",
  useValue: Ej1Serialization
};
var FlowchartLayoutService = {
  provide: "DiagramsFlowchartLayout",
  useValue: FlowchartLayout
};
var DiagramAllModule = class {
};
DiagramAllModule.ɵfac = function DiagramAllModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DiagramAllModule)();
};
DiagramAllModule.ɵmod = ɵɵdefineNgModule({
  type: DiagramAllModule,
  imports: [CommonModule, DiagramModule],
  exports: [DiagramModule]
});
DiagramAllModule.ɵinj = ɵɵdefineInjector({
  providers: [HierarchicalTreeService, MindMapService, RadialTreeService, ComplexHierarchicalTreeService, DataBindingService, SnappingService, PrintAndExportService, BpmnDiagramsService, SymmetricLayoutService, ConnectorBridgingService, UndoRedoService, LayoutAnimationService, DiagramContextMenuService, LineRoutingService, AvoidLineOverlappingService, ConnectorEditingService, LineDistributionService, Ej1SerializationService, FlowchartLayoutService],
  imports: [[CommonModule, DiagramModule], DiagramModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DiagramAllModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, DiagramModule],
      exports: [DiagramModule],
      providers: [HierarchicalTreeService, MindMapService, RadialTreeService, ComplexHierarchicalTreeService, DataBindingService, SnappingService, PrintAndExportService, BpmnDiagramsService, SymmetricLayoutService, ConnectorBridgingService, UndoRedoService, LayoutAnimationService, DiagramContextMenuService, LineRoutingService, AvoidLineOverlappingService, ConnectorEditingService, LineDistributionService, Ej1SerializationService, FlowchartLayoutService]
    }]
  }], null, null);
})();
var input = ["expanded", "height", "iconCss", "id", "symbols", "title"];
var outputs$2 = [];
var PaletteDirective = class extends ComplexBase {
  constructor(viewContainerRef) {
    super();
    this.viewContainerRef = viewContainerRef;
    setValue2("currentInstance", this, this.viewContainerRef);
    this.registerEvents(outputs$2);
    this.directivePropList = input;
  }
};
PaletteDirective.ɵfac = function PaletteDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PaletteDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
PaletteDirective.ɵdir = ɵɵdefineDirective({
  type: PaletteDirective,
  selectors: [["e-palette"]],
  inputs: {
    expanded: "expanded",
    height: "height",
    iconCss: "iconCss",
    id: "id",
    symbols: "symbols",
    title: "title"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaletteDirective, [{
    type: Directive,
    args: [{
      selector: "e-palettes>e-palette",
      inputs: input,
      outputs: outputs$2,
      queries: {}
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, null);
})();
var PalettesDirective = class extends ArrayBase {
  constructor() {
    super("palettes");
  }
};
PalettesDirective.ɵfac = function PalettesDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PalettesDirective)();
};
PalettesDirective.ɵdir = ɵɵdefineDirective({
  type: PalettesDirective,
  selectors: [["e-palettes"]],
  contentQueries: function PalettesDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PaletteDirective, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
    }
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PalettesDirective, [{
    type: Directive,
    args: [{
      selector: "ejs-symbolpalette>e-palettes",
      queries: {
        children: new ContentChildren(PaletteDirective)
      }
    }]
  }], function() {
    return [];
  }, null);
})();
var inputs$1 = ["accessKey", "allowDrag", "connectorDefaults", "enableAnimation", "enablePersistence", "enableRtl", "enableSearch", "expandMode", "filterSymbols", "getConnectorDefaults", "getNodeDefaults", "getSymbolInfo", "getSymbolTemplate", "height", "ignoreSymbolsOnSearch", "locale", "nodeDefaults", "nodeTemplate", "palettes", "symbolDragSize", "symbolHeight", "symbolInfo", "symbolMargin", "symbolPreview", "symbolWidth", "width"];
var outputs$1 = ["paletteExpanding", "paletteSelectionChange"];
var twoWays$1 = [""];
var SymbolPaletteComponent = class SymbolPaletteComponent2 extends SymbolPalette {
  constructor(ngEle, srenderer, viewContainerRef, injector) {
    super();
    this.ngEle = ngEle;
    this.srenderer = srenderer;
    this.viewContainerRef = viewContainerRef;
    this.injector = injector;
    this.tags = ["palettes"];
    this.element = this.ngEle.nativeElement;
    this.injectedModules = this.injectedModules || [];
    try {
      let mod = this.injector.get("DiagramsBpmnDiagrams");
      if (this.injectedModules.indexOf(mod) === -1) {
        this.injectedModules.push(mod);
      }
    } catch {
    }
    this.registerEvents(outputs$1);
    this.addTwoWay.call(this, twoWays$1);
    setValue2("currentInstance", this, this.viewContainerRef);
    this.context = new ComponentBase();
  }
  ngOnInit() {
    this.context.ngOnInit(this);
  }
  ngAfterViewInit() {
    this.context.ngAfterViewInit(this);
  }
  ngOnDestroy() {
    this.context.ngOnDestroy(this);
  }
  ngAfterContentChecked() {
    this.tagObjects[0].instance = this.childPalettes;
    this.context.ngAfterContentChecked(this);
  }
};
SymbolPaletteComponent.ɵfac = function SymbolPaletteComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SymbolPaletteComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(Injector));
};
SymbolPaletteComponent.ɵcmp = ɵɵdefineComponent({
  type: SymbolPaletteComponent,
  selectors: [["ejs-symbolpalette"]],
  contentQueries: function SymbolPaletteComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c1, 5);
      ɵɵcontentQuery(dirIndex, PalettesDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nodeTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.childPalettes = _t.first);
    }
  },
  inputs: {
    accessKey: "accessKey",
    allowDrag: "allowDrag",
    connectorDefaults: "connectorDefaults",
    enableAnimation: "enableAnimation",
    enablePersistence: "enablePersistence",
    enableRtl: "enableRtl",
    enableSearch: "enableSearch",
    expandMode: "expandMode",
    filterSymbols: "filterSymbols",
    getConnectorDefaults: "getConnectorDefaults",
    getNodeDefaults: "getNodeDefaults",
    getSymbolInfo: "getSymbolInfo",
    getSymbolTemplate: "getSymbolTemplate",
    height: "height",
    ignoreSymbolsOnSearch: "ignoreSymbolsOnSearch",
    locale: "locale",
    nodeDefaults: "nodeDefaults",
    nodeTemplate: "nodeTemplate",
    palettes: "palettes",
    symbolDragSize: "symbolDragSize",
    symbolHeight: "symbolHeight",
    symbolInfo: "symbolInfo",
    symbolMargin: "symbolMargin",
    symbolPreview: "symbolPreview",
    symbolWidth: "symbolWidth",
    width: "width"
  },
  outputs: {
    paletteExpanding: "paletteExpanding",
    paletteSelectionChange: "paletteSelectionChange"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature],
  decls: 0,
  vars: 0,
  template: function SymbolPaletteComponent_Template(rf, ctx) {
  },
  encapsulation: 2,
  changeDetection: 0
});
__decorate([Template()], SymbolPaletteComponent.prototype, "nodeTemplate", void 0);
SymbolPaletteComponent = __decorate([ComponentMixins([ComponentBase])], SymbolPaletteComponent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SymbolPaletteComponent, [{
    type: Component,
    args: [{
      selector: "ejs-symbolpalette",
      inputs: inputs$1,
      outputs: outputs$1,
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      queries: {
        childPalettes: new ContentChild(PalettesDirective)
      }
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: ViewContainerRef
    }, {
      type: Injector
    }];
  }, {
    nodeTemplate: [{
      type: ContentChild,
      args: ["nodeTemplate"]
    }]
  });
})();
var SymbolPaletteModule = class {
};
SymbolPaletteModule.ɵfac = function SymbolPaletteModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SymbolPaletteModule)();
};
SymbolPaletteModule.ɵmod = ɵɵdefineNgModule({
  type: SymbolPaletteModule,
  declarations: [SymbolPaletteComponent, PaletteDirective, PalettesDirective],
  imports: [CommonModule],
  exports: [SymbolPaletteComponent, PaletteDirective, PalettesDirective]
});
SymbolPaletteModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SymbolPaletteModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [SymbolPaletteComponent, PaletteDirective, PalettesDirective],
      exports: [SymbolPaletteComponent, PaletteDirective, PalettesDirective]
    }]
  }], null, null);
})();
var SymbolPaletteAllModule = class {
};
SymbolPaletteAllModule.ɵfac = function SymbolPaletteAllModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SymbolPaletteAllModule)();
};
SymbolPaletteAllModule.ɵmod = ɵɵdefineNgModule({
  type: SymbolPaletteAllModule,
  imports: [CommonModule, SymbolPaletteModule],
  exports: [SymbolPaletteModule]
});
SymbolPaletteAllModule.ɵinj = ɵɵdefineInjector({
  providers: [],
  imports: [[CommonModule, SymbolPaletteModule], SymbolPaletteModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SymbolPaletteAllModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SymbolPaletteModule],
      exports: [SymbolPaletteModule],
      providers: []
    }]
  }], null, null);
})();
var inputs = ["enablePersistence", "enableRtl", "height", "locale", "sourceID", "width"];
var outputs = ["created"];
var twoWays = [""];
var OverviewComponent = class OverviewComponent2 extends Overview {
  constructor(ngEle, srenderer, viewContainerRef, injector) {
    super();
    this.ngEle = ngEle;
    this.srenderer = srenderer;
    this.viewContainerRef = viewContainerRef;
    this.injector = injector;
    this.tags = [""];
    this.element = this.ngEle.nativeElement;
    this.injectedModules = this.injectedModules || [];
    this.registerEvents(outputs);
    this.addTwoWay.call(this, twoWays);
    setValue2("currentInstance", this, this.viewContainerRef);
    this.context = new ComponentBase();
  }
  ngOnInit() {
    this.context.ngOnInit(this);
  }
  ngAfterViewInit() {
    this.context.ngAfterViewInit(this);
  }
  ngOnDestroy() {
    this.context.ngOnDestroy(this);
  }
  ngAfterContentChecked() {
    this.context.ngAfterContentChecked(this);
  }
};
OverviewComponent.ɵfac = function OverviewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || OverviewComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(Injector));
};
OverviewComponent.ɵcmp = ɵɵdefineComponent({
  type: OverviewComponent,
  selectors: [["ejs-overview"]],
  inputs: {
    enablePersistence: "enablePersistence",
    enableRtl: "enableRtl",
    height: "height",
    locale: "locale",
    sourceID: "sourceID",
    width: "width"
  },
  outputs: {
    created: "created"
  },
  standalone: false,
  features: [ɵɵInheritDefinitionFeature],
  decls: 0,
  vars: 0,
  template: function OverviewComponent_Template(rf, ctx) {
  },
  encapsulation: 2,
  changeDetection: 0
});
OverviewComponent = __decorate([ComponentMixins([ComponentBase])], OverviewComponent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverviewComponent, [{
    type: Component,
    args: [{
      selector: "ejs-overview",
      inputs,
      outputs,
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      queries: {}
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: ViewContainerRef
    }, {
      type: Injector
    }];
  }, null);
})();
var OverviewModule = class {
};
OverviewModule.ɵfac = function OverviewModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || OverviewModule)();
};
OverviewModule.ɵmod = ɵɵdefineNgModule({
  type: OverviewModule,
  declarations: [OverviewComponent],
  imports: [CommonModule],
  exports: [OverviewComponent]
});
OverviewModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverviewModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [OverviewComponent],
      exports: [OverviewComponent]
    }]
  }], null, null);
})();
var OverviewAllModule = class {
};
OverviewAllModule.ɵfac = function OverviewAllModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || OverviewAllModule)();
};
OverviewAllModule.ɵmod = ɵɵdefineNgModule({
  type: OverviewAllModule,
  imports: [CommonModule, OverviewModule],
  exports: [OverviewModule]
});
OverviewAllModule.ɵinj = ɵɵdefineInjector({
  providers: [],
  imports: [[CommonModule, OverviewModule], OverviewModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverviewAllModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, OverviewModule],
      exports: [OverviewModule],
      providers: []
    }]
  }], null, null);
})();
export {
  ActivityFlow,
  Annotation,
  AnnotationConstraints,
  AvoidLineOverlapping,
  AvoidLineOverlappingService,
  BasicShape,
  BezierSegment,
  BezierSettings,
  BezierSmoothness,
  BlazorAction,
  BpmnActivity,
  BpmnAnnotation,
  BpmnDataObject,
  BpmnDiagrams,
  BpmnDiagramsService,
  BpmnEvent,
  BpmnFlow,
  BpmnGateway,
  BpmnShape,
  BpmnSubEvent,
  BpmnSubProcess,
  BpmnTask,
  BpmnTextAnnotation,
  BpmnTransactionSubProcess,
  Canvas,
  CanvasRenderer,
  ChildArrangement,
  ChildContainer,
  ClassifierMultiplicity,
  ColumnDefinition,
  Command,
  CommandHandler,
  CommandManager,
  ComplexHierarchicalTree,
  ComplexHierarchicalTreeService,
  ConnectTool,
  ConnectionDataSource,
  ConnectionPointOrigin,
  Connector,
  ConnectorAnnotationDirective,
  ConnectorAnnotationsDirective,
  ConnectorBridging,
  ConnectorBridgingService,
  ConnectorConstraints,
  ConnectorDirective,
  ConnectorDrawingTool,
  ConnectorEditing,
  ConnectorEditingService,
  ConnectorFixedUserHandle,
  ConnectorFixedUserHandleDirective,
  ConnectorFixedUserHandlesDirective,
  ConnectorProperties,
  ConnectorSegment,
  ConnectorShape,
  ConnectorsDirective,
  Container,
  ContextMenuSettings,
  ControlPointsVisibility,
  CrudAction,
  CustomCursorAction,
  CustomCursorDirective,
  CustomCursorsDirective,
  DataBinding,
  DataBindingService,
  DataMappingItems,
  DataSource,
  Decorator,
  Diagram,
  DiagramAction,
  DiagramAllModule,
  DiagramComponent,
  DiagramConnectorSegment,
  DiagramConnectorShape,
  DiagramConstraints,
  DiagramContextMenu,
  DiagramContextMenuService,
  DiagramElement,
  DiagramEvent,
  DiagramEventHandler,
  DiagramGradient,
  DiagramModule,
  DiagramRenderer,
  DiagramShape,
  DiagramShapeStyle,
  DiagramTools,
  DiagramTooltip,
  Ej1Serialization,
  Ej1SerializationService,
  ElementAction,
  ExpandTool,
  FixedUserHandle,
  FixedUserHandleTool,
  FlipDirection,
  FlowShape,
  FlowchartLayout,
  FlowchartLayoutService,
  FlowchartLayoutSettings,
  FreeHandTool,
  Gradient,
  GraphForceNode,
  GraphLayoutManager,
  GridCell,
  GridPanel,
  GridRow,
  Gridlines,
  GroupableView,
  Header,
  HierarchicalTree,
  HierarchicalTreeService,
  Html,
  Hyperlink,
  Image,
  ImageElement,
  KeyGesture,
  KeyModifiers,
  Keys,
  LabelDragTool,
  LabelProperties,
  LabelResizeTool,
  LabelRotateTool,
  LabelTool,
  Lane,
  LayerDirective,
  LayersDirective,
  Layout,
  LayoutAnimation,
  LayoutAnimationService,
  LineDistribution,
  LineDistributionService,
  LineRouting,
  LineRoutingService,
  LinearGradient,
  Margin,
  Matrix,
  MatrixTypes,
  MethodArguments,
  MindMap,
  MindMapService,
  MoveTool,
  MultiplicityLabel,
  Native,
  NoOfSegments,
  Node,
  NodeAnnotationDirective,
  NodeAnnotationsDirective,
  NodeConstraints,
  NodeDirective,
  NodeDrawingTool,
  NodeFixedUserHandle,
  NodeFixedUserHandleDirective,
  NodeFixedUserHandlesDirective,
  NodeProperties,
  NodesDirective,
  OrthogonalSegment,
  Overview,
  OverviewAllModule,
  OverviewComponent,
  OverviewModule,
  Palette,
  PaletteDirective,
  PalettesDirective,
  Path,
  PathAnnotation,
  PathElement,
  PathPort,
  Phase,
  Point,
  PointPort,
  PolyLineDrawingTool,
  PolygonDrawingTool,
  Port,
  PortConstraints,
  PortDirective,
  PortProperties,
  PortVisibility,
  PortsDirective,
  PrintAndExport,
  PrintAndExportService,
  RadialGradient,
  RadialTree,
  RadialTreeService,
  RealAction,
  Rect,
  RelationShip,
  RenderMode,
  RendererAction,
  ResizeTool,
  RotateTool,
  RowDefinition,
  Ruler,
  ScrollActions,
  SelectTool,
  Selector,
  SelectorConstraints,
  Shadow,
  Shape,
  ShapeAnnotation,
  ShapeStyle,
  Size,
  SnapConstraints,
  SnapSettings,
  Snapping,
  SnappingService,
  StackPanel,
  Stop,
  StraightSegment,
  StrokeStyle,
  SwimLane,
  SymbolDragSize,
  SymbolPalette,
  SymbolPaletteAllModule,
  SymbolPaletteComponent,
  SymbolPaletteInfo,
  SymbolPaletteModule,
  SymbolPreview,
  SymbolSize,
  SymmetricLayout,
  SymmetricLayoutService,
  Text,
  TextDrawingTool,
  TextElement,
  TextStyle,
  Thickness,
  ThumbsConstraints,
  ToolBase,
  Transform,
  UmlActivityShape,
  UmlClass,
  UmlClassAttribute,
  UmlClassMethod,
  UmlClassifierShape,
  UmlEnumeration,
  UmlEnumerationMember,
  UmlInterface,
  UmlSequenceActivationBox,
  UmlSequenceDiagram,
  UmlSequenceFragment,
  UmlSequenceFragmentCondition,
  UmlSequenceFragmentType,
  UmlSequenceMessage,
  UmlSequenceMessageType,
  UmlSequenceParticipant,
  UndoRedo,
  UndoRedoService,
  UserHandle,
  Vector,
  ZoomPanTool,
  addChildToContainer,
  alignChildBasedOnaPoint,
  alignElement,
  alignLabelOnSegments,
  arrangeChild,
  bBoxText,
  bezierPoints,
  canMeasureDecoratorPath,
  canResizeCorner,
  canShowControlPoints,
  canShowCorner,
  changeOldFlipDirectionType,
  checkBrowserInfo,
  checkChildNodeInContainer,
  checkParentAsContainer,
  checkPort,
  checkPortRestriction,
  cloneArray,
  cloneBlazorObject,
  cloneObject,
  cloneSelectedObjects,
  completeRegion,
  contains,
  containsBounds,
  contextMenuBeforeItemRender,
  contextMenuClick,
  contextMenuOpen,
  cornersPointsBeforeRotation,
  createHelper,
  deserialize,
  extendArray,
  extendObject,
  findAngle,
  findAnnotation,
  findBounds,
  findConnectorPoints,
  findDistance,
  findMargin,
  findNearestPoint,
  findNodeByName,
  findObjectIndex,
  findObjectType,
  findParentInSwimlane,
  findPath,
  findPoint,
  findPort,
  findPortIndex,
  findPortToolToActivate,
  findToolToActivate,
  flipConnector,
  getAlignedPosition,
  getAlignedPositionForPorts,
  getAnnotationPosition,
  getBasicShape,
  getBezierBounds,
  getBezierDirection,
  getBezierPoints,
  getBounds,
  getBpmnGatewayShapePathData,
  getBpmnLoopShapePathData,
  getBpmnShapePathData,
  getBpmnTaskShapePathData,
  getBpmnTriggerShapePathData,
  getChild,
  getCollectionChangeEventArguements,
  getConnectorArrowType,
  getConnectorDirection,
  getCursor,
  getDecoratorShape,
  getDirection,
  getDropEventArguements,
  getElement,
  getFlippedPoint,
  getFlowShape,
  getFreeHandPath,
  getFunction,
  getIconShape,
  getInOutConnectPorts,
  getIndex,
  getInternalProperties,
  getIntersection,
  getIntersectionPoints,
  getInterval,
  getLineSegment,
  getObjectFromCollection,
  getObjectType,
  getOffset,
  getOffsetOfConnector,
  getOffsetOfPorts,
  getOppositeDirection,
  getOuterBounds,
  getPathOffset,
  getPathString,
  getPoint,
  getPoints,
  getPolygonPath,
  getPortDirection,
  getPortShape,
  getPortsPosition,
  getPreviewSize,
  getRectanglePath,
  getSegmentThumbShapeHorizontal,
  getSegmentThumbShapeVertical,
  getSpaceValue,
  getString,
  getSwimLaneChildren,
  getSymbolSize,
  getTooltipOffset,
  getUMLActivityShapes,
  getUMLFinalNode,
  getUserHandlePosition,
  groupHasType,
  hasSelection,
  hasSingleConnection,
  identityMatrix,
  initFixedUserHandlesSymbol,
  initTooltip,
  insertObject,
  intersect2,
  intersect3,
  isDiagramChild,
  isEmptyVector,
  isLabelFlipped,
  isPointOverConnector,
  isSelected,
  menuClass,
  middleElement,
  moveChildInStack,
  multiplyMatrix,
  orthoConnection2Segment,
  overFlow,
  parsePathData,
  pathSegmentCollection,
  processPathData,
  randomId,
  removeChildInContainer,
  removeChildNodes,
  removeGradient,
  removeItem,
  removeUnnecessaryNodes,
  renderContainerHelper,
  renderStackHighlighter,
  rotateAfterFlip,
  rotateMatrix,
  rotatePoint,
  rotateSize,
  scaleElement,
  scaleMatrix,
  scalePathData,
  selectionHasConnector,
  serialize,
  setConnectorDefaults,
  setPortsEdges,
  setSwimLaneDefaults,
  setUMLActivityDefaults,
  sort,
  sortNodeCollection,
  splitArrayCollection,
  swapBounds,
  templateCompiler,
  textAlignToString,
  transformPath,
  transformPointByMatrix,
  transformPointsByMatrix,
  translateMatrix,
  updateCanvasBounds,
  updateConnector,
  updateContent,
  updateDefaultValues,
  updateHyperlink,
  updateLaneBoundsAfterAddChild,
  updateLaneBoundsWithSelector,
  updateLayoutValue,
  updatePathElement,
  updatePortEdges,
  updateScrollSettingsOffset,
  updateShape,
  updateShapeContent,
  updateStyle,
  updateTooltip,
  updateUmlActivityNode,
  updateZindex,
  updatedSegment,
  upgrade,
  whiteSpaceToString,
  wordBreakToString
};
//# sourceMappingURL=@syncfusion_ej2-angular-diagrams.js.map
