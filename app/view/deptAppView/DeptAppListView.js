Ext.define('Dept.view.deptAppView.DeptAppListView',{
	extend: 'Ext.List',
	alias: 'widget.deptAppListView',
	xtype:	'deptAppListView',
	//baseCls : 'departmentalStoreAppListViewAfterLaunch',
	config : {
		
		fullScreen : true,
		cls : 'deptAppListViewCls',
	store : 'deptAppStore_ID',
	itemTpl : '<div>{brand} {itemName} {size} {color} {sex} {noOfItems}</div>',
		
		

	},
	
//	
});