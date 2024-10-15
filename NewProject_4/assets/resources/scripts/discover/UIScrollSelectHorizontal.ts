import { _decorator, Component, Node, CCInteger, CCFloat, EventHandler, log, UITransform, error, instantiate, sp, math } from "cc";
import WebUtils from "../common/WebUtils";
import { drawView } from "../draw/drawView";
import { discoverView } from "./discoverView";
const { ccclass, property } = _decorator;

const dataUrl = {
	game:[
		'images/avatar/btrump',
		'images/avatar/cat',
		'images/avatar/cat',
	],
	ugc:[
		'images/avatar/ugc'
	]
}

export enum EventType {
	SCROLL_START,
	SCROLL_ING,
	SCROLL_END
}

@ccclass('UIScrollSelectHorizontal')
export class UIScrollSelectHorizontal extends Component {

	public static EventType = EventType;
	@property(Node)
	content: Node = null;
	@property({
		type: CCInteger,
		tooltip: '单个控件之间的距离'
	})
	deltaX: number = 100 //x间隔距离
	@property({
		type: CCFloat,
		tooltip: '中心点的缩放比例'
	})
	centerScale: number = 1.0
	@property({
		type: CCFloat,
		tooltip: '边缘点的缩放比例'
	})
	minScale: number = 1.0
	@property({
		type: CCFloat,
		tooltip: '滚动时的速度'
	})
	scrollSpeed: number = 300;
	@property({
		type: EventHandler,
		tooltip: "选择后的回调"
	})
	selectEvents: Array<EventHandler> = [];

	@property({
		type: Node,
		tooltip: '初始化的child'
	})
	instantiate_node: Node = null;

	private childs: Array<Node> = [];
	private isTouching: boolean = false;
	private hasTouchMove: boolean = false;
	private isTestX: boolean = false;
	private _touchId: any = null;
	public currentIndex: number = 0;
	private _toMoveX: number = 1; //移动方向
	private dx: number = 0;
	private moveAim: number = 0;
	discover_view: discoverView

	scrollChildrenCount: number
	scrollChildrenInfo: {
		desc: string;
		hot: number;
		id: number;
		icon: string;
		name: string;
		position: number;
		sort: number;
		tags: string[];
		type: number;
		url: string;
	  }[]
	currentCenterNode: number = 1;

	onLoad() {
		//this.scrollChildrenInfo[0].type === 1 && (this.scrollChildrenInfo = [this.scrollChildrenInfo[1], this.scrollChildrenInfo[0]])
		for (var i = 0; i < this.scrollChildrenCount; i++) {
			const node_child = instantiate(this.instantiate_node)
			//WebUtils.getRemoteImg(this.scrollChildrenInfo[i].icon,node_child.getChildByName('icon'))
			if(this.scrollChildrenInfo[i].type === 1){

					WebUtils.getResouceImg(dataUrl.game[i],node_child.getChildByName('icon'))

					WebUtils.getResouceImg(dataUrl.game[i],node_child.getChildByName('icon'))
					if(i === 0){
						node_child.on(Node.EventType.TOUCH_START, ()=>{
							this.scrollToLeft()
						})
					}

					if(i === 1){
						node_child.on(Node.EventType.TOUCH_START, ()=>{
							this.scrollToRight()
						})
					}
				
			}else{
				WebUtils.getResouceImg(dataUrl.ugc[i],node_child.getChildByName('icon'))
			}
			node_child.active = true
			this.content.addChild(node_child)
		}
		this.childs = [];
		for (var i = 0; i < this.content.children.length; i++) {
			this.childs[i] = this.content.children[i];
			this.childs[i].setPosition(this.deltaX * (i - 1), this.childs[i].getPosition().y);
			log("第" + i + "个预制体" + "，坐标为:" + this.childs[i].getPosition());
		}
		this.isTouching = false
		this.hasTouchMove = false
		this.isTestX = false;
		this._touchId = null;
		// this.currentIndex = 0;
		this.scrollTo(0, false);
		//this.scrollChildrenInfo[i].type === 1 && this.scrollToLeft()
		this.scrollToLeft()
	}
	/** 滚动到指定节点 
	 * @param anim 是否带移动动画
	*/
	scrollTo(idx: number, anim: boolean = true) {
		if (idx < 0 && idx >= this.childs.length) {
			return error(this.node.name + '->移动超出边界面')
		}
		this.currentCenterNode = idx
		this.currentIndex = idx;
		this.discover_view.setCurrentPlayInfo(this.scrollChildrenInfo[this.currentIndex])
		this.moveAim = idx;
		if (!anim) {
			for (var i = 0; i < this.childs.length; i++) {
				this._checkChildX(this.childs[i], (i - idx) * this.deltaX)
			}
		} else {
			this.isTestX = true
			Component.EventHandler.emitEvents(this.selectEvents, {
				target: this,
				type: EventType.SCROLL_START,
				index: this.currentIndex
			});
		}
	}
	/** 向左滚一个点 */
	scrollToLeft() {
		this._toMoveX = 1
		this.scrollChildrenInfo.length >= 2 && this.scrollTo(1)
		//this.scrollTo((this.currentIndex - 1 + this.childs.length) % this.childs.length)
	}

	/** 向左滚一个点 */
	scrollToRight() {
		this._toMoveX = -1
		this.scrollTo(0)
		//this.scrollTo((this.currentIndex + 1 + this.childs.length) % this.childs.length)
	}

	_checkChildX(child, x) {
		if (x > this.childs.length / 2 * this.deltaX) {
			x -= this.childs.length * this.deltaX
		} else if (x < -this.childs.length / 2 * this.deltaX) {
			x += this.childs.length * this.deltaX
		}
		child.setPosition(x, child.position.y);
		let dx = Math.min(Math.abs(x), this.deltaX)
		let scaleX = (1 - dx / this.deltaX) * (this.centerScale - this.minScale) + this.minScale;
		child.setScale(scaleX, scaleX);
	}

	start() {
		if(this.scrollChildrenInfo[0].type === 1){
			// this.content.on(Node.EventType.TOUCH_START, this._onTouch, this);
			// this.content.on(Node.EventType.TOUCH_MOVE, this._onTouch, this);
			// this.content.on(Node.EventType.TOUCH_END, this._onTouchEnd, this);
			// this.content.on(Node.EventType.TOUCH_CANCEL, this._onTouchEnd, this);
		}

	}
	_onTouch(event) {
		if (this._touchId != null && (event.touch._startPoint.x != this._touchId._startPoint.x) && (event.touch._startPoint.y != this._touchId._startPoint.y)) {
			return;
		}
		if (event.type == Node.EventType.TOUCH_START) {
			this.isTouching = true;
			this.hasTouchMove = false
			this.isTestX = false;
			this._touchId = event.touch;
			this.dx = event.getStartLocation().x;
			log("触碰", event.getStartLocation())
			let evt = {
				target: this,
				type: EventType.SCROLL_START,
				index: this.currentIndex
			}
			Component.EventHandler.emitEvents(this.selectEvents, evt);
			return;
		}
		this.hasTouchMove = true;
		var dx = event.getLocation().x - this.dx
		this._move(dx);
		this.dx = event.getLocation().x
		var evt = {
			target: this,
			type: EventType.SCROLL_ING,
			dx: this.dx
		}
		Component.EventHandler.emitEvents(this.selectEvents, evt);
	}
	_onTouchEnd(event) {
		if (this._touchId != null && (event.touch._startPoint.x != this._touchId._startPoint.x) && (event.touch._startPoint.y != this._touchId._startPoint.y)) {
			return;
		}
		this.isTouching = false;
		if (event.type == Node.EventType.TOUCH_END || event.type == Node.EventType.TOUCH_CANCEL) {
			this._touchId = null;
		}
		let lo = this.node.getComponent(UITransform).convertToNodeSpaceAR(event.getLocation())
		if (!this.hasTouchMove) {

			let mx = Math.ceil((lo.x - this.deltaX / 2) / this.deltaX)
			if (mx === 0) {
				var event1 = {
					target: this,
					type: EventType.SCROLL_END,
					index: this.currentIndex
				}
				Component.EventHandler.emitEvents(this.selectEvents, event1);
			} else {
				this.moveAim = (this.currentIndex + mx + this.childs.length) % this.childs.length
				this._toMoveX = mx > 0 ? -1 : 1
				this.isTestX = true;
			}
			return;
		}
		let max = this.deltaX;
		let minidx = 0
		for (let i = 0; i < this.childs.length; i++) {
			if (Math.abs(this.childs[i].position.x) <= max) {
				max = Math.abs(this.childs[i].position.x)
				minidx = i;
			}
		}
		this.moveAim = minidx
		this._toMoveX = this.childs[minidx].position.x >= 0 ? -1 : 1
		this.isTestX = true;
	}
	_move(dt) {
		for (var i = 0; i < this.childs.length; i++) {
			this._checkChildX(this.childs[i], this.childs[i].position.x + dt)
		}
	}

	update(dt) {
		if (this.isTouching || !this.isTestX || Number.isNaN(this.moveAim)) {
			return;
		}
		var stepx = this._toMoveX * dt * this.scrollSpeed
		let lx = this.childs[this.moveAim].position.x

		//!2个child 先这么写过😧
		if(Math.abs(this.childs[this.currentCenterNode].getPosition().x) <= 20){
			return
		}
		for (var i = 0; i < this.childs.length; i++) {
			this._checkChildX(this.childs[i], this.childs[i].position.x + stepx)
		}

		var x = this.childs[0].position.x;
		var idx = Math.round(x / this.deltaX);
		var tox = this.deltaX * idx;
		let cx = this.childs[this.moveAim].position.x
		//!2个child 先这么写过😧
		// if (lx * cx < 0 && Math.abs(cx) < this.deltaX) {
		// 	this.isTestX = false;
		// 	for (let i = 0; i < this.childs.length; i++) {
		// 		if (Math.abs(this.childs[i].position.x) <= Math.abs(stepx)) {
		// 			this.currentIndex = i;
		// 			this.discover_view.setCurrentPlayInfo(this.scrollChildrenInfo[this.currentIndex])
		// 			break;
		// 		}
		// 	}
		// 	for (var i = 0; i < this.childs.length; i++) {
		// 		this._checkChildX(this.childs[i], this.childs[i].position.x + tox - x)
		// 	}
		// 	var event = {
		// 		target: this,
		// 		type: EventType.SCROLL_END,
		// 		index: this.currentIndex
		// 	}
		// 	Component.EventHandler.emitEvents(this.selectEvents, event);
		// }
	}

	scrolling() {
		log("scrolling");
	}
}
