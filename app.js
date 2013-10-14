Ext.application({
	name: 'Dept',
	
	views: ['deptAppView.DeptAppListView',
	        'deptAppView.DeptAppPanelView','deptAppView.DeptAppHome',
	        'deptAppView.DeptApp_itemsEntryScreen','deptAppView.DeptApp_ItemsSearch'],
	models: ['deptAppModel.DeptAppModel'],
	stores: ['deptAppStore.DeptAppStore'],
	controllers: ['deptAppController.DeptAppController'],
	
	launch: function()
	{
		console.log("jh");
	var login = Ext.create('Dept.view.deptAppView.DeptAppPanelView');
	Ext.Viewport.add(login);
	Ext.Viewport.setActiveItem(login);
		
		
	} //// End of launch
	
	
	
	
	
	
});