Ext.define('Dept.view.deptAppView.DeptApp_ItemsSearch',{
	
	extend: 'Ext.form.Panel',
	alias: 'widget.deptApp_ItemsSearch',
	xtype:	'deptApp_ItemsSearch',
	
	config: {
		
		items: [ 
		          {
	           xtype:'toolbar',
	           title : 'ItemsSearchScreen',
	           docked:'top',
	           items:[{
	        	   xtype : 'button',
	        	   text : 'Back',
	        	   iconCls:'arrow_left',
	        	   itemId : 'dptItemSearchScreenBckbtnId', 
	        	   
	           },
	           
	        	  
	           
	           {
	        	   xtype : 'button',
	        	   text : 'Home',
	        	   iconCls:'home',
	        	   itemId : 'dptItemSearchScreenHomebtnId', 
	        	   
	           },
	           
	           ]
	           },
	           {
                   xtype: 'selectfield',
                   label: 'Choose one',
                   itemId:'dptItemSearchScreenselectField',
                   options: [
                       { text: 'Brand', value: 'brand'},
                       {text: 'ItemName', value: 'itemName'},
                       {text: 'Size',  value: 'size'},
                       {text: 'Color',  value: 'color'},
                       {text: 'Sex', value: 'sex'},
                       {text: 'NoOfItems',  value: 'noOfItems'}
                   ]
               },
//	           {'brand','itemName','size','color','sex','noOfItems
//                   xtype: 'selectfield',
//                   label: 'Choose one',
//                   options: [
//                       {text: 'First Option',  value: 'first'},
//                       {text: 'Second Option', value: 'second'},
//                       {text: 'Third Option',  value: 'third'}
//                   ]
//               },
		       {
		    	   xtype: 'textfield',
		    	   placeHolder: 'searchValue',
		    	   itemId:'searchValueTextFieldId',
		    	   name:'searchValueId',
		    	   cls:'searchValueId'
		       },
		       {
	        	   xtype : 'button',
	        	   text : 'Search',
	        	   //iconCls:'home',
	        	   itemId : 'dptItemSearchbtnId', 
	        	   
	           },
		       ]
}
});