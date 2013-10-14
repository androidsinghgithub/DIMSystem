Ext.define('Dept.model.deptAppModel.DeptAppModel', {
    extend: 'Ext.data.Model',
    alias: 'widget.deptAppModel',
    xtype: 'deptAppModel',
   
    config: {

    	//Dept.view.deptAppView.DeptAppListView
        fields: ['brand','itemName','size','color','sex','noOfItems']
    }
});