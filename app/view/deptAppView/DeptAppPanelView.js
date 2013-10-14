//var itemTpl ='<div>{brand} {itemName} {size} {color} {sex} {no Of Items}</div>';
Ext.define('Dept.view.deptAppView.DeptAppPanelView',{
	extend: 'Ext.Panel',
	alias: 'widget.deptAppPanelView',
	xtype:	'deptAppPanelView',
	baseCls : 'deptAppPanelView',
	
	initialize: function()
	{
	
		var deptToolBar= {
		xtype:'toolbar',
		title : 'DeptInventory',
		docked:'top',
		items:[{
			xtype : 'button',
			text : 'Back',
			width:'85px',
			iconCls:'arrow_left',
			itemId : 'dptPanelBckBtnId', 
		},
					
		{
			xtype : 'button',
			text : 'Home',
			iconCls:'home',
			width:'85px',
			itemId : 'dptPanelHomeBtnId',
		},
		]
		};
		
		var dptOkButton= {
				
				xtype: 'button',
				text: 'ok',
				itemId: 'dptPanelOkBtn',
		};
		

				var list={
				xtype:'deptAppListView',
				height:'500px'
		};
		
		this.add([deptToolBar,list,dptOkButton]);
	}




});